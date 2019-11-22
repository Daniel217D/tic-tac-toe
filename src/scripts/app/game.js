import {getRandomInt} from "./helpers";
import {classes} from './dictionary';
import {set_status} from './status';

let field = Array(9);
const field_el = document.body.querySelector(".js-field");
const squares = field_el.querySelectorAll(".js-square");
const reset_btn = document.querySelector(".js-reset");
let game_is_active = true;
let sign = "x";
let moves = 0;

squares.forEach((el) => {
    const number = el.getAttribute("data-number");

    el.addEventListener("click", function () {
        if (game_is_active && field[number] === undefined) {
            move(number);

            if(game_is_active) {
                computer_turn();
            }
        }
    })
});

reset_btn.addEventListener("click", reset);

function move(number) {
    moves++;
    add_sign(number);
    check_win();
    sign = sign === "x" ? "y" : "x";
}

function add_sign(number) {
    squares[number].classList.add(classes[sign]);
    setTimeout(() => squares[number].classList.add(classes["square_animation"]));
    field[number] = sign;
}

function computer_turn() {
    let square = getRandomInt(0,8);

    if(field[square] !== undefined) {
        const isLeft = getRandomInt(0,1) === 0;
        do {
            if(isLeft)
                square--;
            else
                square++;

            if(square === 9) {
                square = 0
            } else if(square === -1) {
                square = 8;
            }
        } while (field[square] !== undefined);
    }

    move(square);
}

function reset() {
    sign = "x";
    set_status("default");
    moves = 0;
    field = Array(9);
    squares.forEach((el) => {
        el.classList.remove(classes["square_animation"])
        setTimeout(() => el.classList.remove(classes["x"], classes["y"]), 250 )
    });
    setStaus(true);
}


function check_win() {
    if (field[0] === sign && field[1] === sign && field[2] === sign ||
        field[3] === sign && field[4] === sign && field[5] === sign ||
        field[6] === sign && field[7] === sign && field[8] === sign ||
        field[0] === sign && field[3] === sign && field[6] === sign ||
        field[1] === sign && field[4] === sign && field[7] === sign ||
        field[2] === sign && field[5] === sign && field[8] === sign ||
        field[0] === sign && field[4] === sign && field[8] === sign ||
        field[2] === sign && field[4] === sign && field[6] === sign) {
        set_status(sign.toUpperCase() + " win");
        setStaus(false);
    } else if(moves === 9) {
        set_status("tie");
        setStaus(false);
    }
}

function setStaus(status) {
  game_is_active = status;

  if(status) {
    field_el.classList.add(classes["field_disabled"]);
  } else {
    field_el.classList.add(classes["field_disabled"]);
  }
}
