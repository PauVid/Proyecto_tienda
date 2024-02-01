import './style.css'


const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },  
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },  
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',
  },
];


// Creamos los elementos e importamos los productos 

const printProductList = () => {

  const productSection = document.querySelector("#app");

    for (const product of products){

      const productName = document.createElement("h3");
      const productPrice = document.createElement("p");
      const productStars = document.createElement("img");
      const productReviews = document.createElement("p");
      const productSeller = document.createElement("p");
      const productImage = document.createElement("img");
      const divInfo = document.createElement("div");
      const divProduct = document.createElement("div");
      const divImage = document.createElement("div");
      const divInfoElm = document.createElement("div");



      productName.textContent = product.name;
      productName.classList.add("product-name");
      productPrice.textContent = product.price;
      productPrice.classList.add("product-price");
      productStars.src = product.starts;
      productStars.classList.add("product-stars");
      productReviews.textContent = product.reviews;
      productReviews.classList.add("product-reviews");
      productSeller.textContent = product.seller;
      productSeller.classList.add("seller-name");
      productImage.src = product.image;
      productImage.classList.add("product-image");

      
      
      divInfo.append(productName);
      divInfo.append(productPrice);
      divInfoElm.append(productStars);
      divInfoElm.append(productReviews);
      divInfoElm.append(productSeller);
      divInfo.classList.add("product-info");
      divInfoElm.classList.add("product-elements");

      divImage.append(productImage);
      divImage.classList.add("product-image");


      

      divProduct.append(divImage);
      divProduct.append(divInfo);
      divProduct.append(divInfoElm);
      divProduct.classList.add("product");

      productSection.append(divProduct);
      productSection.classList.add("product-section");

    };
};

printProductList();



