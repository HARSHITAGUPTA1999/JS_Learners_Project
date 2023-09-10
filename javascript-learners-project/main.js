//all javascript code comes here

//task1 - show/hide the navbar on click of menu
function showHideNavBar() {
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document
        .querySelector("header nav .wrapper")
        .classList.remove("nav-open");
    });
}

// ----------------------------------------------------------------------------------------

//task2 - make the greeting section dynamic
// a) the mesagges should be dynamic
// b) on toggle of cel to fahr --> change and display correct temperature
// c) weather condition depends on time of day
//default : sunny | 9 am - 3 pm : cloudy | 3 pm - 7 pm : rainy |

function greetings(currentTemp) {
  
  let temperature = currentTemp ? currentTemp : 44.5 ;
  let {weatherCondition,greetingText} = showWeatherCondititon();
  let userLocation = "Chandigarh";

  // a) setting dynamic messages
  let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature
    .toFixed(2)
    .toString()}°C outside.`;

  document.getElementById("greeting").innerHTML = greetingText;

  document.getElementById("weather").innerHTML = weatherText;

  //b) changing temp value on basis of toggle
  controlToggle(temperature, weatherCondition, userLocation, weatherText);
}

function controlToggle(
  temperature,
  weatherCondition,
  userLocation,
  weatherText
) {
  document.querySelector(".weather-group").addEventListener("click", (e) => {
    let isFahr = false;
    let resultTemp = "";
    if (e.target.id == "fahr") {
      isFahr = true;
      resultTemp = convertTemp(isFahr, temperature).toString() + "°F";
    } else {
      isFahr = false;
      resultTemp = convertTemp(isFahr, temperature).toString() + "°C";
    }

    weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${resultTemp} outside.`;

    document.getElementById("weather").innerHTML = weatherText;
  });
}

function convertTemp(isFahr, temp) {
  if (isFahr) {
    let fahrTemp = (temp * 9) / 5 + 32;
    return fahrTemp.toFixed(2);
  } else {
    let celsiusTemp = temp;
    return celsiusTemp.toFixed(2);
  }
}

function showWeatherCondititon() {
  let currDate = new Date();
  currHours = currDate.getHours();
  let weatherCondition = "sunny";
  let greetingText = "Hello"
  if (currHours >= 9 && currHours < 15) {
    weatherCondition = "cloudy";
    greetingText = "Good Morning"
  } else if (currHours >= 15 && currHours < 19) {
    weatherCondition = "rainy";
    greetingText ="Good Afternoon"
  }

  return {weatherCondition,greetingText};
}

// ----------------------------------------------------------------------------------------

//task3 - make the clock work
function clock() {
  setInterval(() => {
    let currDate = new Date();
    currHours = currDate.getHours().toString().padStart(2, "0");
    currMinutes = currDate.getMinutes().toString().padStart(2, "0");
    currSeconds = currDate.getSeconds().toString().padStart(2, "0");
    document.querySelector('span[data-time="hours"]').innerHTML = currHours;
    document.querySelector('span[data-time="minutes"]').innerHTML = currMinutes;
    document.querySelector('span[data-time="seconds"]').innerHTML = currSeconds;
  }, 1000);
}

// ----------------------------------------------------------------------------------------

//task4 - gallery section : change the main image on basis of selected thumbnail
// a) by default first thumbnail should show as main image and selected
function gallerySection() {
  const mainImage = document.querySelector("#gallery").children[0];
  setDefaultImage(mainImage);

  const thumbnails = document.querySelector("#gallery .thumbnails");
  displayThumbnails(mainImage, thumbnails);
}

function setDefaultImage(mainImage) {
  //by default first thumbnail should show as main image
  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;
}

