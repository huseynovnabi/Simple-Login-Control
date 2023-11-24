'use strict';

$(function () {
    $('#Login').click(function () {
        let username, pass;
        username = $('#frmLogin #username').val();
        pass = $('#frmLogin #pass').val();
        if (username == '') {
            $('#pass').css('border', '1px solid grey').css('box-shadow', '0 0 0');
            $('#username').css('border', '2px solid gold').css('box-shadow', '0 0 3px gold');
            $('#message').html('İstifadəçi adı boş buraxıla bilməz!').addClass('warning');
        } else if (pass == '') {
            $('#username').css('border', '1px solid grey').css('box-shadow', '0 0 0');
            $('#pass').css('border', '2px solid gold').css('box-shadow', '0 0 3px gold');
            $('#message').html('Parol boş buraxıla bilməz!').addClass('warning');
        } else if (username != 'Nabi') {
            $('#pass').css('border', '1px solid grey').css('box-shadow', '0 0 0');
            $('#username').css('border', '2px solid red').css('box-shadow', '0 0 3px red');
            $('#message').html('İstifadəçi adı yanlış!').removeClass('warning').addClass('error');
        } else {
            $('#username').css('border', '1px solid grey').css('box-shadow', '0 0 0');
            $('#message').html('Giriş edildi yönləndirilirsiniz').removeClass('warning').removeClass('error').addClass('success');
        }
    })

})
