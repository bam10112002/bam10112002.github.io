

$('.button-menu').on('click', function(event) {
	$('.logo-row-a1-ul').toggleClass('logo-row-a1-ul-active');
	$('.logo-row-a1-img').toggleClass('logo-row-a1-img__active');
	$('.button-Contact').toggleClass('button-Contact__active');
	$('.button-menu').toggleClass('button-menu__active');
});

$(document).ready(function(){
  $('.doing-slider').slick({
    infinite: true,
    slidesToShow: 4,
  	slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

$(document).ready(function(){
  $('.site-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 687,
      settings: {
        slidesToShow: 1,
         infinite: true,
        slidesToScroll: 1
      }
    }
  ]
  });
});

var tab;
var tabContent;

window.onload = function(){
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  hideTabsContent(1); 
}

function hideTabsContent(a){
  for(var i = a; i < tabContent.length; i++){
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('active');    
  } 
}

document.getElementById('tabs').onclick = function(event){
  var target = event.target;
  if(target.className == 'tab'){
    for(var i = 0; i < tab.length; i++){
      if(target == tab[i]){
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b){
  if(tabContent[b].classList.contains('hide')){
    hideTabsContent(0);
    tab[b].classList.add('active');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}

$(document).ready(function(){
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,

  });
});



$(document).ready(function(){
  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 687,
      settings: {
        slidesToShow: 1,
         infinite: true,
        slidesToScroll: 1
      }
    }
  ]
  });
});


