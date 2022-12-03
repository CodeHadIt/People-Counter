const Time = document.querySelector("#time");
const startNumber = document.querySelector("h1");
const increase = document.querySelector(".increase-btn");
const decrease = document.querySelector(".decrease-btn");
const reset = document.querySelector(".reset-btn");

let date = new Date();
let options = {hour: "2-digit", minute: "2-digit", hour12: true};
const today = date.toLocaleString("en-US", options);

Time.innerHTML = today;

let numOfPersons = 0;

function increaseNum() {
    numOfPersons++;
    numOfPersons < 2 ? startNumber.innerHTML = `${numOfPersons} Person` : startNumber.innerHTML = `${numOfPersons} People`
};

increase.addEventListener("click", () => {
    increaseNum()
});

function decreaseNum() {
    numOfPersons --;
    if (numOfPersons === 1) {
        startNumber.innerHTML = `${numOfPersons} Person`
    }
    else if ( numOfPersons > 1) {
        startNumber.innerHTML = `${numOfPersons} People`
    }
    else {
        startNumber.innerHTML = `0`
    }
};

decrease.addEventListener("click", ()=> {
    decreaseNum()
});

reset.addEventListener("click", () => {
    location.reload()
});


