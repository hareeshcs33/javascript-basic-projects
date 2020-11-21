//set initial count
let count = 0;

//select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const CLASSL_LISTS = e.currentTarget.classList;
        if (CLASSL_LISTS.contains('decrease')) {
            count--;
        }
        else if (CLASSL_LISTS.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
