javascript
const categories = [
    "Men Clothing",
    "Women Clothing",
    "Kids Wear",
    "Footwear",
    "Beauty Products",
    "Home Decor",
    "Accessories",
    "Sports Wear"
];

const container = document.getElementById("categoryItems");

categories.forEach(category => {
    const div = document.createElement("div");
    div.className = "category_card";
    div.innerText = category;
    container.appendChild(div);
});