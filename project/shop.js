// var images = [
//     'img/product/product-home-1-img-2.jpg',  // Đường link đến ảnh 1
//     'img/product/product-home-1-img-3.jpg',
// ];
//     var currentImageIndex = 0;
//     setInterval(function() {
//         // updateBannerAndCircle();
//         currentImageIndex = (currentImageIndex + 1) % images.length;  // Chuyển sang ảnh tiếp theo
//         document.querySelector('#banner').style.backgroundImage = 'url("' + images[currentImageIndex] + '")';  // Cập nhật background cho banner
//         setInterval(document.querySelector(''),5000);
//     }, 2000);  // Thời gian chuyển giữa các ảnh là 5 giây


  // $(document).ready(function () {
  //     $('.ul').hide();
  //     $('.p').hide();
  //     $(".custom-menu li").hover(
  //       function () {
  //         $(this).children("ul").stop().slideDown();
  //       },
  //       function () {
  //         $(this).children("ul").stop().slideUp();
  //       }
  //     );
  //   });

    // $(document).ready(function(){
    //   $(".btn_s").click(function(){
    //     var productName = $('input[type="text"]').val();
    //     filterProduct(productName);
    //   });
    // });
    
    // function filterProduct(productName){
    //   // Lấy tất cả sản phẩm
    //   var allProducts = $(".product"); // giả sử mỗi sản phẩm có class 'product'
    
    //   for(var i = 0; i < allProducts.length; i++){
    //     var currentProductName = $(allProducts[i]).text(); // thay thế này bằng cách lấy tên sản phẩm thực sự từ sản phẩm
    
    //     // Nếu tên sản phẩm hiện tại không khớp với tên sản phẩm đang được tìm kiếm
    //     if(!currentProductName.toLowerCase().includes(productName.toLowerCase())){
    //       $(allProducts[i]).hide(); // ẩn sản phẩm
    //     }else{
    //       $(allProducts[i]).show(); // hiển thị sản phẩm
    //     }
    //   }
    // }
    // $(document).ready(function() {
    //   $(".btn").click(function(){
    //     var btnValue = $(this).text();
    //     switch(btnValue) {
    //       case "Pre":
    //         window.location.href = "shop.html"; // Link đến trang trước
    //         break;
    //       case "1":
    //         window.location.href = "shop.html"; // Link đến trang 
    //         break;
    //       case "2":
    //         window.location.href = "shop.html"; // Link đến trang 2
    //         break;
    //       case "Next":
    //         window.location.href = "shop.html"; // Link đến trang tiếp theo
    //         break;
    //     }
    //   });
    // });

// menu bar
$(document).ready(function() {
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".bar");

  menuButton.addEventListener("click",function(){
    menu.classList.toggle("menu_open");
    menuButton.classList.toggle("open");
  })
})
//     // Hiển thị thêm sản phẩm 
// $(document).ready(function() {
// $(".btn").click(function(){
//   var btnValue = $(this).text();
  
//   // Clear các sản phẩm cũ
//   $(".pro").empty();

//   switch(btnValue) {
//     case "Pre":
//       // Thêm các sản phẩm cho trang "Pre"
//       // Sử dụng $.get hoặc $.ajax để lấy dữ liệu từ server
//       break;
//     case "1":
//       // Thêm các sản phẩm cho trang "1"
      
//       break;
//     case "2":
//       // Thêm các sản phẩm cho trang "2"
      
//       break;
//     case "Next":
//       // Thêm các sản phẩm cho trang "Next"
      
//       break;
//   }
// });
// });

function setInterval(){
set = setInterval('.product',3000)
}
// Phân loại sản phẩm
function filterProducts(category) {
  $('.product').hide();
  $('.' + category).show();
}

$(document).ready(function() {
  $('.productCategory').click(function() {
      filterProducts($(this).attr('data-category'));
  });
});

