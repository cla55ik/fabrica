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
                items: 3
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
                items: 3
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
    var modalCongirm = document.getElementById('midal_confirm');

    closeConfirm.addEventListener('click', function() {
        modalCongirm.classList.toggle('hidden');
    })
})