function switch_btn(btn_id) {
    var btn_list = [
        //Ajouter des boutons ici pour plus de tri
        document.getElementById("btn-all"),
        document.getElementById("btn-game"),
        document.getElementById("btn-prog"),
        document.getElementById("btn-school")
    ]
    var len = btn_list.length

    for (var i = 0; i != len; i++) {
        btn_list[i].style.background = "none"
        btn_list[i].style.color = "#fe948c"
        if (i == btn_id) {
            btn_list[i].style.background = "#FE938C"
            btn_list[i].style.color = "#b9463e"
        }
    }
}

function hide_elem(type, btn_id) {
    switch_btn(btn_id)
    var all_card = document.getElementsByClassName("card")
    var len = all_card.length

    for (var i = 0; i != len; i++) {
        if (!all_card[i].classList.contains(type)) {
                all_card[i].style.display = "none";
        } else {
            all_card[i].style.display = "flex";
        }
    }
}