// time 
$(document).ready(function() {
  // Add the current date and time for promotion
  var currentDate = new Date();
  // Append time to each .product
  $('.product').append('<div class="time"><p>' + currentDate.getDate() + ' Day</p><p>' + currentDate.getHours() + ' H</p><p>' + currentDate.getMinutes() + ' Mins</p><p>' + currentDate.getSeconds() + ' Sec</p></div>')
  
  // Initially hide the timestamp
  $('.time').hide();
  $('.btn_cart').hide();
  
  // Move the product around and show the timestamp on hover 
  $('.product').hover(function() {
      $(this).find('.time').show();
      $(this).find('.btn_cart').show();
  },
  function() {
      // This function runs when the hover ends, so we hide the timestamp again
      $(this).find('.time').hide();
      $(this).find('.btn_cart').hide();
  });
});
$(document).ready(function() {
  // Add the current date and time for promotion
  var currentDate = new Date();
  // Append time to each .product
  $('.product1').append('<div class="time"><p>' + currentDate.getDate() + ' Day</p><p>' + currentDate.getHours() + ' H</p><p>' + currentDate.getMinutes() + ' Mins</p><p>' + currentDate.getSeconds() + ' Sec</p></div>')
  
  // Initially hide the timestamp
  $('.time').hide();
  $('.btn_cart').hide();
  
  
  // Move the product around and show the timestamp on hover 
  $('.product1').hover(function() {
      $(this).find('.time').show();
      $(this).find('.btn_cart').show();
  },
  function() {
      // This function runs when the hover ends, so we hide the timestamp again
      $(this).find('.time').hide();
      $(this).find('.btn_cart').hide();
  });
});

// $(document).ready(function() {
// // Add the current date and time for promotion
// var currentDate = new Date();
// // $('.product').append('<p class="promotion"> ' + currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ' </p>');
// $('.product1').append('<div class="time"><p>'+currentDate.getDate()+' Day</p><p>'+currentDate.getHours()+' H</p><p>'+currentDate.getMinutes()+' Mins</p><p>'+currentDate.getSeconds()+' Sec</p></div>')
// $('.time').hide()

// // Move the product around
// $('.product1').hover(function() {
//   $('.time').show()
//     $(this).css('left', Math.random() * $('.product1').width());
//     $(this).css('top', Math.random() * $('.product1').height());
// });
// });


$(document).ready(function() {
// Show products of selected category when its button is clicked
$('.btn_cate button').click(function() {
    // Get button text (assuming that it corresponds to product categories)
    var category = $(this).text().toLowerCase();

    // Hide all products
    $('.product').hide();

    // Show only products of the selected category
    $(".product." + category).show();
});
});

$(document).ready(function() {
  // Handle click event on '.btn'
  $('.btn_more').click(function() {
    
      // Find all 'hidden' product elements
      var hiddenProducts = $('.product').filter(function() {
          return $(this).css('display') === 'none';
      });

      // Show the next 4 hidden products
      $(hiddenProducts).slice(0, 4).show();

  });
});
$(document).ready(function() {
$(".btn_sub").click(function(e) {
    e.preventDefault();
    var email = $("#email").val();
  
    if (email.length == 0) {
        alert("Vui lòng nhập email");
    } else if (!validateEmail(email)) {
        alert("Email không hợp lệ");
    } else {
      alert("Đăng kí thành công xin vui lòng chờ được xác nhận")
    }
});
});
$(document).ready(function() {
    $(".post_btn").click(function(e) {
        e.preventDefault();
        var email = $("#email").val();
        var name = $("#name").val();
        var message = $("#message").val();

        if (email.length == 0 && name.length == 0 && message.length == 0) {
            alert("Vui lòng nhập thông tin và nội dung muốn đăng tải");
        } else if (!validateEmail(email)) {
            alert("Email không hợp lệ");
        } else if (name.length == 0) {
          alert("Vui lòng nhập tên của bạn");
        }else if (email.length == 0) {
          alert("Vui lòng nhập email của bạn");
        }
        else if (message.length == 0) {
          alert("Vui lòng nhập nội dung bạn muốn đăng tải");
        }
        else {
          alert("Bài viết đang được đang tải")
        }
    });
});

// $(document).ready(function() {
//   //Tạo biến để lưu trữ số lượng hiện tại
//   var quantity = 1;

//   // Tạo nút tăng và giảm số lượng
//   $('.int').on('click', '.btn-decrease', function() {
//     // Giảm số lượng xuống 1
//     quantity--;

//     // Hiển thị lại số lượng mới
//     $('.quantity').html(quantity);
//   });

//   $('.int').on('click', '.btn-increase', function() {
//     // Tăng số lượng lên 1
//     quantity++;

//     // Hiển thị lại số lượng mới
//     $('.quantity').html(quantity);
//   });
// })
$(document).ready(function() {
  // Sự kiện khi click vào nút "-"
  $(".btn-decrease").click(function() {
    var quantityVal = parseInt($("#quantity").text());
    if (quantityVal > 1) {  // Đảm bảo số lượng luôn lớn hơn 0
      $("#quantity").text(quantityVal - 1);
    }
  });

  // Sự kiện khi click vào nút "+"
  $(".btn-increase").click(function() {
    var quantityVal = parseInt($("#quantity").text());
    $("#quantity").text(quantityVal + 1);
  });
});

