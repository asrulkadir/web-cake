import "./component/cake-list.js";
import cakes from "./data/data-cake.js";

const listCake = document.querySelector("cake-list");

listCake.cakes = cakes;