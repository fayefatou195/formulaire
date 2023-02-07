const preceBtn = document.querySelectorAll(".btn-prece");
const nextBtn = document.querySelectorAll(".btn-next");
const pages = document.querySelectorAll(".nbre-page")



let pagesNum = 0;

nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        pagesNum++;
        updatepages();
    });
    
})

preceBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        pagesNum--;
        updatepages();
    });
    
})

    function updatepages() {
        pages.forEach((pages) => {
            pages.classList.contains("nbre-page-active") &&
            pages.classList.remove("nbre-page-active");
        });

        pages[pagesNum].classList.add("nbre-page-active")
    }








var ouiRadio = document.getElementById("oui-radio");
var nonRadio = document.getElementById("non-radio");
var result = document.getElementById("result");

ouiRadio.addEventListener("click", function(){
  result.innerHTML = `<input type="email" class="email" id="exampleFormControlInput1" placeholder="">`;
});

nonRadio.addEventListener("click", function(){
  result.innerHTML = "";
});
