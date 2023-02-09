var form = document.getElementById("form");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var nextPage1 = document.getElementById("next-page1");
var precePage2 = document.getElementById("prece-page2");
var submitForm = document.getElementById("submit-form");

nextPage1.addEventListener("click", function(e){

    e.preventDefault();
    page1.style.display="none";
    page2.style.display="block";
    });

    precePage2.addEventListener("click", function(e){
        
        e.preventDefault();
        page2.style.display= "none";
        page1.style.display= "block";
      
    });
    submitForm.addEventListener("click", function(){
        form.submit();
    })


var ouiRadio = document.getElementById("oui-radio");
var nonRadio = document.getElementById("non-radio");
var result = document.getElementById("result");

ouiRadio.addEventListener("click", function(){
  result.innerHTML = `<input type="email" class="email" id="exampleFormControlInput1" placeholder="">`;
});

nonRadio.addEventListener("click", function(){
  result.innerHTML = "";
});
