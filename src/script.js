let shop = document.getElementById("shop")

let basket = JSON.parse(localStorage.getItem("data")) || []

let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Shoe",
    price: 45,
    description: "original comfort.",
    img: "images/img-1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Cap",
    price: 30,
    description: "stylish cap.",
    img: "images/img-2.png",
  },
  {
    id: "wuefbncxbsn",
    name: "Habesha Cap",
    price: 25,
    description: "Style plus comfort.",
    img: "images/img-3.png",
  },
  {
    id: "thyfhcbcv",
    name: "Habesha Dress",
    price: 300,
    description: "Stylish dress.",
    img: "images/img-4.png",
  },
  {
    id: "thiecbawdjksadjk",
    name: "Habesha Dress",
    price: 25,
    description: "stylish Dress.",
    img: "images/img-5.png",
  },
  {
    id: "iuertrywebncdjksadjk",
    name: "Jawleries",
    price: 200,
    description: "Beautiful Jawleries.",
    img: "images/img-6.png",
  },
  {
    id: "thierytbvcbvzdhadjk",
    name: "Jawleries",
    price: 450,
    description: "Beautiful Jawleries.",
    img: "images/img-7.png",
  },
  {
    id: "trfoiwfcnbcawdjksadjk",
    name: "shirt",
    price: 45,
    description: "Nice mens shirt.",
    img: "images/img-8.png",
  },
  {
    id: "cbvxbcvsceldk",
    name: "Shirt",
    price: 85,
    description: "Mens Shirt.",
    img: "images/img-9.png",
  },
  {
    id: "oiopijmjkhuihb",
    name: "Shirt",
    price: 120,
    description: "Mens Black Shirt.",
    img: "images/img-10.png",
  },
  {
    id: "oiopijewyiohbjhib",
    name: "Cultural Shoe",
    price: 35,
    description: "Beautiful Shoe.",
    img: "images/img-11.png",
  },
  {
    id: "rtytytuyuytyytbvncv",
    name: "Watch",
    price: 350,
    description: "Nice Watch.",
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
            <img width="220" height= "200" src="${img}" alt="">
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
