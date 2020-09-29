function themeClick(checkbox){
    var t;
    if(checkbox.checked){
        t = new Theme("darkTheme");
        switchTheme(t);
        console.log("DarkTheme");
    }
    else{
        t = new Theme("lightTheme");
        switchTheme(t);
        console.log("Light Theme");
    }
}