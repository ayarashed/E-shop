/******img box product detail image zoom and image slide render*************/
$(document).ready(function () {
  $('.imgBox').imgZoom({
    boxWidth: 360,
    boxHeight: 360,
    marginLeft: 5,
  });
  $('.thumb a').click(function (e) {
    e.preventDefault();
    $('.imgBox img').attr("src", $(this).attr("href"));
    $('.imgBox img').attr("data-origin", $(this).attr("href"));
    $('.imgBox').imgZoom({
      boxWidth: 360,
      boxHeight: 360,
      marginLeft: 5,
    });
  });
  $('.thumb-nav a').click(function (e) {
    e.preventDefault();
    $('.imgBox img').attr("src", $(this).attr("href"));
    $('.thumb-nav li').children().removeClass('active');
    $(this).addClass('active');
  });
});
/***********************button for quantity minus and plus*************************************/
function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
    var c = jQuery(b);
    c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
  var a = this,
    b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
  var a = jQuery(this).closest(".quantity").find(".qty"),
    b = parseFloat(a.val()),
    c = parseFloat(a.attr("max")),
    d = parseFloat(a.attr("min")),
    e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});
/***********************************toggle between views and description button******************************/
$('.btn-reviews').click(function () {
  $('.views').show();
  $('.description').hide();
  $(this).addClass('active');
  $(this).removeClass('gray');
  $('.btn-description').removeClass('active');
  $('.btn-description').addClass('gray');
});
$('.btn-description').click(function () {
  $('.views').hide();
  $('.description').show();
  $(this).addClass('active');
  $(this).removeClass('gray');
  $('.btn-reviews').removeClass('active');
  $('.btn-reviews').addClass('gray');
});

/*****************match media**********************/
window.addEventListener('resize', function (event) {
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  if (mediaQuery.matches) {
    $('body').css({
      "overflow-y": "auto"
    });
  } else {
    $('body').css({
      "overflow-y": "auto"
    });
  }
}, true);
/***************selection of method of delievary*********/
var options = document.getElementsByClassName('option');
var optionPayment = document.getElementsByClassName('payment-card');
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    var selectedEl = document.querySelector(".selected");
    if (selectedEl) {
      selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");
  }, false);
}
for (var i = 0; i < optionPayment.length; i++) {
  optionPayment[i].addEventListener("click", function () {
    var selectedEl = document.querySelector(".selected");
    if (selectedEl) {
      selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");
  }, false);
}
/***************fixed navbar on scroll************/

window.onscroll = function () {
  scrollFunction()
};

var header = $(".wrapper");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".wrapper").removeClass("nav-relative").addClass("sticky");
  } else {
    $(".wrapper").removeClass("sticky").addClass("nav-relative");
  }
}
/******************toggle button*******/
$('.bar-menue').click(function () {
  $('.wrapper-overlay').toggle();
  $('.links').removeClass('toggle-nav').addClass('appear-toggle-nav');
  $(".wrapper").removeClass("sticky");
  $('body').css({
    "overflow-y": "hidden"
  });
});
/**********close toggle drop down*****/
$('.close-nav').click(function () {
  $('.wrapper-overlay').hide();
  $('.links').addClass('toggle-nav').removeClass('appear-toggle-nav');
  $(".wrapper").addClass("sticky");
  $('body').css({
    "overflow-y": "auto"
  });
});
/***validation address input******/

