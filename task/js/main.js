$(document).ready(function(){
    
    //Top menu
    $(".menu").children("ul").children("li").mouseenter(function(e){
        e.preventDefault;
        $(this).find("a").css("font-family", "lato-bold");
    }).mouseleave(function(){
       $(this).find("a").css("font-family", "");
    });

    $(".products-button").on("click", function(e){
        e.preventDefault();
        $(".products").slideToggle(200);
        $(".products").find("li").mouseenter(function(){
            $(this).children("a").css("color", "#fff200");
            $(this).children("a").children("span").text(">>");
            if($(this).children("ul")[0]){
                $(this).children("ul").fadeIn(150);
            }
        }).mouseleave(function(){
            $(this).children("a").css("color", "");
            $(this).children("ul").fadeOut(100);
            $(this).children("a").children("span").text(">");
        });
    });

    //Search{
    $("header .search").on('keypress', function(e){
        function pushSearch(){
            var search;
            if (e.which == 13){
                search = $("header .search").find("input").val();
                $.ajax({
                    url: 'myform.php',
                    method: 'post',
                    data: {search:search}
                });
            };
        };
        pushSearch();
    });


    //Burger menu
    $(".burger-menu").on("click", function(){
        $(this).find(".burger").toggleClass("burger-active");
        $(".menu-mobile").fadeToggle(200);
    });

    $(".menu-mobile").find("li").on("mouseenter", function(){
        $(this).children("a").css("color", "#fff200");
    }).on("mouseleave", function(){
        $(this).find("a").css("color", "");
    });

    function buttonMenuClick(classButton, classElement){
        $(".menu-mobile").find(classButton).on("click", function(){
            $(classElement).slideToggle(200);
            $(classButton).toggleClass("active");
        });
    };
    buttonMenuClick(".button-products", ".mobile-products");
    buttonMenuClick(".button-shoes", ".mobile-shoes");
    buttonMenuClick(".button-men-shoes", ".mobile-men-shoes");

    $(window).resize(function() {
        if ($(window).width() > 1024) {
           $("header .menu-mobile").css("display", "none");
           $(".burger-menu").find(".burger").removeClass("burger-active");
        }
    });


    // Slider
    var slideNumber = 1;
    function nextSliders(){
        slideNumber += 1;
        if (slideNumber > $("#banners").find(".banner").length){
            slideNumber = 1;
        };
        clearInterval(setIntervalBanners);
        functionIntervalBanners();
        
    };
    $("#banners .next").on("click", function(){
        nextSliders();
        activeSliders()
    });
    function prewSliders(){
        slideNumber -= 1;
        if (slideNumber < 1){
            slideNumber = 3;
        };
        clearInterval(setIntervalBanners);
        functionIntervalBanners();
    };
    $("#banners .prew").on("click", function(){
        prewSliders();
        activeSliders()
    });

    $("#banners .active").find(".first").on("click", function(){
        slideNumber = 1;
        clearInterval(setIntervalBanners);
        functionIntervalBanners();
        activeSliders();
        
    })
    $("#banners .active .second").on("click", function(){
        slideNumber = 2;
        clearInterval(setIntervalBanners);
        functionIntervalBanners();
        activeSliders()
    })
    $("#banners .active .third").on("click", function(){
        slideNumber = 3;
        clearInterval(setIntervalBanners);
        functionIntervalBanners();
        activeSliders()
    })
    var delay;
    function activeSliders(){
        delay = 5000;
        if (slideNumber == 1){
            $("#banners .banner-1").fadeIn(700);
            $("#banners .banner-2").css("display", "none");
            $("#banners .banner-3").css("display", "none");
            $("#banners .active .first").css("background-color", "#fff");
            $("#banners .active .second").css("background-color", "");
            $("#banners .active .third").css("background-color", "");
            delay = 8000;
            
        }
            else if (slideNumber == 2){
                $("#banners .banner-1").css("display", "none");
                $("#banners .banner-2").fadeIn(700);
                $("#banners .banner-3").css("display", "none");
                $("#banners .active .first").css("background-color", "");
                $("#banners .active .second").css("background-color", "#fff");
                $("#banners .active .third").css("background-color", "");
                delay = 7000;
            }
                else if (slideNumber == 3){
                    $("#banners .banner-1").css("display", "none");
                    $("#banners .banner-2").css("display", "none");
                    $("#banners .banner-3").fadeIn(700);
                    $("#banners .active .first").css("background-color", "");
                    $("#banners .active .second").css("background-color", "");
                    $("#banners .active .third").css("background-color", "#fff");
                    delay = 9000;
                }
                    else{
                        slideNumber = 1;
                    }
    }
    activeSliders();
    // Slider autoplay
    var setIntervalBanners;
    function functionIntervalBanners(){
        setIntervalBanners = setInterval(function(){
            slideNumber += 1;
            if (slideNumber > $("#banners").find(".banner").length){
                slideNumber = 1;
            }
            activeSliders();
        }, delay);
    };
    functionIntervalBanners();
    
    
    //Who us hover
    $("#who-us .element").on("mouseenter", function(){
        $(this).children(".element-hover").slideDown(200); 
        $(this).children(".element-hover").css("display", "flex");
    }).on("mouseleave", function(){
        $(this).children(".element-hover").slideUp(200);
    });

    //Products slider
    var productSliderNumber = 1;
    var productDelay = 5000;
    function productSliders(){
        $("#products .active").children().on("click", function(){
            if ($(this).hasClass("first")){
                productSliderNumber = 1;
                clearInterval(productSliderAutoplay);
                functionIntervalProducts();
                
            }
                else if ($(this).hasClass("second")){
                    productSliderNumber = 2;
                    clearInterval(productSliderAutoplay);
                    functionIntervalProducts();
                }
                    else if($(this).hasClass("third")){
                        productSliderNumber = 3;
                        clearInterval(productSliderAutoplay);
                        functionIntervalProducts();
                    }
                        else{
                            productSliderNumber = 1;
                            clearInterval(productSliderAutoplay);
                            functionIntervalProducts();
                        };
            NumberSliderActive();
        });
    };
    function NumberSliderActive(){
        if (productSliderNumber == 1){
            $("#products .product-section-1").css("display", "block");
            $("#products .product-section-2").css("display", "none");
            $("#products .product-section-3").css("display", "none");
            $("#products .active").children(".first").css("background-color", "#503392");
            $("#products .active").children(".second").css("background-color", "#d7d7d7");
            $("#products .active").children(".third").css("background-color", "#d7d7d7");
            delay = 5000;
            
        }
            else if (productSliderNumber == 2){
                $("#products .product-section-1").css("display", "none");
                $("#products .product-section-2").css("display", "block");
                $("#products .product-section-3").css("display", "none");
                $("#products .active").children(".first").css("background-color", "#d7d7d7");
                $("#products .active").children(".second").css("background-color", "#503392");
                $("#products .active").children(".third").css("background-color", "#d7d7d7");
                delay = 7000;
            } 
                else if (productSliderNumber == 3){
                    $("#products .product-section-1").css("display", "none");
                    $("#products .product-section-2").css("display", "none");
                    $("#products .product-section-3").css("display", "block");
                    $("#products .active").children(".first").css("background-color", "#d7d7d7");
                    $("#products .active").children(".second").css("background-color", "#d7d7d7");
                    $("#products .active").children(".third").css("background-color", "#503392");
                    delay = 9000;
                };
    }

    productSliders();
    //Products autoplay
    var productSliderAutoplay;
    function functionIntervalProducts(){
        productSliderAutoplay = setInterval(function(){
            productSliderNumber += 1;
            if (productSliderNumber > $("#products .product-wrapper").children().length){
                productSliderNumber = 1;
            }
            NumberSliderActive();   
        }, productDelay);
    }
    functionIntervalProducts();

    //Change class
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $(".bg-top-line .bg-top-line-wrapper").removeClass("container").addClass("container-fluid");
           $("#products .product-wrapper").removeClass("container").addClass("container-fluid");
        }
        else {
            $("#products .product-wrapper").removeClass("container-fluid").addClass("container");
            $(".bg-top-line .bg-top-line-wrapper").removeClass("container-fluid").addClass("container");
        }
    });

    //Skill activation
    $(document).on("scroll", function(){
        if ($(document).scrollTop() + $(window).height() > $("#about-us").find(".skill-bar").offset().top){
            $("#about-us .skill-bar").find(".skill").each(function(){
                var skillProcent = $(this).attr("data-procent");
                $(this).children(".text").find(".procent").find("span").text(skillProcent);
                $(this).children(".procent-line").find(".procent").animate({
                    width: skillProcent + "%"
                }, 2000);
                $(this).children(".text").find(".procent").find("span").spincrement({
                    thousandSeparator: "",
                    duration: 2800
                });
            });
          };
    });

    //Contact menu activation
    $(document).on("scroll", function(){
        if ($(document).scrollTop() + $(window).height()/2 > $("#contact .wrapper-mask").offset().top){
            $("header .contact-link").css("font-family", "lato-bold");
        }
            else if (($(document).scrollTop() + $(window).height()/2 < $("#contact .wrapper-mask").offset().top)){
                $("header .contact-link").css("font-family", "");
            }
    })

    //Google Map
    function initMap() {
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.8334904, lng: 24.0057054},
          zoom: 15
        });
    };
    initMap();
    $("#map").css("position", "absolute");

    //Scroll from ancore
    $("a[href^='#']").on("click", function(){
        var target = $(this).attr('href');
        $("html, body").animate({
          scrollTop: $(target).offset().top - 75 + "px"
        }, 1500);
        return false;
      });

    // Function validate form
    function validateForm(){
        var inputText = /[^(A-Z)(a-z)(А-Я)(а-я)\і\s\'\ё]/,
            inputEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
            valName = false,
            valEmail = false;

        if($("#contact .call-form").children(".contact-info").children(".name").val() == "" || inputText.test($("#contact .call-form").children(".contact-info").children(".name").val())){
            $("#contact .call-form").children(".contact-info").children(".name").css("border-color", "rgba(255, 0, 0, 0.55)");
            valName = false;
        }
            else{
                $("#contact .call-form").children(".contact-info").children(".name").css("border-color", "");
                valName = true;
            };
        if($("#contact .call-form").children(".contact-info").children(".email").val() == "" || !inputEmail.test($("#contact .call-form").children(".contact-info").children(".email").val())){
            $("#contact .call-form").children(".contact-info").children(".email").css("border-color", "rgba(255, 0, 0, 0.55)");
            valEmail = false;
        }
            else{
                $("#contact .call-form").children(".contact-info").children(".email").css("border-color", "");
                valEmail = true;
            };

        // if not wrong - message form;
        if(valName == true){
            if (valEmail == true){
                pushForm();
            };
        };
    };

    //Function message form
    function pushForm(){
        var name = $("#contact .call-form").children(".contact-info").children(".name").val();
        var email = $("#contact .call-form").children(".contact-info").children(".email").val();
        var message = $("#contact .message").children(".message").val();
        var flag = $("#contact .send").find(".checkbox").is(":checked");
        $.ajax({
          url: '/myform.php',
          method: 'post',
          data: {name:name, email:email, message:message, flag:flag}
        });
      };

    //Click send form
    $("#contact .send").children(".form-send").on("click", function(e){
        e.preventDefault;
        validateForm();
    });

});