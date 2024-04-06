let list = document.querySelector(".wrapper .list");
let items = document.querySelectorAll(".wrapper .list .item");
let dots = document.querySelectorAll(".wrapper .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadWrapper();
};

let refreshWrapper = setInterval(() => {
  next.click();
}, 5000);
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadWrapper();
};

function reloadWrapper() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".wrapper .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshWrapper);
  let refreshWrapper = setInterval(() => {
    next.click();
  }, 5000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadWrapper();
  });
});      
const searchInput= document.getElementById("searchInput");
const productsList = document.querySelector(".products");
let filteredproducts=[];
const fetchData = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((products) => {
      filteredproducts = products;
      products.slice(0, 4).forEach((product) => {
        const card = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardPrice = document.createElement("span");
        const cardTitle = document.createElement("h3");
        // const cardRate = document.createElement("span");

        card.classList.add("card");

        cardImg.src = product.image;
        cardTitle.textContent = product.title;
        cardPrice.textContent = product.price;
        // cardRate.textContent = product.rating.rate;

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        // card.appendChild(cardRate);

        productsList.appendChild(card);
      });
    });
};
const searchProducts = (e)=>{
  const inputValue = e.target.value.toLowerCase();
  const filteredData = filteredproducts.filter((item)=>
  item.title.toLowerCase().includec(inputValue)
  );
  console.log(filteredData);
  renderData(filteredData)
};

searchInput.addEventListener("input", searchProducts)
fetchData();


const productsLists = document.querySelector(".productss");

const fetchDatas = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((productss) => {
      productss.slice(4, 8).forEach((products) => {
        const card = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardPrice = document.createElement("span");
        const cardTitle = document.createElement("h3");
        // const cardRate = document.createElement("span");

        card.classList.add("card");

        cardImg.src = products.image;
        cardTitle.textContent = products.title;
        cardPrice.textContent = products.price;
        // cardRate.textContent = products.rating.rate;

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        // card.appendChild(cardRate);

        productsLists.appendChild(card);
      });
    });
};
fetchDatas();

let search=document.querySelector(".search");

search.onclick=function(){
  document.querySelector(".contan").classList.toggle('active')
}


const input=document.getElementById("input");
const submit=document.getElementById("submit");

submit.addEventListener("submit",(e)=>
  e.preventDefault());


input.addEventListener("input",(e)=>{
  const res =e.target.value;
let result =res.search(passwordFor);
if(result==0){
  input.style.borderBlockColor="green"
}
});