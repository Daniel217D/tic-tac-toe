let field = Array(9);
const squares = document.querySelectorAll(".js-square");
const reset_btn = document.querySelector(".js-reset");
let sign = "x";

const classes = {
    x: "square_cross",
    y: "square_null",
    active: "square_active"
};

squares.forEach((el) => {
    const number = el.getAttribute("data-number");

        el.addEventListener("click", function () {
            if(field[number] === undefined) {
                this.classList.add(classes[sign], classes["active"]);
                field[number] = sign;
                change_sign();
            }
        })
});

reset_btn.addEventListener("click", reset);

function change_sign() {
    sign = sign === "x" ? "y" : "x";
}

function reset() {
    field = Array(9);
    squares.forEach((el) => {
        el.classList.remove(classes["x"], classes["y"], classes["active"])
    })
}