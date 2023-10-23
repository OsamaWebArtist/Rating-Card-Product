// Add active class to spans
let NumSpan = document.querySelectorAll(".rating span");
let popRat_1 = document.querySelector(".container-1");
let popRat_2 = document.querySelector(".container-2");
let submitButt = document.querySelector(".submit");
let ratSpan = document.querySelector(".client-rate span");

NumSpan.forEach((ele) => {
    
    ele.addEventListener("click", function (e) {

        NumSpan.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
})

    })
    //Submit Rating





    submitButt.onclick = function () {
        for (let i = 0; i < NumSpan.length;i++){
            if (NumSpan[i].classList.contains("active")) {
                let activespan = document.querySelector(".active");
                ratSpan.textContent = activespan.textContent;
                popRat_1.style.display = "none";
                popRat_2.style.display = "flex";
            }
        } 
            
    }
    

