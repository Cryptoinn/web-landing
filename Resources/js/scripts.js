/*eslint-env jquery*/

$('document').ready(function(){
  
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
    
    /* buttons header*/
    
    $('btn').click(function() {
        $('html','body').animate({scrollTop: $('js--section-plans').offset().top}, 1000);
    });
    
});