let shop = document.getElementById("shop")

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
                        <i class="bi bi-plus-lg"></i>
                        <div class="quantity">99</div>
                        <i class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    .join(""))
}

generateShop()
