// Owl slider
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    margin: 10,
})

// Show and hide menu
function OpenNav(){
  document.getElementById("Nav").style.width = "80%";
}
function CloseNav(){
  document.getElementById("Nav").style.width = "0%";
}

