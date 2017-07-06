/**
 * Created by Vish on 5/13/2017.
 */
$(document).ready(function(){
    $('#first').click(function () {
        $('#dialog').text('Click again...');
        $('.img-area1').show();
        //var myid="1";
        $.ajax({
            type: 'GET',
            url: '/api/redisdb/getImage/1',
        }).done(function (response) {
            var str= "data:image/png;base64,";
            str += response.img_data;

            var newImage = new Image();
            newImage.src = str;
                $('#img-msg').html('<p><strong>Data Loaded from :'+response.source+'</strong></p>');
                $('.img-area1').html(newImage);
        }).fail(function(xhr,status,error){
            console.log('error');
        });
    });
    $('#second').click(function () {
        $('#dialog').text('Click again...');
        $('.img-area2').show();

        $.ajax({
            type: 'GET',
            url: '/api/redisdb/getImage/2',
        }).done(function (response) {
            var str= "data:image/png;base64,";
            str += response.img_data;

            var newImage = new Image();
            newImage.src = str;
            $('#img-msg').html('<p><strong>Data Loaded from :'+response.source+'</strong></p>');
            $('.img-area1').html(newImage);
        }).fail(function(xhr,status,error){
            console.log('error');
        });
    });
    $('#third').click(function () {
        $('#dialog').text('Click again...');
        $('.img-area3').show();
        $.ajax({
            type: 'GET',
            url: '/api/redisdb/getImage/3',
        }).done(function (response) {
            var str= "data:image/png;base64,";
            str += response.img_data;

            var newImage = new Image();
            newImage.src = str;
            $('#img-msg').html('<p><strong>Data Loaded from :'+response.source+'</strong></p>');
            $('.img-area1').html(newImage);
        }).fail(function(xhr,status,error){
            console.log('error');
        });
    });
});