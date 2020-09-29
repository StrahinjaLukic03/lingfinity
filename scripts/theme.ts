class Theme{
    name;
    bodyClass;
    buttonClass;
    navBarClass;
    menuClass;
    iButtonClass;

    constructor(m){
        if(m == "darkTheme"){
            this.name = m;
            this.bodyClass = "bodyDark";
            this.buttonClass = "button buttonDark";
            this.navBarClass = "navbar navbarDark";
            this.menuClass = "menu menuDark";
            this.iButtonClass = "button iButton buttonDark";
        }

        if(m == "lightTheme"){
            this.name = m;
            this.bodyClass = "bodyLight";
            this.buttonClass = "button";
            this.navBarClass = "navbar";
            this.menuClass = "menu";
            this.iButtonClass = "button iButton";
        }
    }

    getNameCollection(){
        var col = [this.name, this.bodyClass, this.navBarClass, this.buttonClass, this.menuClass, this.iButtonClass];

        return col;
    }
}