$('.btn-submit').on('click', function (e) {
  e.preventDefault();
  $("#addressingform").valid();
  if ($("#addressingform").valid() == false) {
    $("#addressingform").valid();
  } else {
    addAddressingDataInLocalStorage();
    var url = "summary.html";
    $(location).attr('href', url);
  }

});
$.validator.addMethod("nowhitespace", function (value, element) {
  return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please");
$('#addressingform').validate({
  rules: {
    firstName: {
      required: true,
      minlength: 2,
      lettersonly: true
    },
    country: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      nowhitespace: true,
      number: true,
      minlength: 11,
      maxlength: 11
    },
    lastName: {
      required: true,
      minlength: 2,
      lettersonly: true
    },
    address: {
      required: true
    },
    city: {
      required: true
    },
    postalCode: {
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

/*********owl carsoul forselected just for you******/
$('.select').owlCarousel({
  center: true,
  items: 2,
  loop: true,
  dots: false,
  margin: 10,
  nav: true,
  navText: [`<svg class="icon-svg-slide"><use xlink:href="images/iconmoon/symbol-defs.svg#icon-noun_Arrow-Left_2682937"></use></svg> `, `<svg class="icon-svg-slide" style="transform: rotateY(-180deg);"><use xlink:href="images/iconmoon/symbol-defs.svg#icon-noun_Arrow-Left_2682937"></use></svg>`],
  responsive: {
    1025: {
      items: 4
    },
    992: {
      items: 3
    },
    769: {
      items: 3

    },
    541: {
      items: 2
    },
    320: {
      items: 1.3,
      center: true,
      margin: 10

    },
  }
});
/************toggle show of selected product type******/

toggleShowTypeFilter();

function toggleShowTypeFilter() {
  const checkboxWrappers = document.querySelectorAll(".custom-checkbox-wrapper");
  checkboxWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", (e) => {
      e.target.children[0].classList.toggle('show');
    });
  });
}
/******************************display products from json file pagination*****/
const buttons = document.querySelectorAll(".pages ul li a");
var numberOfPage = 0;
var currentPage;
var nextpage;
var end;
var begin;
let allProducts = [];
let category = [];
let uniqueCategory = [];
$.ajax({
  url: '../data/products.json',
  cache: false,
  success: function (data, status) {
    data.map(dat => {
      allProducts.push(dat);
      category.push(dat.category);
    });
    startData(allProducts);
    paggination(allProducts);
    let uniqueCategoryFun = (category) => category.filter((v, i) => category.indexOf(v) === i)
    uniqueCategoryFun(category);
    uniqueCategory = uniqueCategoryFun(category);
    loadProductTypeFilters(uniqueCategory);
    rangePriceInput(allProducts);
  },
  error: function (xhr, textStatus, err) {
    console.log(xhr);
    console.log(textStatus);
    console.log(err);
  }
});

function loadProductTypeFilters(uniqueCategory) {
  let filters = uniqueCategory;
  console.log(filters);
  let output = '';
  for (let x = 0; x < filters.length; x++) {
    output +=
      `<li class="type">
          <div class="custom-checkbox-wrapper">
            <span><i class="fas fa-check"></i></span>
          </div>
          <span class="type-name" id="${filters[x]}" data-filter="false">${filters[x]}</span>
          <span class="type-count">
            (411)
          </span>
        </li>
      `;
  }
  $('.filter-content .types').append(output);
  toggleShowTypeFilter();
  filterByType();
}

/****************************************************************************** */
function startData(allProducts) {
  let allProduct = allProducts;
  $("#Previous").addClass("isDisabled");
  $("#next").addClass("isDisabled");
  var output = '';
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      $("body").css("visibility", "hidden");
      $("#loader").css("visibility", "visible");
    } else {
      $("#loader").css("display", "none");
      $("body").css("visibility", "visible");
    }
  };
  let numberOfElement = 0;
  for (var i = 0; i < allProduct.length; i++) {
    output +=
      `<div class="col-md-4 col-sm-6 col-12" id ="${allProduct[i].ProductID}">
                <div class="product">
                  <div class="favorite-icon">
                    <i class="far fa-heart"></i>
                  </div>
                  <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="product-img">
                    <img src="${allProduct[i].ImageSrc}" alt="">
                  </div>
                  <div class="product-details">
                    <h6 class="product-name">${allProduct[i].ProductName}</h6>
                    <div class="price">
                      <span class="discounted-price">${allProduct[i].ProductID}</span>
                      <span class="original-price"></span>
                      <span class="price">$ ${allProduct[i].ProductPrice}</span>
                    </div>
                  </div>
                </div>
            </div>`;

    numberOfElement++;
    if (numberOfElement == Math.ceil((allProduct.length / (buttons.length - 2)))) {
      console.log(i);
      break;
    }
  }
  $('.show-products .row').html(output);

}

