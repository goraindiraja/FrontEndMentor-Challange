const preview = document.querySelector(".preview");
const thankYou = document.querySelector(".thank-you");

const submit = document.querySelector(".submit")
const rate = document.querySelector(".rate");
const btn = document.querySelectorAll(".btn");

submit.addEventListener("click", function(){
    preview.classList.toggle("hide");
    thankYou.classList.toggle("hide");
});

// btn.forEach((rating) => {
//     rating.addEventListener("click", () => {
//         rate.textContent = rating.textContent;
//     })
// })

btn.forEach((rating) => {
        rating.addEventListener("click", () => {
            rate.innerHTML = rating.innerHTML;
        })
    })