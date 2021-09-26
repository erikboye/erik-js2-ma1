import fetchData from "./libs/fetchData.js";
import { filteringAnArray } from "./libs/filter.js";

const data = await fetchData("https://fakestoreapi.com/products");

console.log("data", data);

const container = document.querySelector(".cardContainer");
console.log(container);
for (let i = 0; i < data.length; i++) {
  container.innerHTML += `<div class="col-sm-3">
    <img src="${data[i].image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data[i].title}</h5>
      <p class="card-text">${data[i].description}</p>
      <p class="card-text price">${data[i].price}</p>
      <a href="#" class="btn btn-primary">Add to favourites</a>
    </div>
  </div>`;
}

let searchBar = document.querySelector(".search");
console.log(searchBar);
searchBar.onkeyup = function () {
  container.innerHTML = "";

  let sortedByPrice = filteringAnArray(data, searchBar.value);
  console.log(sortedByPrice);

  for (let i = 0; i < sortedByPrice.length; i++) {
    container.innerHTML += `<div class="col-sm-3">
      <img src="${sortedByPrice[i].image}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${sortedByPrice[i].title}</h5>
        <p class="card-text">${sortedByPrice[i].description}</p>
    
        <a href="#" class="btn btn-primary">Add to favourites</a>
      </div>
    </div>`;
  }
};
