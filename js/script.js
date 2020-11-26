$(document).ready(
  function() {
    // seleziono tutti gli li con classe toggle
    var list = $('#header_right ul li.toggle')
    console.log(list);

    list.mouseenter(
      function() {
        $(this).children('.dropdown').addClass('active');
      }
    );
    list.mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('active');
      }
    );

    // list.click(
    //   function() {
    //     $(this).children('.dropdown').toggle();
    //   }
    // );
  }
);
