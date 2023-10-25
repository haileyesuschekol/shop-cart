let shop = document.getElementById("shop")

let basket = []

let shopItemsData = [
  {
    id: "sh01",
    name: "Shirt",
    price: 25,
    description: "this is a discription of the shirt",
    img: "images/img-1.jpg",
  },
  {
    id: "sh02",
    name: "Office Shirt",
    price: 65,
    description: "this is a discription of office shirt",
    img: "images/img-2.jpg",
  },
  {
    id: "sh03",
    name: "T Shirt",
    price: 45,
    description: "this is a discription of the T shirt",
    img: "images/img-3.jpg",
  },
  {
    id: "sh04",
    name: "Men Suit",
    price: 250,
    description: "this is a discription of the men suit",
    img: "images/img-4.jpg",
  },
]

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, description, price, img } = x
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
                    <div id=${id} class="quantity">0</div>
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
}

//decrement
let decrement = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem.id)

  if (search.item === 0) return
  else search.item -= 1

  update(selectedItem.id)
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
