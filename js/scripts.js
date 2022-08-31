(function($){
    jQuery(document).ready(function(){
        "use_strict";

        /////// For slider
        jQuery('.owl-carousel').owlCarousel({
            loop:true,
            items:1,
            autoplay:true,
        });

        //// For small menu
        jQuery('.mobile').hide();
        jQuery('.small-menu-item').on('click', function(){
            jQuery('.mobile').toggle(500);
            jQuery('.header').toggleClass('fixed' , '500');

            return false;
        });

        /////// For search box
        jQuery('.search__box').hide();
        jQuery('.search').on('click', function(){
            jQuery('.search__box').toggle();

            return false;
        })
    });
})(jQuery)