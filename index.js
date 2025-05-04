function updateMenuItems(items) {
  for (let i = 0; i < 4; i++) {
    let item = document.getElementById("item" + i);
    item.querySelector("img").src = items[i].img;
    item.querySelector("img").alt = items[i].title;
    item.querySelector("h4").textContent = items[i].title;
    let ps = item.querySelectorAll("p");
    ps[0].textContent = items[i].desc;
    ps[1].textContent = items[i].price;
  }
}

function setActiveCategory(clickedElement) {
  document.querySelectorAll(".category").forEach((cat) => {
    cat.classList.remove("active");
  });
  clickedElement.classList.add("active");
}

function coffeeItems(el) {
  setActiveCategory(el);
  const coffee = [
    {
      img: "images/espresso.jpg",
      title: "Espresso",
      desc: "Rich and bold espresso shot drink",
      price: "Rs. 900",
    },
    {
      img: "images/latte.jpg",
      title: "Latte",
      desc: "Espresso with steamed foam milk",
      price: "Rs. 1000",
    },
    {
      img: "images/cappuccino.jpg",
      title: "Cappuccino",
      desc: "Espresso topped with frothy milk",
      price: "Rs. 1000",
    },
    {
      img: "images/Mocha.jpg",
      title: "Mocha",
      desc: "Espresso with chocolate and milk",
      price: "Rs. 1100",
    },
  ];
  updateMenuItems(coffee);
}

function pastryItems(el) {
  setActiveCategory(el);
  const pastries = [
    {
      img: "images/patties.jpg",
      title: "Fish Patties",
      desc: "Flaky pastry filled with spicy fish",
      price: "Rs. 150",
    },
    {
      img: "images/Cheese-Roll.webp",
      title: "Cheese Rolls",
      desc: "Sri Lankan style vegetable-stuffed rolls with cheese",
      price: "Rs. 280",
    },
    {
      img: "images/samosa.jpeg",
      title: "Vegetable Samosa",
      desc: "Crispy pastry with spicy veggies",
      price: "Rs. 160",
    },
    {
      img: "images/Chicken-Pizza.jpg",
      title: "Chicken Pizza",
      desc: "Soft crust with meat and cheese topping",
      price: "Rs. 500",
    },
  ];
  updateMenuItems(pastries);
}

function beverageItems(el) {
  setActiveCategory(el);
  const coldBeverages = [
    {
      img: "images/iced-milo.jpeg",
      title: "Iced Milo",
      desc: "Chilled Milo drink with ice cubes",
      price: "Rs. 300",
    },
    {
      img: "images/iced-coffee.webp",
      title: "Iced Coffee",
      desc: "Cold coffee with creamy milk & sugar",
      price: "Rs. 350",
    },
    {
      img: "images/iced-tea.jpg",
      title: "Iced Tea",
      desc: "Lemon-infused iced Ceylon tea refreshment",
      price: "Rs. 250",
    },
    {
      img: "images/avocado-shake.jpeg",
      title: "Avocado Shake",
      desc: "Creamy avocado milkshake delight",
      price: "Rs. 400",
    },
  ];
  updateMenuItems(coldBeverages);
}
