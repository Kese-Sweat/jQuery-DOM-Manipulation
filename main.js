$('.box').on('click', function (e){
 if ($('p').hasClass('active')){
     $('p').removeClass('active')
}else{
    $('p').addClass('active')
}
})