function paggination(allProducts) {
  let allProduct = allProducts;
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      $("body").css("visibility", "hidden");
      $("#loader").css("visibility", "visible");
    } else {
      $("#loader").css("display", "none");
      $("body").css("visibility", "visible");
    }
  };
  for (let x = 0; x < buttons.length; x++) {
    const btn = buttons[x];
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      $(this).addClass("active");
      currentPage = this.id;
      console.log(currentPage);
      if (this.id == "next") {
        console.log(end + 2);
        var output = '';
        var postsPerPages = (allProduct.length / (buttons.length - 2));
        console.log(postsPerPages)
        numberOfPage = (buttons.length - 2);
        console.log(numberOfPage);
        begin = end + 1;
        console.log(begin);
        for (var i = begin; i < allProduct.length; i++) {
          output +=
            `<div class="col-md-4 col-sm-6 col-12" id ="${allProduct[i].ProductID}">
                <div class="product">
                  <div class="favorite-icon">
                    <i class="far fa-heart"></i>
                  </div>
                  <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="product-img">
                    <img src="${allProduct[i].ImageSrc}" alt="">
                  </div>
                  <div class="product-details">
                    <h6 class="product-name">${allProduct[i].ProductName}</h6>
                    <div class="price">
                      <span class="discounted-price">${allProduct[i].ProductID}</span>
                      <span class="original-price"></span>
                      <span class="price">$ ${allProduct[i].ProductPrice}</span>
                    </div>
                  </div>
                </div>
            </div>`;
          end = ((begin + postsPerPages) - 1);
          console.log(end);
          if (i == end) {
            break;
          }
          if (i == 98) {
            $("#next").addClass("isDisabled");
            $("#Previous").removeClass("isDisabled");
          }

        }
        $('.show-products .row').html(output);
      } else if (currentPage == "Previous") {
        var output = '';
        var postsPerPages = (allProduct.length / (buttons.length - 2));
        console.log("postsberpage", postsPerPages)
        numberOfPage = (buttons.length - 2);
        console.log(numberOfPage);

        console.log("beginbefore", begin);
        begin = begin - postsPerPages;
        console.log("beginafter", begin);
        for (var i = begin; i < allProduct.length; i++) {
          output +=
            `<div class="col-md-4 col-sm-6 col-12" id ="${allProduct[i].ProductID}">
              <div class="product">
                <div class="favorite-icon">
                  <i class="far fa-heart"></i>
                </div>
                <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                <div class="product-img">
                  <img src="${allProduct[i].ImageSrc}" alt="">
                </div>
                <div class="product-details">
                  <h6 class="product-name">${allProduct[i].ProductName}</h6>
                  <div class="price">
                    <span class="discounted-price">${allProduct[i].ProductID}</span>
                    <span class="original-price"></span>
                    <span class="price">$ ${allProduct[i].ProductPrice}</span>
                  </div>
                </div>
              </div>
          </div>`;
          end = ((begin + postsPerPages) - 1);
          console.log(end);
          if (i == end) {
            break;
          }
          if (i == 0) {
            $("#Previous").addClass("isDisabled");
            $("#next").removeClass("isDisabled");
          }
        }
        $('.show-products .row').html(output);
      } /*******next button*****/
      else {
        var output = '';
        var postsPerPages = (allProduct.length / (buttons.length - 2));
        console.log(postsPerPages)
        numberOfPage = (buttons.length - 2);
        console.log(numberOfPage);
        begin = ((currentPage - 1) * postsPerPages);
        console.log("begin", begin);
        for (var i = begin; i < allProduct.length; i++) {
          output +=
            `<div class="col-md-4 col-sm-6 col-12" id ="${allProduct[i].ProductID}">
                    <div class="product">
                      <div class="favorite-icon">
                        <i class="far fa-heart"></i>
                      </div>
                      <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                      <div class="product-img">
                        <img src="${allProduct[i].ImageSrc}" alt="">
                      </div>
                      <div class="product-details">
                        <h6 class="product-name">${allProduct[i].ProductName}</h6>
                        <div class="price">
                          <span class="discounted-price">${allProduct[i].ProductID}</span>
                          <span class="original-price"></span>
                          <span class="price">$ ${allProduct[i].ProductPrice}</span>
                        </div>
                      </div>
                    </div>
                </div>`;
          end = ((begin + postsPerPages) - 1);
          console.log(end);
          if (i == end) {
            break;
          }
          if (i == 0) {
            $("#Previous").addClass("isDisabled");
            $("#next").removeClass("isDisabled");

          } else if (i == 38) {
            $("#next").addClass("isDisabled");
            $("#Previous").removeClass("isDisabled");
          } else {
            $("#next").removeClass("isDisabled");
            $("#Previous").removeClass("isDisabled");
          }
        }
        $('.show-products .row').html(output);
      }
    });
  }
}
//call function pf pagination
/*******************filter items**************/
filterByType();

