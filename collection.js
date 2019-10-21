function teja(){
    var jsons = new Array();
    var vari = localStorage.getItem(1);
    var varia = vari.replace("\\\\"," ");
    var info = {id : varia,
    id1 : localStorage.getItem(2),
    id2 : localStorage.getItem(3),
    id3 : localStorage.getItem(4),
    id4 : localStorage.getItem(5),
    id5 : localStorage.getItem(6),
    id6 : localStorage.getItem(7),
    id7 : localStorage.getItem(8),
    id8 : localStorage.getItem(9),
    id9 : localStorage.getItem(10),
    id10 : localStorage.getItem(11),
    };
    //String jsonFormattedString = info.id.replaceAll("\\\\", "");
    //var jsonFormattedString = info.id.replaceAll("\\\\", "");
    var jsons = [];
    var count;
    for(count=1;count<=10;count++)
    {
        if(localStorage.getItem(count) != null)
        {   
            //info
            //id = count.toString();
            //info[id] = localStorage.getItem(count);
            jsons.push(localStorage.getItem(count));
            //userinfo[count] = localStorage.getItem(count); 
            //info[id] = localStorage.getItem(count);   
        }
    }

    //document.getElementById("teja").innerHTML = jsons;
    //document.getElementById("teja").innnerHTML = Object.assign({},jsons);
    document.getElementById("teja").innerHTML = JSON.stringify(info);
}
