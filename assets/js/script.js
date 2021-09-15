window.addEventListener('DOMContentLoaded', function() {

    var tabSignIn = document.getElementById('tab_signin');
    var tabSignUp = document.getElementById('tab_signup');
    var tabBtnSignIn = document.getElementById('tab_btn_signin');
    var tabBtnSignUp = document.getElementById('tab_btn_signup');

    tabBtnSignUp.addEventListener('click', function() {


        if (!tabBtnSignUp.classList.contains('active_tab')) {
            tabSignUp.classList.toggle('hidden');
            tabSignIn.classList.toggle('hidden');
            tabBtnSignUp.classList.toggle('active_tab');
            tabBtnSignIn.classList.toggle('active_tab');
        }
    })


    tabBtnSignIn.addEventListener('click', function() {

        if (!tabBtnSignIn.classList.contains('active_tab')) {
            tabSignUp.classList.toggle('hidden');
            tabSignIn.classList.toggle('hidden');
            tabBtnSignUp.classList.toggle('active_tab');
            tabBtnSignIn.classList.toggle('active_tab');
        }
    })

    $('.mask-phone').mask('+7 (999) 999-99-99');


    $('#project_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('#feedback_carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
    var owl_fb = $("#feedback_carousel");
    owl_fb.owlCarousel();
    //$(".next") - находим нашу кнопку
    $(".feedback_next_btn").click(function() {
        owl_fb.trigger("next.owl.carousel");
    });
    $(".feedback_prev_btn").click(function() {
        owl_fb.trigger("prev.owl.carousel");
    });



    var owl_proj = $("#project_slider");
    owl_proj.owlCarousel();
    //$(".next") - находим нашу кнопку
    $(".proj_next_btn").click(function() {
        owl_proj.trigger("next.owl.carousel");
    });
    $(".proj_prev_btn").click(function() {
        owl_proj.trigger("prev.owl.carousel");
    });






    // forms Senders

    $("#signup").submit(function(event) {

        event.preventDefault();
        submitFormSignUp("signup", "signup");
    });


    $("#form_modal_signup").submit(function(event) {

        event.preventDefault();
        submitFormSignUp("form_modal_signup", "signup");
    });
    $("#form_modal_signup_only").submit(function(event) {

        event.preventDefault();
        submitFormSignUp("form_modal_signup_only", "signup");
    });





    $("#callback").submit(function(event) {

        event.preventDefault();
        submitForm("callback", "callback");
    });



    $("#form_modal_callback").submit(function(event) {

        event.preventDefault();
        submitForm("form_modal_callback", "callback");
    });

    $("#form_modal_signin").submit(function(event) {

        event.preventDefault();
        submitForm("form_modal_signin", "signin");
    });

    $("#form_modal_signin_only").submit(function(event) {

        event.preventDefault();
        submitForm("form_modal_signin", "signin");
    });







    // var modalConfirm = document.getElementById('modal_confirm');
    // var formSignUp = document.getElementById('form_modal_signup');
    // var modalSignUp = document.getElementById('signUpModal');

    // formSignUp.addEventListener('submit', function(event) {
    //     console.log('form');
    //     event.preventDefault();
    //     modalSignUp.classList.remove('show');
    //     modalConfirm.classList.toggle('hidden');
    // })

    var closeConfirm = document.getElementById('close_confirm');
    var modalCongirm = document.getElementById('modal_confirm');

    closeConfirm.addEventListener('click', function() {
        modalCongirm.classList.toggle('hidden');
    })

    var closeModalMsg = document.getElementById('close_msg');
    var modalMsg = document.getElementById('modal_msg');

    closeModalMsg.addEventListener('click', function() {
        modalMsg.classList.toggle('hidden');
    })
})


function submitFormSignUp(form_id, type) {

    var form = $('#' + form_id);
    var msg = form.serialize() + '&type=' + type;
    console.log($);
    $('#modal_msg').addClass('hidden');
    $.ajax({
        type: "POST",
        url: "/test.php",
        data: msg,
        success: function(text) {
            var data = JSON.parse(text)
            if (data == 'ok') {
                $(".modal").modal("hide");
                formSuccess('modal_confirm');
                $('#' + form_id)[0].reset();
            } else {
                $('#modal_msg_text').html(data);
                $('#modal_msg').removeClass('hidden');
            }

        },
        error: function(error) {
            console.log(error);
        }
    });
}

function submitForm(form_id, type) {

    var form = $('#' + form_id);
    var msg = form.serialize() + '&type=' + type;
    $('#modal_msg').addClass('hidden');
    $.ajax({
        type: "POST",
        url: "/test.php",
        data: msg,
        success: function(text) {
            var data = JSON.parse(text)
            if (data == 'Спасибо, данные отправлены') {
                $(".modal").modal("hide");
                $('#modal_msg_text').html(data);
                $('#modal_msg').removeClass('hidden');
                $('#' + form_id)[0].reset();
            } else {
                $('#modal_msg_text').html(data);
                $('#modal_msg').removeClass('hidden');
            }

        },
        error: function(error) {
            console.log(error);
        }
    });
}

function formSuccess(modal_id) {
    $("#" + modal_id).removeClass("hidden");
}