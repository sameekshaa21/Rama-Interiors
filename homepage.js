// Initialization for ES Users
AOS.init();
import { Carousel, initMDB } from "mdb-ui-kit";
initMDB({ Carousel });

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );