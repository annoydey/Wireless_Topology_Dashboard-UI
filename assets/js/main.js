// ========================= For Designing (Section) ==================== 
// Hover Design
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle Design
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};




document.querySelector(".side-panel-toggle").addEventListener("click", () => {
  document.querySelector(".topologycon").classList.toggle("side-panel-open");
    const myStyles = `
      grid-template-columns: 2fr auto;
      grid-gap: 20px;
    `;
    const element = document.querySelector(".details");
    element.style.cssText = myStyles;
  
});







$(document).ready(function(){

$(".tabs").click(function(){
    
    current_fs = $(".active");

    next_fs = $(this).attr('id');
    next_fs = "#" + next_fs + "1";

    $("fieldset").removeClass("show");
    $(next_fs).addClass("show");

    current_fs.animate({}, {
        step: function() {
            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({
                'display': 'block'
            });
        }
    });
});

});
// ========================= For Designing (Section) ==================== 