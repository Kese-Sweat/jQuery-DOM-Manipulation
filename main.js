$('#one').on('click', function (e){
       $('.paragraph1').addClass('active') 
       $('.paragraph2').removeClass('active')
       $('.paragraph3').removeClass('active')
   });

$('#two').on('click', function (e){
    $('.paragraph2').addClass('active')
    $('.paragraph1').removeClass('active')
    $('.paragraph3').removeClass('active')

});

$('#three').on('click', function (e){
    $('.paragraph3').addClass('active')
    $('.paragraph2').removeClass('active')
    $('.paragraph1').removeClass('active')


});