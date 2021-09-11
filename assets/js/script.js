window.addEventListener('DOMContentLoaded', function() {

    var tabSignIn = document.getElementById('tab_signin');
    var tabSignUp = document.getElementById('tab_signup');
    var tabBtnSignIn = document.getElementById('tab_btn_signin');
    var tabBtnSignUp = document.getElementById('tab_btn_signup');

    tabBtnSignUp.addEventListener('click', function() {


        if (!tabBtnSignUp.classList.contains('active')) {
            tabSignUp.classList.toggle('hidden');
            tabSignIn.classList.toggle('hidden');
            tabBtnSignUp.classList.toggle('active');
            tabBtnSignIn.classList.toggle('active');
        }
    })


    tabBtnSignIn.addEventListener('click', function() {

        if (!tabBtnSignIn.classList.contains('active')) {
            tabSignUp.classList.toggle('hidden');
            tabSignIn.classList.toggle('hidden');
            tabBtnSignUp.classList.toggle('active');
            tabBtnSignIn.classList.toggle('active');
        }
    })
})