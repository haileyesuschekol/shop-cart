let shop = document.getElementById("shop")

let basket = JSON.parse(localStorage.getItem("data")) || []

let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
  {
    id: "thiecbawdjksadjk",
    name: "Mens Tie",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-5.png",
  },
  {
    id: "iuertrywebncdjksadjk",
    name: "Casual shoes",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-6.png",
  },
  {
    id: "thierytbvcbvzdhadjk",
    name: "black suit",
    price: 450,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-7.png",
  },
  {
    id: "trfoiwfcnbcawdjksadjk",
    name: "polo shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-8.png",
  },
  {
    id: "cbvxbcvsceldk",
    name: "denim shirt",
    price: 85,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-9.png",
  },
  {
    id: "oiopijmjkhuihb",
    name: "denim pants",
    price: 120,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-10.png",
  },
  {
    id: "oiopijewyiohbjhib",
    name: "basic cap",
    price: 35,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-11.png",
  },
  {
    id: "rtytytuyuytyytbvncv",
    name: "leather boots",
    price: 350,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-12.png",
  },
]

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, description, price, img } = x
      let searching = basket.find((x) => x.id === id) || []
      return `
 <div class="item" product-id-${id}>
            <img width="220" src="${img}" alt="">
            <div class="detail">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="btn">
                    <i onclick='decrement(${id})' class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">
                      ${searching.item === undefined ? 0 : searching.item}
                    </div>
                    <i onclick='increment(${id})' class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    .join(""))
}

generateShop()

//increment
let increment = (id) => {
  let selectedItem = id

  let search = basket.find((x) => x.id === selectedItem.id)

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    })
  } else {
    search.item += 1
  }

  update(selectedItem.id)
  localStorage.setItem("data", JSON.stringify(basket))
}

//decrement
let decrement = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem.id)
  if (search === undefined) return
  else if (search.item === 0) return
  else {
    search.item -= 1
  }
  update(selectedItem.id)
  basket = basket.filter((x) => x.item !== 0)
  localStorage.setItem("data", JSON.stringify(basket))
}

//update
let update = (id) => {
  let search = basket.find((x) => x.id === id)
  console.log(search.item)
  document.getElementById(id).innerHTML = search.item
  calculation()
}
let calculation = () => {
  const cartAmount = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
  document.getElementById("cart-amount").innerHTML = cartAmount
}

calculation()
