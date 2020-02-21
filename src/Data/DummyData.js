import { of } from "rxjs";

var productsArray = [
  {
    id: 4,
    title: "BUSKBO",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/buskbo-armchair__0700959_PE723853_S5.JPG?f=xs",
    price: 160
  },
  {
    id: 19,
    title: "Milk Walk",
    category: "Closet",
    url:
      "https://www.ikea.com/be/nl/images/products/pax-wardrobe__0331313_PE522193_S5.JPG?f=s",
    price: 330
  },
  {
    id: 5,
    title: "RENBERGET",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/renberget-swivel-chair__0724701_PE734583_S5.JPG?f=xs",
    price: 49
  },
  {
    id: 11,
    title: "WHite chiq",
    category: "Bed",
    url:
      "https://www.ikea.com/be/nl/images/products/trysil-bed-frame-white-light-grey__0637610_PE698422_S5.JPG?f=s",
    price: 564
  },
  {
    id: 6,
    title: "LAIFARNE",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/leifarne-chair-dark-yellow-broringe-chrome-plated__0745127_PE743588_S5.JPG?f=xs",
    price: 35
  },

  {
    id: 1,
    title: "Yellow Pail",
    category: "Chair",
    url:
      "https://www.ikea.com/gb/en/images/products/poaeng-armchair__0570545_PE666361_S5.JPG?f=s",
    price: 102
  },
  {
    id: 3,
    title: "ODGER",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/odger-swivel-chair-white-beige__0734069_PE739278_S5.JPG?f=xs",
    price: 99
  },
  {
    id: 12,
    title: "Lore Koh",
    category: "Bed",
    url:
      "https://www.ikea.com/nl/nl/images/products/nordli-bed-frame-w-storage-and-headboard__0595992_PE685261_S5.JPG?f=s",
    price: 564
  },
  {
    id: 2,
    title: "SAKARIAS",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/sakarias-chair-with-armrests__0729767_PE737131_S5.JPG?f=xs",
    price: 115
  },

  {
    id: 20,
    title: "White Lor",
    category: "Closet",
    url:
      "https://www.ikea.com/nl/nl/images/products/brimnes-wardrobe-with-3-doors__0428307_PE583468_S5.JPG?f=xs",
    price: 200
  },

  {
    id: 8,
    title: "STRANDMON",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0325432_PE517964_S5.JPG?f=xs",
    price: 250
  },
  {
    id: 7,
    title: "POANG",
    category: "Chair",
    url:
      "https://www.ikea.com/us/en/images/products/poaeng-armchair__55437_PE160523_S5.JPG?f=xs",
    price: 200
  },
  {
    id: 13,
    title: "Single ned",
    category: "Bed",
    url:
      "https://i.pinimg.com/originals/0e/d6/0a/0ed60a29e582994a22413e50c3f39b7f.jpg",
    price: 196
  },
  {
    id: 14,
    title: "Brown bed",
    category: "Bed",
    url:
      "https://static.nieuwsblad.be/Assets/Images_Upload/2017/06/29/c5c33ce8-5cc5-11e7-bedd-c95e0c18cb45_web_scale_0.175_0.175__.jpg?maxheight=460&maxwidth=638",
    price: 200
  },
  {
    id: 15,
    title: "Gray bed",
    category: "Bed",
    url:
      "https://ikea.azureedge.net/images/680x680/variantimages/30446373/0.JPG",
    price: 250
  },

  {
    id: 17,
    title: "Wolo bed",
    category: "Bed",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyKJPPwo8jAcvw2pw8Q68Q_ZS1YviifE-9uLjTbzf03P-dY7sc",
    price: 100
  },
  {
    id: 18,
    title: "White Lor",
    category: "Closet",
    url:
      "https://cdn.webshopapp.com/shops/132458/files/267405800/900x900x2/image.jpg",
    price: 300
  },
  {
    id: 10,
    title: "BedoBaz",
    category: "Bed",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVhQLvihfBH9fYd0bWhHacReSkd3eWESlxCTfLR10XSG1mIDJd",
    price: 250
  },

  {
    id: 21,
    title: "Chinoko",
    category: "Closet",
    url:
      "https://www.ikea.com/my/en/images/products/pax-wardrobe-white-sekken-frosted-glass__0649220_PE705322_S5.JPG?f=s",
    price: 123
  },
  {
    id: 16,
    title: "Silk bed",
    category: "Bed",
    url:
      "  https://www.ikea.com/nl/nl/images/products/slaekt-bed-frame-with-slatted-bed-base__0637774_PE698536_S5.JPG?f=xs",
    price: 150
  }
];
export var products = of(productsArray);

export default {
  products
};

// setTimeout(function() {
//   productsArray.push({
//     id: 1,
//     title: "Yellow Pail",
//     category: "Chair",
//     url:
//       "https://www.ikea.com/gb/en/images/products/poaeng-armchair__0570545_PE666361_S5.JPG?f=s",
//     price: 102
//   });
// }, 3000);