function filterByType() {
  $('.custom-checkbox-wrapper').click(function () {
    const text = $(this).next().attr('id');
    if (text == 'all') {
      startData(allProducts);
    } else {
      $.ajax({
        url: '../data/products.json',
        cache: false,
        success: function (data, status) {
          var output = '';
          data.filter((val) => {
            if (text == "") {
              startData();
              return val;
            } else if (val.category.toLowerCase().includes(text.toLowerCase())) {
              return val;
            }
          }).map(filterProduct => {
            output +=
              `<div class="col-md-4 col-sm-6 col-12" id ="${filterProduct.ProductID}">
                    <div class="product">
                      <div class="favorite-icon">
                        <i class="far fa-heart"></i>
                      </div>
                      <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                      <div class="product-img">
                        <img src="${filterProduct.ImageSrc}" alt="">
                      </div>
                      <div class="product-details">
                        <h6 class="product-name">${filterProduct.ProductName}</h6>
                        <div class="price">
                          <span class="discounted-price">${filterProduct.ProductID}</span>
                          <span class="original-price"></span>
                          <span class="price">$ ${filterProduct.ProductPrice}</span>
                        </div>
                      </div>
                    </div>
                </div>`;
          });
          $('.show-products .row').html(output);
        },
        error: function (xhr, textStatus, err) {
          console.log(xhr);
          console.log(textStatus);
          console.log(err);
        }
      });
    }
  });
}
/*************************************filter by size*****************/
filterBySize();

