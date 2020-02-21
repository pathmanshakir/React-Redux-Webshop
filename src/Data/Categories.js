import { of } from "rxjs";
var categoryArray = [
  { label: "All Products", value: "All" },
  { label: "Chairs", value: "Chair" },
  { label: "Beds", value: "Bed" },
  { label: "Closets", value: "Closet" }
];

export var productsCategory = of(categoryArray);
