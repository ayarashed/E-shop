
/******img box product detail image zoom and image slide render*************/
$(document).ready(function(){
    $('.imgBox').imgZoom({
        boxWidth: 360,
        boxHeight: 360,
        marginLeft: 5,
    });
    $('.thumb a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src" , $(this).attr("href"));
        $('.imgBox img').attr("data-origin" , $(this).attr("href"));
        $('.imgBox').imgZoom({
            boxWidth: 360,
            boxHeight: 360,
            marginLeft: 5,
        });
    });
    $('.thumb-nav a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src" , $(this).attr("href"));
        $('.thumb-nav li').children().removeClass('active');
        $(this).addClass('active');
    });
});
/***********************button for quantity minus and plus*************************************/
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});
/***********************************toggle between views and description button******************************/
$('.btn-reviews').click(function(){
    $('.views').show();
    $('.description').hide();
    $(this).addClass('active');
    $(this).removeClass('gray');
    $('.btn-description').removeClass('active');
    $('.btn-description').addClass('gray');
});
$('.btn-description').click(function(){
    $('.views').hide();
    $('.description').show();
    $(this).addClass('active');
    $(this).removeClass('gray');
    $('.btn-reviews').removeClass('active');
    $('.btn-reviews').addClass('gray');
});

/*****************match media**********************/
window.addEventListener('resize', function(event) {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    if (mediaQuery.matches) {
        $('body').css({
            "overflow-y" : "auto"
        });
    }
    else{
        $('body').css({
            "overflow-y" : "auto"
        });
    }
}, true);
/***************selection of method of delievary*********/
var options = document.getElementsByClassName('option');
var optionPayment = document.getElementsByClassName('payment-card');
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function(){
  var selectedEl = document.querySelector(".selected");
  if(selectedEl){
      selectedEl.classList.remove("selected");
  }
  this.classList.add("selected");
  }, false);
}
for (var i = 0; i < optionPayment.length; i++) {
  optionPayment[i].addEventListener("click", function(){
  var selectedEl = document.querySelector(".selected");
  if(selectedEl){
      selectedEl.classList.remove("selected");
  }
  this.classList.add("selected");
  }, false);
}
/***************fixed navbar on scroll************/

window.onscroll = function() {scrollFunction()};

var header = $(".wrapper");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".wrapper").removeClass("nav-relative").addClass("sticky");
  } 
  else {
    $(".wrapper").removeClass("sticky").addClass("nav-relative");
  }
}
/******************toggle button*******/
$('.bar-menue').click(function(){
    $('.wrapper-overlay').toggle();
    $('.links').removeClass('toggle-nav').addClass('appear-toggle-nav');
    $(".wrapper").removeClass("sticky");
    $('body').css({
        "overflow-y" : "hidden"
    });
});
/**********close toggle drop down*****/
$('.close-nav').click(function(){
    $('.wrapper-overlay').hide();
    $('.links').addClass('toggle-nav').removeClass('appear-toggle-nav');
    $(".wrapper").addClass("sticky");
    $('body').css({
        "overflow-y" : "auto"
    });
});
/*******************************/
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("show-size-table");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-table")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  $('body').css({
    "overflow-y" : "hidden"
});
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $('body').css({
    "overflow-y" : "auto"
});
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $('body').css({
        "overflow-y" : "auto"
    });
  }
}
/***validation address input******/
$.validator.addMethod("nowhitespace", function (value, element) {
    return this.optional(element) || /^\S+$/i.test(value);
  }, "No white space please");
  $('#form').validate({
    rules:{
        firstName: {
        required: true,
        minlength: 2,
        lettersonly: true
      },
      email:{
        required: true,
        email: true
      },
      phone:{
        required: true,
        nowhitespace:true,
        number: true ,
        minlength:11,
        maxlength:11
      },
      lastName:{
        required: true,
        minlength: 2,
        lettersonly: true
      },
      address:{
        required: true
      },
      city:{
        required: true
      },
      postalCode:{
        required: true,
        number: true 
      }
    },
    highlight: function highlight(element) {
      $(element).addClass("attention");
    },
    unhighlight: function unhighlight(element) {
      $(element).removeClass("attention");
    }
  });
  
  