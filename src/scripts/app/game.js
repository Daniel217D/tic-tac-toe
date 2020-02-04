import {getRandomInt} from "./helpers";

let field = Array(9);
const field_el = document.body.querySelector(".js-field");
const squares = field_el.querySelectorAll(".js-square");
const reset_btn = document.querySelector(".js-reset");
const status_container = document.querySelector(".js-status");