// $(document).ready(function() {
//       // Tạo biến để lưu trữ số lượng hiện tại
//       var quantity = 1;
//       if($('.btn-decrease')){
//         $('.btn-decrease').on("click",function(){
//           // Giảm số lượng xuống 1
//           quantity--;
//           document.querySelector('.quantity').textContent = quantity;
//        })
//       }
//       // $('.btn-decrease').on("click",function(){
//       //    // Giảm số lượng xuống 1
//       //    var quantity = quantity - 1;
//       //    document.querySelector('.quantity').textContent = quantity;
//       // })
//       else{
//         $('.btn-increase').on("click",function(){
//           //Tăng số lượng lên 1
//           quantity++;
//           document.querySelector('.quantity').textContent = quantity;
//        }) 
//       }
//     //   $('.btn-increase').on("click",function(){
//     //     //Tăng số lượng lên 1
//     //     quantity++;
//     //     document.querySelector('.quantity').textContent = quantity;
//     //  })    
// });

// Get the product detail section
var productDetail = $('.product_detail');

// Get the three buttons
var detButton = $('.det');
var pdButton = $('.pd');
var rvButton = $('.rv');

// Hide the `.pd_w` section initially
// $('.pd_w').hide();

// Add a click event listener to the three buttons
detButton.on('click', function() {
  // Show the `.pd_w` section
  $('.pd_w').show();
});

pdButton.on('click', function() {
  // Show the `.pd_w` section
  $('.pd_w').show();
});

rvButton.on('click', function() {
  // Show the `.pd_w` section
  $('.pd_w').show();
});

// When the user clicks outside of the product detail section, hide the `.pd_w` section
$(document).on('click', function(event) {
  if (!productDetail.is(event.target) && !productDetail.has(event.target).length) {
    // $('.pd_w').hide();
  }
});
$(function () {
	$('button').click(function () {
		var btn = $(this).find('.fa');

		$('.content').hide(500);
		$('button').find('.fa').removeClass('fa-minus').addClass('fa-plus');
		$('.text').css('color', 'white');

		if (btn.hasClass('fa-plus')) {
			btn.removeClass('fa-plus').addClass('fa-minus');
			$(this).parent().next().show(500);
			$(this).next().css('color', '#BDE453');
		}
		else {
			btn.removeClass('fa-minus').addClass('fa-plus');
			$(this).parent().next().hide(500);
			$(this).next().css('color', 'white');
		}
	})
})
$(document).ready(function() {
  var it = $('<div class="newtext"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure incidunt labore molestias corporis quas sed, dicta aliquam consequuntur. Dolores.</p></div>');
  $('.btn2').click(function(event) {
    if ($(this).text() === "-") {
        $(this).closest('.item').nextAll('.newtext').remove();
        $(this).text('+');
    } else {
        $('.btn2').text('+');
        $('.newtext').remove();
        it.insertAfter($(this).closest('.item'));
        $(this).text('-');
    }
  });
});
//   $('.btn2').on('click', function(event) {
//     if ($(this).text() === "-") {
//         $(this).siblings('.item').slideUp();
//         $(this).text('+');
//         $('.newtext').remove();
//     } else {
//         $('.item1').slideUp();
//         $('.btn2').text('+');
//         $('.newtext').remove();
//         $(this).siblings('.item').slideDown();
//         $(this).siblings('.item1').children().append(it);
//         $(this).text('-');
//     }
//   });
// });

// thay doi ngon ngu // Get the selected language and currency
// const selectedLanguage = document.querySelector('#select[name="language"]').value;
// const selectedCurrency = document.querySelector('#select[name="Currency"]').value;

// // Change the language of the page
// document.documentElement.lang = selectedLanguage;

// // Change the currency of the page
// document.querySelectorAll('[class="price"]').forEach((element) => {
//   element.innerHTML = selectedCurrency + element.getAttribute('data-price');
// });


// cart
var btn = $('.btn_cart');

