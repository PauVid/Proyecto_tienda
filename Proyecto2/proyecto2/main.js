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
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },  
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
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },
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
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },
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
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },
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
    image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },

];


// Creamos los elementos e importamos los productos 

const productList = () => {

    for (let i = 0; i < products.length; i++){

      const productName = document.createElement("h3");
      const productPrice = document.createElement("p");
      const productStars = document.createElement("img");
      const productReviews = document.createElement("p");
      const productSeller = document.createElement("p");
      const productImage = document.createElement("img");
      const divInfo = document.createElement("div");
      const divProduct = document.createElement("div");
      const divImage = document.createElement("div");



      productName.textContent = products.name;
      productPrice.textContent = products.price;
      productStars.textContent = products.starts;
      productReviews.textContent = products.reviews;
      productSeller.textContent = products.seller;
      productImage.textContent = products.image;
      
      
      divInfo.append(productName);
      divInfo.append(productPrice);
      divInfo.append(productStars);
      divInfo.append(productReviews);
      divInfo.append(productSeller);

      divImage.append(productImage);

      divProduct.append(divImage);
      divProduct.append(divInfo);

      document.body.append(divProduct);



    }
}