function displayThumbnails(mainImage, thumbnails) {
  //selecting a thumbnail - we use for loop --> why ? to avoid repetition of code + handle dynamic values
  //if someone adds 5 images --> write the same code 5 times

  galleryImages.forEach((image, index) => {
    //adding images dynamically to html using an array
    let thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    //by default i want the first image to be selected
    thumbnail.dataset.selected = index == 0 ? true : false;
    thumbnail.dataset.arrayIndex = index;
    thumbnails.append(thumbnail);

    //the image clicked should be selected.Rest should be unselected and mainImage should change accordingly
    thumbnail.addEventListener("click", (e) => {
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      //unselect all images and then mark the selected image as true
      thumbnails.querySelectorAll("img").forEach((image) => {
        image.dataset.selected = false;
      });

      e.target.dataset.selected = true;
    });
  });
}

// ----------------------------------------------------------------------------------------

//task5 - make the footer dynamic by year
function footerUpdate() {
  let currDate = new Date();
  let currYear = currDate.getFullYear();
  let footerText = `<p> &copy ${currYear} | All rights reserved | JS Learners Project | Harshita Gupta</p>`;
  document.querySelector("footer").innerHTML = footerText;
}

// ----------------------------------------------------------------------------------------

//task6 - products section : display dynamically + make the filters work + if price = 0 -> display free
/* 
<div class="product-item">
    <img src="./assets/products/img6.png" alt="AstroFiction">
    <div class="product-details">
        <h3 class="product-title">AstroFiction</h3>
        <p class="product-author">John Doe</p>
        <p class="price-title">Price</p>
        <p class="product-price">$ 49.90</p>
    </div>
</div>
*/

function productSection(){

    const productSection = document.querySelector(".products-area");
    
    //by default - all products will be shown and all tab is selected
    getProducts(products,productSection);
    
    //filters
    showFilter(productSection);

}

//dynamically add products to the html  
function getProducts(inputArr,productSection){

    inputArr.forEach((product,index)=>{
        
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");
        
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        

        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.innerHTML = product.title;
        
        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.innerHTML = product.author;

        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.innerHTML = "Price";


        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.innerHTML = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";
        
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        productItem.append(productImage);
        productItem.append(productDetails);
        productSection.append(productItem);
    });

}

function showFilter(productSection){

    let totalProducts = products.length;

    let paidProducts = products.filter((item)=>{
        return item.price > 0;
    })

    let freeProducts = products.filter((item)=>{
        return item.price == 0;
    })

    getFilterCount(totalProducts,paidProducts,freeProducts);
    
    filterProducts(products,paidProducts,freeProducts,productSection);
    
}

function getFilterCount(totalProducts,paidProducts,freeProducts){

    document.querySelector(".products-filter label[for=all] .product-amount").innerHTML = totalProducts;

    document.querySelector(".products-filter label[for=paid] .product-amount").innerHTML = paidProducts.length;

    document.querySelector(".products-filter label[for=free] .product-amount").innerHTML = freeProducts.length;

}


function filterProducts(products,paidProducts,freeProducts,productSection){

    document.querySelector(".products-filter").addEventListener("click",(event)=>{
        //empty the product section completely and add products anew everytime on when changing tab
        productSection.innerHTML = "";
        let selectedId = event.target.id;
        if( selectedId == "all"){
            getProducts(products,productSection);
        }else if(selectedId == "paid" ){
            getProducts(paidProducts,productSection);
        }else if(selectedId == "free"){
            getProducts(freeProducts,productSection);
        }
    });

}
// --------------------------------------------------------------------------------

//task8 - make an api call to get real time weather data and populate the weather details with the same
function weatherApiCall(){
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude=30.73&longitude=76.77&current_weather=true")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log("data",data);
        let temp = data.current_weather.temperature;
        greetings(temp);
    }).catch((err)=>{
        console.log(err);
    })
}


// -------------------------------------------------------------------------------

//calling functions for execution
const galleryImages = [
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Image 3",
  },

  {
    src: "./assets/gallery/image1.jpg",
    alt: "Image 1",
  },

  {
    src: "./assets/gallery/image2.jpg",
    alt: "Image 2",
  },
];

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35.2234,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

weatherApiCall();
showHideNavBar();
clock();
gallerySection();
footerUpdate();
productSection();

