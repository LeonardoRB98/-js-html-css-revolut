$(document).ready(
  function() {
    // seleziono tutti gli li con classe toggle
    var list = $('#header_right ul li.toggle')
    console.log(list);

    list.mouseenter(
      function() {
        // console.log(alert('funziona'));
        $(this).children('.dropdown').toggle();
      }
    );
    list.mouseleave(
      function() {
        $(this).children('.dropdown').toggle();
      }
    );

    list.click(
      function() {
        $(this).children('.dropdown').toggle();
      }
    );
  }
);
