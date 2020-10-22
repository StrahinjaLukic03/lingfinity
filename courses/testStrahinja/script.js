function Check() {
    var sam = document.getElementById("sam").value;
    if(sam == "sam")
        document.getElementById("sam").style.borderColor = "green";
    else
        document.getElementById("sam").style.borderColor = "red";

    var zoves = document.getElementById("zoves").value;
    if(zoves == "zoveš" || zoves == "zoves")
        document.getElementById("zoves").style.borderColor = "green";
    else
        document.getElementById("zoves").style.borderColor = "red";

    var sta = document.getElementById("sta").value;
    if(sta == "šta" || sta == "sta" || sta == "Šta" || sta == "Sta")
        document.getElementById("sta").style.borderColor = "green";
    else
        document.getElementById("sta").style.borderColor = "red";

}