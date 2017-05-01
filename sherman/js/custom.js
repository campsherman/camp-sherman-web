/**
 * @file
 * Code for humbergur menu.
 */

(function($, Drupal, drupalSettings) {
  Drupal.behaviors.sherman = {
      attach: function(context, settings) {
        $(".meanmenu-reveal").click(function() {
          var X = $(this).attr('id');
            if (X == 1) {
              $(".submenu").hide();
              $(this).attr('id', '0');
              $(this).removeClass('mean-close');
            }
            else {
              $(".submenu").show();
              $(this).attr('id', '1');
              $(this).addClass('mean-close');
            }
        });
        $(".submenu").mouseup(function() {
          return false
        });
        $(".meanmenu-reveal").mouseup(function() {
          return false
        });
        $(document).mouseup(function() {
          $(".submenu").hide();
          $(".meanmenu-reveal").attr('id', '');
          $('.meanmenu-reveal').removeClass('mean-close');
        });
//         $(function() {
//     		console.log( "ready!" );
//     		$("ul.menu.sub-menu-sherman.menu-level--1 > li.menu-item.menu-item--expanded").append('<span class="caret"></span');
// 
// 		});
//      This selector now works but executes multiple times. 
// 		$("ul.menu.sub-menu-sherman.menu-level--1 > li.menu-item.menu-item--expanded").append('<span class="caret"></span');

      }
 
    };
    
})(jQuery, Drupal, drupalSettings);
