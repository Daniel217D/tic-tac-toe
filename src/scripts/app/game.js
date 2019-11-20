let field = Array(9);
const squares = document.querySelectorAll(".js-square");
const reset_btn = document.querySelector(".js-reset");
let game_is_active = true;
let sign = "x";

const classes = {
    x: "square_cross",
    y: "square_null",
    active: "square_active"
};

squares.forEach((el) => {
    const number = el.getAttribute("data-number");

    el.addEventListener("click", function () {
        if (game_is_active && field[number] === undefined) {
            this.classList.add(classes[sign], classes["active"]);
            field[number] = sign;
            check_win();
            change_sign();
        }
    })
});

reset_btn.addEventListener("click", reset);

function change_sign() {
    sign = sign === "x" ? "y" : "x";
}

function reset() {
    sign = "x";
    field = Array(9);
    squares.forEach((el) => {
        el.classList.remove(classes["x"], classes["y"], classes["active"])
    })
    game_is_active = true;
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
        console.log("win " + sign);
        game_is_active = false;
    }
}