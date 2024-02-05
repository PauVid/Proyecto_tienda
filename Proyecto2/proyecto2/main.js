import './style.css'


const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 2504,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg'
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 2250,
    seller: 'Agustín',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },  
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 25,
    seller: 'Julián',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },  
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'Agustín',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'Julián',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'Agustín',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    starts: 4,
    reviews: 250,
    seller: 'Julián',
    image: 'https://img.pccomponentes.com/pcblog/1691618400000/768x504-ordenadores-2.jpg',
  },
];

// function prueba() {
//   console.log(products[3].seller);
// }

// prueba()

// Creamos los elementos e importamos los productos 

const printProductList = () => {

  const productSection = document.querySelector("#app");

    for (const product of products){

      const ulCards = document.createElement("ul");
      ulCards.classList.add("cards");

      const liCard = document.createElement("li");

      const aCard = document.createElement("a");
      aCard.classList.add("card");

      const imgCard = document.createElement("img");
      imgCard.classList.add("card__image");

      const divCardOverlay = document.createElement("div");
      divCardOverlay.classList.add("card__overlay");

      const divCardHeader = document.createElement("div");
      divCardHeader.classList.add("card__header");

      const pCardDescription = document.createElement("p");
      pCardDescription.classList.add("card__description");

      const svgCardArc = document.createElement("svg");
      svgCardArc.classList.add("card__arc");

      const divCardHeaderText = document.createElement("div");
      divCardHeaderText.classList.add("card__header-text");

      const h3CardTitle = document.createElement("h3");
      h3CardTitle.classList.add("card__title");

      const spanCardStatus = document.createElement("span");
      spanCardStatus.classList.add("card__status");

      const productStars = document.createElement("img");
      productStars.classList.add("card__stars");

      const productReviews = document.createElement("img");
      productReviews.classList.add("card__reviews");

      const productReviewsText = document.createElement("p");
      productReviewsText.classList.add("card__reviews__text");

      const divProductDescription = document.createElement("div");
      divProductDescription.classList.add("div__description");

      const divtDescriptionShow = document.createElement("div");
      divtDescriptionShow.classList.add("div__show");

      aCard.href = "#";
      imgCard.src = product.image;
      h3CardTitle.textContent = product.name;
      spanCardStatus.textContent = `PVP: ${product.price}€`;
      svgCardArc.src = "https://www.w3.org/2000/svg";
      pCardDescription.textContent = product.seller;
      productStars.src = "./Assets/clasificacion.png";
      productReviews.src = "./Assets/comentarios.png";
      productReviewsText.textContent = product.reviews;

      // name: 'HP Essentials 255 G8 AMD',
      // price: 289,
      // starts: 4,
      // reviews: 250,
      // seller: 'PcComponentes',
      // image: 'https://img.pccomponentes.com/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg',



      ulCards.append(liCard);
      liCard.append(aCard);
      aCard.append(imgCard);
      aCard.append(divCardOverlay);
      divCardOverlay.append(divCardHeader);
      divCardOverlay.append(divProductDescription);
      divProductDescription.append(pCardDescription);
      divtDescriptionShow.append(productStars);
      divtDescriptionShow.append(productReviews);
      divtDescriptionShow.append(productReviewsText);
      divProductDescription.append(divtDescriptionShow);
      divCardHeader.append(svgCardArc);
      divCardHeader.append(divCardHeaderText);
      divCardHeaderText.append(h3CardTitle);
      divCardHeaderText.append(spanCardStatus);

      productSection.append(ulCards);

    };
};

printProductList();



// Creamos los filtros

const filterOptions = () => {
  
  for(let i = 0; i < products.length; i++){
    const options = document.querySelector("select");
    const option = document.createElement("option");
    options.append(option);

    // const optionsContent = [...new Set(products[i].seller)];

    let optionsContent = products.seller.filter((element, index) => {
      return products.indexOf(element) === index;
    });
    // option.textContent = products[i].seller;
    option.textContent = optionsContent;

      // const filterContent = () => {
      //   filterContent.textContent = products[i].seller

      //   filterContent.filter((value, index) => option.indexOf(value) === index);
      // }  

      // filterContent()

  };
  // Falta leer los nombres de los vendedores
  // Si el nombre del vendedor === nombre de la opción pintalo, else no lo pintes.
};

filterOptions()
