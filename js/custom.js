$(document).ready(function() {
    function breath(class1, class2) {
        class1.addClass(class2);
    }

    function remove(class1, class2, class3) {
        class1.removeClass("animasi");
        class2.removeClass("animasi");
        class3.removeClass("animasi");
    }

    breath($(".info1"), "animasi");

    $(".kode").click(function() {
        breath($(".info1"), "animasi");
        remove($(".info2"), $(".info3"), $(".info4"))
    })

    $(".garansi").click(function() {
        breath($(".info2"), "animasi");
        remove($(".info1"), $(".info3"), $(".info4"))
    })

    $(".qr").click(function() {
        breath($(".info3"), "animasi");
        remove($(".info2"), $(".info1"), $(".info4"))
    })

    $(".sistem").click(function() {
        breath($(".info4"), "animasi");
        remove($(".info2"), $(".info3"), $(".info1"))
    })

})