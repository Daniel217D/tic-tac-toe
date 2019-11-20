let field = Array(9);
const squares = document.querySelectorAll(".js-square");
const reset_btn = document.querySelector(".js-reset");
const status_container = document.querySelector(".js-status");
let game_is_active = true;
let sign = "x";
let turn = 0;

const classes = {
    x: "square_cross",
    y: "square_null",
    active: "square_active"
};

const statuses = {
    default: "Tic Tac Toe",
    win: "You win",
    lose: "You lose",
    tie: "Tie"
};

squares.forEach((el) => {
    const number = el.getAttribute("data-number");

    el.addEventListener("click", function () {
        if (game_is_active && field[number] === undefined) {
            turn++;
            this.classList.add(classes[sign]);
            setTimeout(() => this.classList.add(classes["active"]));
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
    set_status("default");
    turn = 0;
    field = Array(9);
    squares.forEach((el) => {
        el.classList.remove(classes["x"], classes["y"], classes["active"])
    });
    game_is_active = true;
}

function set_status(status) {
    status_container.innerText = statuses[status];
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
        if(sign === "x") {
            set_status("win")
        } else {
            set_status("lose")
        }
        game_is_active = false;
    } else if(turn === 9) {
        set_status("tie");
        game_is_active = false;
    }
}