(function ($) {
    $( "#block-booknavigation a[href='" + window.location.pathname + "']" ).addClass("is-active");



    Drupal.behaviors.sidebarManipulation = {
        attach: function(context, settings) {
            //$('h1').remove();
            //console.log($('head title.toString'));
            if (document.title == 'Resource Links | Comprehensive School Health Research Group') {
                console.log(document.title);
                document.querySelector('.sidebar').remove();
                //document.getElementsByTagName('body').classList.add('otherclass');
                $('body').addClass('no-sidebar');
            }
            if (document.title == 'Publications and Reports | Comprehensive School Health Research Group') {
                console.log(document.title);
                document.querySelector('.sidebar').remove();
                //document.getElementsByTagName('body').classList.add('otherclass');
                $('body').addClass('no-sidebar');
            }
        }
    };












    $(document).foundation();
})(jQuery);