function filterBySize() {
  $('.size').click(function () {
    const text = $(this).attr('id');
    var output = '';
    console.log(text);
    $.ajax({
      url: '../data/products.json',
      cache: false,
      success: function (data, status) {
        var output = '';
        data.filter((val) => {
          console.log(val.Size);
          if (text == "") {
            startData();
            return val;
          } else if (val.Size.toLowerCase().includes(text.toLowerCase())) {
            return val;
          }
        }).map(filterProduct => {
          output +=
            `<div class="col-md-4 col-sm-6 col-12" id ="${filterProduct.ProductID}">
                    <div class="product">
                      <div class="favorite-icon">
                        <i class="far fa-heart"></i>
                      </div>
                      <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                      <div class="product-img">
                        <img src="${filterProduct.ImageSrc}" alt="">
                      </div>
                      <div class="product-details">
                        <h6 class="product-name">${filterProduct.ProductName}</h6>
                        <div class="price">
                          <span class="discounted-price">${filterProduct.ProductID}</span>
                          <span class="original-price"></span>
                          <span class="price">$ ${filterProduct.ProductPrice}</span>
                        </div>
                      </div>
                    </div>
                </div>`;
        });
        $('.show-products .row').html(output);
      },
      error: function (xhr, textStatus, err) {
        console.log(xhr);
        console.log(textStatus);
        console.log(err);
      }
    });
  });
}
/**************************range Price Input******************************/
//rangePriceInput(allProducts);
//range input scripts
function rangePriceInput(allProducts) {
  let allProduct = allProducts;
  const rangeInput = document.querySelector('.range-input')
  const maxRange = document.querySelector('.max-range');
  const minRange = document.querySelector('.min-range');
  let value;
  $('.range-input').change(function () {
    value = rangeInput.value;
    maxRange.innerHTML = `${value}`;
    var output = '';
    let min = parseFloat(minRange.innerHTML);
    let max = parseFloat(maxRange.innerHTML);
    console.log("min", min);
    console.log("max", max);
    for (var i = 0; i < allProduct.length; i++) {
      if (allProduct[i].ProductPrice > min && allProduct[i].ProductPrice < max) {
        output +=
          `<div class="col-md-4 col-sm-6 col-12" id ="${allProduct[i].ProductID}">
                <div class="product">
                  <div class="favorite-icon">
                    <i class="far fa-heart"></i>
                  </div>
                  <div class="cart-layer">
                    <div class="cart-ico">
                      <button class="cart-btn addtocart">
                        <svg class="icon icon-noun_cart_2102832-4 cart-moon">
                          <use xlink:href="#icon-noun_cart_2102832-4"></use>
                          <symbol id="icon-noun_cart_2102832-4" viewBox="0 0 32 32">
                            <path
                              d="M1.332 2.667h2.228l3.338 15.061c-1.62 0.79-2.716 2.424-2.716 4.314 0 0.039 0 0.078 0.001 0.117l-0-0.006c-0.003 0.063-0.005 0.138-0.005 0.212 0 2.431 1.903 4.417 4.301 4.55l0.012 0.001h17.68c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0h-17.685c-0.939-0.146-1.649-0.949-1.649-1.918 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008c-0.005-0.054-0.008-0.116-0.008-0.179 0-0.969 0.71-1.771 1.638-1.916l0.011-0.001h17.68c0.575-0 1.064-0.364 1.252-0.873l0.003-0.009 4.503-12.495c0.049-0.134 0.078-0.289 0.078-0.45 0-0.736-0.597-1.334-1.333-1.334h-23.88l-0.853-3.85c-0.136-0.602-0.667-1.045-1.301-1.045-0.001 0-0.002 0-0.002 0h-3.297c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0zM28.769 7.564l-3.541 9.829h-15.674l-2.184-9.829h21.399z">
                            </path>
                            <path
                              d="M9.563 29.333c-0.015-0.001-0.033-0.001-0.051-0.001-0.737 0-1.334 0.597-1.334 1.334s0.597 1.334 1.334 1.334c0.018 0 0.036-0 0.053-0.001l-0.003 0h1.693c0.015 0.001 0.033 0.001 0.051 0.001 0.737 0 1.334-0.597 1.334-1.334s-0.597-1.334-1.334-1.334c-0.018 0-0.036 0-0.053 0.001l0.003-0z">
                            </path>
                            <path
                              d="M21.865 29.333c-0.715 0.028-1.283 0.614-1.283 1.333s0.569 1.305 1.281 1.333l0.003 0h1.693c0.715-0.028 1.283-0.614 1.283-1.333s-0.569-1.305-1.281-1.333l-0.003-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                      <button class="cart-btn">
                        <svg class="icon icon-noun_View_2149087 cart-moon">
                          <use xlink:href="#icon-noun_View_2149087"></use>
                          <symbol id="icon-noun_View_2149087" viewBox="0 0 52 32">
                            <path
                              d="M47.966 10.071c-5.211-6.175-12.955-10.071-21.608-10.071-0.005 0-0.010 0-0.014 0h-0.024c-8.835 0.009-16.738 3.989-22.023 10.25l-0.035 0.043-3.788 4.494c-0.291 0.346-0.468 0.797-0.468 1.288s0.177 0.942 0.47 1.291l-0.003-0.003 3.599 4.376c5.199 6.284 12.999 10.257 21.727 10.257 0.013 0 0.026 0 0.039-0h0.034c8.924-0.009 16.897-4.067 22.185-10.435l0.038-0.047 3.648-4.395c0.291-0.348 0.467-0.8 0.467-1.294s-0.177-0.946-0.47-1.297l0.003 0.003zM45.002 18.954c-4.587 5.527-11.455 9.024-19.139 9.035h-0.027c-0.007 0-0.014 0-0.022 0-7.503 0-14.209-3.413-18.65-8.772l-0.032-0.040-2.541-3.071 2.717-3.236c4.586-5.434 11.397-8.867 19.010-8.881h0.027c0.002 0 0.005 0 0.007 0 7.435 0 14.089 3.345 18.539 8.612l0.030 0.036 2.67 3.189z">
                            </path>
                            <path
                              d="M26.083 7.307c-4.802 0-8.694 3.893-8.694 8.694s3.893 8.694 8.694 8.694c4.802 0 8.694-3.893 8.694-8.694v0c-0.005-4.8-3.894-8.69-8.694-8.694h-0zM26.083 20.696c-2.593 0-4.695-2.102-4.695-4.695s2.102-4.695 4.695-4.695c2.593 0 4.695 2.102 4.695 4.695v0c-0.003 2.592-2.103 4.692-4.694 4.695h-0z">
                            </path>
                          </symbol>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="product-img">
                    <img src="${allProduct[i].ImageSrc}" alt="">
                  </div>
                  <div class="product-details">
                    <h6 class="product-name">${allProduct[i].ProductName}</h6>
                    <div class="price">
                      <span class="discounted-price">${allProduct[i].ProductID}</span>
                      <span class="original-price"></span>
                      <span class="price">$ ${allProduct[i].ProductPrice}</span>
                    </div>
                  </div>
                </div>
            </div>`;
      } else {
        startData(allProducts);
      }

    }
    $('.show-products .row').html(output);
  });
}
/*************************************************/
/***********************newsletter validation*******/
let form = document.querySelector(".newsletter-form");
const newsLetterInput = document.querySelector("#mce-email");
const newsLetterbtn = document.querySelector("#mce-embedded-subscribe");
$('#mce-embedded-subscribe').click(function (e) {
  e.preventDefault();
  if (newsLetterInput.value === '' || newsLetterInput.value === ' ') {
    Swal.fire({
      text: 'The Email Is Required'
    });
    return false;
  } else {
    ValidateEmail(newsLetterInput);
  }
});

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    newsLetterbtn.setAttribute("disabled", true);
    setTimeout(validateTime, 2000);
    return true;
  } else {
    Swal.fire({
      text: 'The Email Is Not Valid'
    });
    return false;
  }
}

