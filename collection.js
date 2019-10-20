function teja(){
    var jsons = new Array();
    var count;
    for(count=1;count<=10;count++)
    {
        jsons.push(localStorage.getItem(count));
    }
    document.getElementById("teja").innerHTML = jsons;
}