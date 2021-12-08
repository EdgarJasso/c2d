(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter36361410=new Ya.Metrika({id:36361410,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(a){}});var e=d.getElementsByTagName("script")[0],c=d.createElement("script");a=function(){e.parentNode.insertBefore(c,e)};c.type="text/javascript";c.async=!0;c.src="https://mc.yandex.ru/metrika/watch.js";"[object Opera]"==b.opera?d.addEventListener("DOMContentLoaded",a,!1):a()})(document,window,"yandex_metrika_callbacks");

document.addEventListener('DOMContentLoaded', function() {
    var ruApiUrl = 'https://web.chat2desk.com.mx';
    var euApiUrl = 'https://web.chat2desk.com.mx';
    var secretKey = getParameterByName('hash');
    var lang = $('#lang-menu-link')[0].dataset.lang;

    console.log(getParameterByName('partid'))

    if (secretKey) {
        var secretKey = getParameterByName('hash');
        $(".panel-heading").fadeOut(100);
        $("#register-form").fadeOut(100);
        $("#login-form").fadeOut(100);
        $("#change-password-form").fadeIn(100);
        $("#change-password-form #secret-key").val(secretKey);
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    }

    $('.demo-sign-in').click(function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: ruApiUrl + '/api/user/sign_up',
            contentType: "application/json; charset=UTF-8",
            dataType: 'json',
            data: JSON.stringify({
                demo_access: true
            }),
            success: function (response) {
                if (response.status === 'success') {
                    location.href = ruApiUrl + '?auth_key=' + response.auth_key
                } else {
                    console.error('response', response)
                }
            }
        })

    });

    $('#login-form').submit(function (e) {
        $.ajax({
            method: 'POST',
            url: euApiUrl + '/api/user/sign_in' + '?lang=' + lang,
            contentType: "application/json; charset=UTF-8",
            dataType: 'json',
            data: JSON.stringify({
                email: $('#email_login').val(),
                password: $('#password_login').val()
            }),
            success: function (response) {
                //alert('Probando en:' + euApiUrl + '/api/user/sign_in' + '?lang=' + lang);
                if (response.status === 'success') {
                    location.href = euApiUrl + '?auth_key=' + response.auth_key
                    document.cookie = "logged_in=true"
                    document.cookie = "logged_in_url=" + euApiUrl
                    if (typeof(yaCounter36361410) == 'object') {
                        yaCounter36361410.reachGoal('success_enter');
                    }

                    if (typeof(gtag) == 'function') {
                        gtag('event', 'success_enter');
                    }
                } else {
                    //alert('Probando en:' + ruApiUrl + '/api/user/sign_in' + '?lang=' + lang);
                    $.ajax({
                        method: 'POST',
                        url: ruApiUrl + '/api/user/sign_in' + '?lang=' + lang,
                        contentType: "application/json; charset=UTF-8",
                        dataType: 'json',
                        data: JSON.stringify({
                            email: $('#email_login').val(),
                            password: $('#password_login').val()
                        }),
                        success: function (response) {
                            if (response.status === 'success') {
                                location.href = ruApiUrl + '?auth_key=' + response.auth_key;
                                document.cookie = "logged_in=true";
                                document.cookie = "logged_in_url=" + ruApiUrl;

                                if (typeof(yaCounter36361410) == 'object') {
                                    yaCounter36361410.reachGoal('success_enter');
                                }

                                if (typeof(gtag) == 'function') {
                                    gtag('event', 'success_enter');
                                }
                            } else {
                                //alert(response.errors);
                                console.error('response', response)
                                var result = [];
                                for (var a in response.errors) {
                                    result.push(response.errors[a][0]);
                                }
                                $('#log-error').show().html(result.join('<br/>'));
                            }
                        }

                    })
                }
            }
        });
        return false;
    });
    $('#register-form').submit(function (e) {
        if ($("#check-consent").prop('checked')) {
            $.ajax({
                method: 'POST',
                url: ruApiUrl + '/api/user/sign_up' + '?lang=' + lang,
                contentType: "application/json; charset=UTF-8",
                dataType: 'json',
                data: JSON.stringify({
                    email: $('#email').val(),
                    company_name: $('#name').val(),
                    password_confirmation: $('#confirm_password').val(),
                    password: $('#password').val(),
                    partid: getParameterByName('partid')
                }),
                success: function (response) {
                    if (response.status === 'success') {
                        location.href = ruApiUrl + '?auth_key=' + response.auth_key

                        if(typeof(yaCounter36361410)=='object'){
                            yaCounter36361410.reachGoal('success_reg');
                        }


                        if(typeof(gtag)=='function'){
                            gtag('event','success_reg');
                        }
                    } else {
                        console.error('response', response)
                    }
                    if (response.status === 'error') {
                        var result = [];
                        for (var a in response.errors) {
                            result.push(response.errors[a][0]);
                        }
                        $('#reg-error').show().html(result.join('<br/>'));
                    }

                }
            })
        } else {
            $('#reg-error').show().html(window.checkConsentText);
        }
        return false;
    });
    $('#reset-password-form').submit(function (e) {
        $.ajax({
            method: 'POST',
            url: euApiUrl + '/api/user/reset_password' + '?lang=' + lang,
            contentType: "application/json; charset=UTF-8",
            dataType: 'json',
            data: JSON.stringify({
                email: $('#email_reset').val(),
                url_to_change_pwd: window.location.href
            }),
            success: function (response) {
                if (response.status === 'success') {
                    $("#login-form").fadeOut(100);
                    $("#reset-password-form").fadeOut(100);
                    $("#panel-reset").fadeIn(100);
                } else {
                    $.ajax({
                        method: 'POST',
                        url: ruApiUrl + '/api/user/reset_password' + '?lang=' + lang,
                        contentType: "application/json; charset=UTF-8",
                        dataType: 'json',
                        data: JSON.stringify({
                            email: $('#email_reset').val(),
                            url_to_change_pwd: window.location.href
                        }),
                        success: function (response) {
                            if (response.status === 'success') {
                                $("#login-form").fadeOut(100);
                                $("#reset-password-form").fadeOut(100);
                                $("#panel-reset").fadeIn(100);
                            } else {
                                console.error('response', response)
                            }
                            if (response.status === 'error') {
                                var result = [];
                                for (var a in response.errors) {
                                    result.push(response.errors[a][0]);
                                }
                                $('#res-error').show().html(result.join('<br/>'));
                            }
                        }
                    })
                }
            }
        });
        return false;
    });

    $('#change-password-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: ruApiUrl + '/api/user/change_password',
            contentType: "application/json; charset=UTF-8",
            dataType: 'json',
            data: JSON.stringify({
                password: $('#changed_password').val(),
                password_confirmation: $('#changed_confirm_password').val(),
                hash: $('#secret-key').val()
            }),
            success: function (response) {
                if (response.status === 'success') {
                    location.href = ruApiUrl + '?auth_key=' + response.auth_key
                } else {
                    console.error('response', response)
                }
            }
        })

    });

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $(".panel-heading").fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#change-password-form").fadeOut(100);
        $('.register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('.register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $(".panel-heading").fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#panel-reset").fadeOut(100);
        $("#change-password-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('.forgot-password').click(function(e) {
        $("#reset-password-form").delay(100).fadeToggle(100);
        e.preventDefault();
    });

    $('a#login-form-link').click( function(event){
        $("#login-form").delay(100).fadeIn();
        $("#register-form").fadeOut();
        $("#change-password-form").fadeOut();
        $('#register-form-header').removeClass('active').addClass('hide');
        $('#login-form-header').removeClass('hide').addClass('active');
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('a.register-form-link').click( function(event){
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#change-password-form").fadeOut(100);
        $("#reset-password-form").fadeOut(100);
        $('#login-form-header').removeClass('active').addClass('hide');
        $('#register-form-header').removeClass('hide').addClass('active');
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    if (window.location.hash === '#registry') {
        $('.register-form-link').click()
    }
    if (window.location.pathname === '/register') {
        $('.register-form-link').click()
    }
});



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
;
