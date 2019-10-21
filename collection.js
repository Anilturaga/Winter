function teja(){
    var info = 
    {
    id : JSON.parse(localStorage.getItem(1)),
    id1 :JSON.parse(localStorage.getItem(2)),
    id2 : JSON.parse(localStorage.getItem(3)),
    id3 : JSON.parse(localStorage.getItem(4)),
    id4 : JSON.parse(localStorage.getItem(5)),
    id5 :JSON.parse(localStorage.getItem(6)),
    id6 : JSON.parse(localStorage.getItem(7)),
    id7 : JSON.parse(localStorage.getItem(8)),
    id8 : JSON.parse(localStorage.getItem(9)),
    id9 : JSON.parse(localStorage.getItem(10)),
    id10 :JSON.parse(localStorage.getItem(11)),
    };

    document.getElementById("teja").innerHTML = JSON.stringify(info);
}
