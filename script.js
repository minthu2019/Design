 let navbar = document.querySelector(".header .flex .navber");

 document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle("active")
 }

 window.onscroll = () => {
    navbar.classList.remove("active")
 }

 document.querySelectorAll('input[type="number"]').forEach ( inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) {
            inputNumber.value = inputNumber.value.slice (0, inputNumber.maxLength)
        }
    };
 });

// first commit

// min thu khaing is trying to be a programmer.
