function setActiveMenue(title) {
    $("#rightMenue li").removeClass("active")

    var allLiMenue = $("#rightMenue li a div");
    var menueClicked;

    for (var i = 0; i < allLiMenue.length; i++) {
        if (allLiMenue[i].textContent == title) {
            menueClicked = allLiMenue[i];
            break;
        }
    }
    menueClicked.closest("li").classList.add("active")
}