for (let i = 0; i<btn.length;i++){
  btn[i].addEventListener("click",function(){
    var img = btn[i].parentElement.childNodes[1].childNodes[1].src;
    var sao = btn[i].parentElement.childNodes[6].value();
    var ten = btn[i].parentElement.childNodes[7].text;
    var gia = btn[i].parentElement.childNodes[8].text;
    // alert(sao);
    var soluong = 1;
    var sp = {
      "img":img,
      "sao":sao,
      "ten":ten,
      "gia":gia,
      "soluong":soluong,
    }
    cart.push(sp);

    localStorage.setItem("cart1",JSON.stringify(cart));
    var cart1 = JSON.parse(localStorage.getItem("cart1"));
    if(cart !=null){
      document.getElementById("slsp").innerHTML="";
    }
     
  });
  
}
// nut back top
$(document).ready(function() {
var btn = jQuery('#button-to-top');
    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      jQuery('html, body').animate({scrollTop:0}, '300');
    });
});

	//Go To Top
    // $(document).ready(function() {
    //   jQuery('#button-to-top').on('click', function () {
    //     jQuery('html, body').animate({scrollTop: 0}, 500);
    //   });
    //   jQuery(window).on('scroll', function () {
    //     if (jQuery(window).scrollTop() >= (window.innerHeight * 0.5)) {
    //       if (!jQuery('#button-to-top').hasClass('active')) {
    //         jQuery('#button-to-top').addClass('active');
    //       }
    //       ;
    //     } else {
    //       jQuery('#button-to-top').removeClass('active');
    //     }
    //     ;
    //   });
    // })
  

    // 		// search
		// $('.main-menu-search .open-search-main-menu').on('click', function () {
		// 	var $this = $(this);

		// 	if ($this.hasClass('search-open')) {
		// 		$this.parents('.c-header__top').find('.search-main-menu').removeClass('active');
		// 		setTimeout(function () {
		// 			$this.parents('.c-header__top').find('.search-main-menu').find('input[type="text"]').blur();
		// 		}, 200);
		// 		$this.removeClass('search-open');
				
		// 		if($('body').hasClass('mobile')){
		// 			var $adv_search_link = $('.link-adv-search', $('#blog-post-search'));
		// 			if($adv_search_link.length > 0){
		// 				$adv_search_link.remove();
		// 			}
		// 		}
		// 	} else {
		// 		$this.parents('.c-header__top').find('.search-main-menu').addClass('active');
		// 		setTimeout(function () {
		// 			$this.parents('.c-header__top').find('.search-main-menu').find('input[type="text"]').focus();
		// 		}, 200);
		// 		$this.addClass('search-open');
				
		// 		if($('body').hasClass('mobile')){
		// 			var $adv_search_link = $('.link-adv-search', $this.closest('.widget-manga-search'));
		// 			if($adv_search_link.length > 0){
		// 				$('#blog-post-search').append($adv_search_link.clone());
		// 			}
		// 		}
		// 	}
		// 	;
		// });

    // form login
    $(document).ready(function() {
      $('a.login-window').click(function() {
          //lấy giá trị thuộc tính href – chính là phần tử "#login-box"
          var loginBox = $(this).attr('href');
          //cho hiện hộp đăng nhập trong 300ms
          $(loginBox).fadeIn(300);
  
  
          // thêm phần tử id="over" vào sau body
          $('body').append('<div id="over">');
          $('#over').fadeIn(300);
          return false;
   });
  
   // khi click đóng hộp thoại
   $(document).on('click', "a.close, #over", function() {
         $('#over, .login').fadeOut(300 , function() {
             $('#over').remove();
         });
        return false;
   });
  });
  
  // // next slide cate
  // const carousel = document.querySelector('.carousel');

  // let isDragging = false;
  // const dragStart = () =>{
  //   isDragging = true;
  //   carousel.classList.add("dragging")
  // }
  // const dragging = (e)=>{
  //   if(!isDragging) return;
  //     carousel.
  //     scrollLeft = e.pageX;
  // }
  // carousel.addEventListener("mousedown",dragStart);
  // carousel.addEventListener("mousemove",dragging);

  $(document).ready(function() {
    var slideIndex = 0;
    var totalSlides = $('.selec_cate').length;
  
    // Chức năng chuyển slide khi nhấp vào mũi tên
    $('.fa-angle-left').click(function() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      moveSlide(slideIndex);
    });
  
    $('.fa-angle-right').click(function() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      }
      moveSlide(slideIndex);
    });
  
    // Chức năng hiển thị thêm sản phẩm khi nhấp vào "More Products"
    $('.btn').click(function() {
      $('.cate_list').toggleClass('show-more');
    });
  
    function moveSlide(index) {
      var slideWidth = $('.selec_cate').width();
      var slidePosition = -slideWidth * index;
      $('.carousel').css('transform', 'translateX(' + slidePosition + 'px)');
    }
  });
  