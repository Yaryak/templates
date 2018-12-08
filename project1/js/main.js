$(document).ready(function(){

  // Робимо активну кнопку меню.
  $(".row-mobmenu").on("click", function(e){
    $(".mobmenu-items").slideToggle(200);
    $(".div-mobmenu").toggleClass("div-mobmenu-active");
    $(".row-mobmenu").toggleClass("row-mobmenu-hover");
  });

  //Плавна прокрутка до якоря
  $("a[href^='#']").on("click", function(){
    var target = $(this).attr('href');
    $("html, body").animate({
      scrollTop: $(target).offset().top + "px"
    }, 1500);
    return false;
  });

  // Активація анімації.
  function activationAnimation(item, animation){
    // Добавляемо клас флаг
    item.addClass("ready");
    // Міняємо видимість на 0
    item.css("opacity", "0");
    // Відслідковуємо дію scroll
    $(document).on("scroll", function(e){
      // Перевіряємо де область екрану, також чи є флаг клас
      if ($(document).scrollTop() + $(window).height() > item.offset().top && item.hasClass("ready")){
        // Удаляемо клас флаг
        item.removeClass("ready");
        // Добавляемо css з попередньо прописаною анімацію в style
        item.css("animation", animation);
        // Робимо елемент постійно видимим
        item.css("opacity", "1");
      };
    });
  };

  // Активація анімації картинок
  function activationAnimationImg(item, animation){
    // Для кожної картинки яка в масиві
    $(item).each(function(e){
      // Добавляємо клас флаг
      $(this).addClass("ready");
      // Робимо видимість 0
      $(this).css("opacity", "0");
    })
    // При прокрутці
    $(document).on("scroll", function(e){
      $(item).each(function(e){
        // Провіряємо де область видимості, також чи є флаг клас
        if ($(document).scrollTop() + $(window).height() > $(this).offset().top && $(this).hasClass("ready")){
          // Удаляємо клас флаг
          $(this).removeClass("ready");
          // Добавляемо css з попередньо прописаною анімацію в style
          $(this).css("animation", animation);
          // Робимо елемент постійно видимим
          $(this).css("opacity", "1");
        };
      })
    });
  }

  // Використовуємо наші функції
  activationAnimation($(".about-text").find("h3"), "h3-right 2s");
  activationAnimation($(".about-text").find(".text"), "text-rightc 2s");
  activationAnimation($("#work").find("h3"), "h3-lefta 3s");

  var firstShadow = [$(".shadow")[0], $(".shadow")[3]];
  activationAnimationImg(firstShadow, "lefta 2s");

  var secondShadow = [$(".shadow")[1], $(".shadow")[4]];
  activationAnimationImg(secondShadow, "buttona 2s");

  var lastShadow = [$(".shadow")[2], $(".shadow")[5]];
  activationAnimationImg(lastShadow, "righta 2s");

  // Появленя лупи при наведені на картинку
  $(".shadow").on("mouseenter", function(e){
    $(this).find(".inover").css("animation", "mouse-enter 1s")
  })
  // Зникнення лупи при покиданні мишкою області картинки
  $(".shadow").on("mouseleave", function(){
    $(this).find(".inover").css("animation", "")
    $(this).find(".inover").css("animation", "mouse-leave 1s")
  })

  // Паралакс
  $("#call").find(".circle").on("mousemove", function(e){
    var x = (e.pageX) / 100 - 8;
    var y = (e.pageY) / 100 - 25;
    $(".bubbles").css("background-position", x + "px " + y  + "px");
  })

  // Функція відправки форми
  function getForm(){
    var name = $(".call-form").find(".input-name").val();
    var email = $(".call-form").find(".input-email").val();
    var number = $(".call-form").find(".input-number").val();
    $.ajax({
      url: '/myform.php',
      method: 'post',
      data: {name:name, email:email, number:number}
    });
  }

// Валідація форми
  function validateForm(){
    var input1,
        input2,
        inputNumber = /[^(0-9)\+\(\)\s]/,
        inputText = /[^(A-Z)(a-z)(А-Я)(а-я)\і\s\'\ё]/;
    // Валідація форми з імям
    if($(".call-form").find(".input-name").val() == "" || inputText.test($(".call-form").find(".input-name").val())){
      $(".call-form").find(".input-name").css("border-bottom-color", "red");
      input1 = false;
    }
      else{
        $(".call-form").find(".input-name").css("border-bottom-color", "");
        input1 = true;
      }
    // Валідація форми з номером
    if($(".call-form").find(".input-number").val() == "" || inputNumber.test($(".call-form").find(".input-number").val())){
      $(".call-form").find(".input-number").css("border-bottom-color", "red");
      input2 = false;
    }
      else{
        $(".call-form").find(".input-number").css("border-bottom-color", "");
        input2 = true;
      }
    // якщо обидві форми не пройшли валідацію
    if (input1 == false || input2 == false){
      $(".call-form").find(".call-danger").text("Заповніть корректно підкреслені поля.")
      $(".call-form").find(".call-danger").css("visibility", "visible");
      $(".call-form").find(".call-danger").addClass("text-danger");
      if($(".call-form").find(".call-danger").hasClass("text-success")){
        $(".call-form").find(".call-danger").removeClass("text-success");
      };
    }
      // Якщо обидві форми пройшли валідацію
      else{
        $(".call-form").find(".call-danger").text("Дякуємо, ми обовязково Вам зателефонуємо!")
        $(".call-form").find(".call-danger").css("visibility", "visible");
        if($(".call-form").find(".call-danger").hasClass("text-danger")){
          $(".call-form").find(".call-danger").removeClass("text-danger");
        };
        $(".call-form").find(".call-danger").addClass("text-success");
        // Добавляємо функцію відправки форми
        getForm();
      }
  }

  $(".call-form").find("a").on("click", function(e){
    e.preventDefault();
    // Добавляємо функцію валідації форми
    validateForm()
  });

  // Кнопки відкривання і закривання моєї форми;)
  $(".yaryak").on("click", function(){
    $(".yaryak-info").slideToggle(300);
  })
  $(".yaryak-end").on("click", function(){
    $(".yaryak-info").slideToggle(200);
  })

});
