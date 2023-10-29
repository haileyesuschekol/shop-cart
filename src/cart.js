let lable = document.getElementById("lable")
let shoppingCart = document.getElementById("shopping-cart")
shopItemsData = [
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

basket = JSON.parse(localStorage.getItem("data")) || []

calculation = () => {
  const cartAmount = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
  document.getElementById("cart-amount").innerHTML = cartAmount
}

calculation()

let generateCartItem = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x
        let search = shopItemsData.find((x) => x.id === id) || []

        return `
        <div class = 'cart-item'> 
            <img width = '100' src = ${search.img} alt =""/> 
            <div class = 'details'>
                <div class = 'title-price-x'>
                    <h4 class = 'title-price'>
                     <p>${search.name}</p>
                     <p class = 'cart-item-price'>$ ${search.price}</P>
                    </h4>
                    <i onclick = "removeItem(${id})" class="bi bi-x-lg"></i>
                </div>
                <div class="btn">
                    <i onclick='decrement(${id})' class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${item}
                    </div>
                    <i onclick='increment(${id})' class="bi bi-plus-lg"></i>
                    </div>
                <h3>$ ${item * search.price}</h3>
            </div>
        </div>`
      })
      .join(""))
  } else {
    shoppingCart.innerHTML = ``
    lable.innerHTML = `
    <h2> Cart Is Empty </h2>
    <a href = 'index.html'><button class = 'back-btn'>Back To Home</button></a>
    `
  }
}

generateCartItem()

//increment
increment = (id) => {
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

  generateCartItem()
  update(selectedItem.id)
  localStorage.setItem("data", JSON.stringify(basket))
}

//decrement
decrement = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem.id)
  if (search === undefined) return
  else if (search.item === 0) return
  else {
    search.item -= 1
  }
  update(selectedItem.id)
  basket = basket.filter((x) => x.item !== 0)
  generateCartItem()
  localStorage.setItem("data", JSON.stringify(basket))
}

//update
update = (id) => {
  let search = basket.find((x) => x.id === id)
  console.log(search.item)
  document.getElementById(id).innerHTML = search.item
  calculation()
}

let removeItem = (id) => {
  let selectedItem = id
  basket = basket.filter((x) => x.id !== selectedItem.id)
  generateCartItem()
  localStorage.setItem("data", JSON.stringify(basket))
}

let totalAmount = () => {}