function validateTime() {
  Swal.fire({
    text: 'Thanks For Subscribe Review Your Email Inbox'
  });
  newsLetterbtn.removeAttribute("disabled");
  newsLetterInput.value = ' ';
}
/***************Add To Wish List***********/
$(".show-products").on("click", "div.favorite-icon", function () {
  $(this).addClass('addedtowish');
  const favouriteId = $(this).parent().parent().attr('id');
  let wishLists;
  $.ajax({
    url: '../data/products.json',
    cache: false,
    success: function (data, status) {
      /*const favouriteItem = data.filter(function(product) {
          return  product.ProductID == favouriteId;
      });*/
      data.map(product => {
        if (product.ProductID == favouriteId) {
          if (localStorage.getItem('wishLists') === null) {
            wishLists = [];
          } else {
            wishLists = JSON.parse(localStorage.getItem('wishLists'));
          }
          wishLists.push(product);
          localStorage.setItem('wishLists', JSON.stringify(wishLists));
        }
      });
    },
    error: function (xhr, textStatus, err) {
      console.log(xhr);
      console.log(textStatus);
      console.log(err);
    }
  });

});
/***************************add to cart***************/
$(".show-products").on("click", "button.addtocart", function () {
  console.log("added");
  $(this).addClass('addedtowish');
  const addToCartId = $(this).parent().parent().parent().parent().attr('id');
  let cart;
  $.ajax({
    url: '../data/products.json',
    cache: false,
    success: function (data, status) {
      /*const favouriteItem = data.filter(function(product) {
          return  product.ProductID == favouriteId;
      });*/
      data.map(product => {
        if (product.ProductID == addToCartId) {
          if (localStorage.getItem('cart') === null) {
            cart = [];
          } else {
            cart = JSON.parse(localStorage.getItem('cart'));
          }
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      });
    },
    error: function (xhr, textStatus, err) {
      console.log(xhr);
      console.log(textStatus);
      console.log(err);
    }
  });

});
/*****************retrieve user selected data on summary page*********************/
function retrieveAddressingData() {
  let addressingData = JSON.parse(sessionStorage.getItem('addressingData'));
  let paymentMethodData = JSON.parse(sessionStorage.getItem('paymentMethodData'));
  let output = '';
  let outputMethodPayment = '';
  for (let i = 0; i < addressingData.length; i++) {
    output +=
      `<ul>
        <li>${addressingData[i].firstName}   ${addressingData[i].lastName}</li>
        <li>${addressingData[i].address} , ${addressingData[i].city} , ${addressingData[i].postalCode}</li>
        <li>${addressingData[i].country}</li>
        <li>${addressingData[i].phone}</li>
        <li>${addressingData[i].email}</li>
        <li><a class="btn change-address" href="./addressdata-typeofdelivery.html">Change adress</a></li>
      </ul>`;

  }
  for (let i = 0; i < paymentMethodData.length; i++) {
    outputMethodPayment +=
      `
        <div class="card selected option">
          <div class="card-img">
            <img src="${paymentMethodData[i].imgSrc}" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <span>${paymentMethodData[i].price}</span>
            <p class="card-text">${paymentMethodData[i].cashType}</p>
          </div>
          <a class="btn change-methoddelivery"href="./addressdata-typeofdelivery.html#typeofdeliverymethod">Change</a>
        </div>`;
  }
  $('.selected-address .dataRetrieved').html(output);
  $('.user-selected .retrievedmethod').html(outputMethodPayment);
}

function addAddressingDataInLocalStorage() {
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let address = $('#inputAddress').val();
  let city = $('#inputCity').val();
  let postalCode = $('#inputZip').val();
  let phone = $('#phone').val();
  let country = $('#country').val();
  let email = $('#inputEmail4').val();
  let addressData = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    postalCode: postalCode,
    phone: phone,
    country: country,
    email: email
  };
  console.log(addressData);
  if (sessionStorage.getItem('addressingData') === null) {
    addressingData = [];
  } else {
    addressingData = JSON.parse(sessionStorage.getItem('addressingData'));
  }
  addressingData.push(addressData);
  sessionStorage.setItem('addressingData', JSON.stringify(addressingData));
}
$('.option').click(function () {
  const imgSrc = $(this).children('.card-img').children('img').attr('src');
  const price = $(this).children('.card-body').children('span').text();
  const cashType = $(this).children('.card-body').children('p').text();
  console.log(imgSrc, price, cashType)
  let paymentMethod = {
    imgSrc: imgSrc,
    price: price,
    cashType: cashType
  };
  console.log(paymentMethod);
  if (sessionStorage.getItem('paymentMethodData') === null) {
    paymentMethodData = [];
  } else {
    paymentMethodData = JSON.parse(sessionStorage.getItem('paymentMethodData'));
  }
  paymentMethodData.push(paymentMethod);
  sessionStorage.setItem('paymentMethodData', JSON.stringify(paymentMethodData));
});
retrieveAddressingData();
/********************add To Cart************/
