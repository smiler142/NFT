let initialTheme = true;
let themebtn = document.getElementById("theme");
let notibtn = document.getElementById("notification");
let searchbar = document.getElementById("searchbar");
function toggleColors() {   
    const root = document.documentElement;
    if(initialTheme){
        root.style.setProperty('--mainbg', '#F2F2F2');
        root.style.setProperty('--secondbg', '#FFFFFF');
        root.style.setProperty('--white', '#000000');
        themebtn.style.filter = 'invert()';
        notibtn.style.filter = 'invert()';
        searchbar.style.filter = 'invert()';
        initialTheme = false;
    }else{
        root.style.setProperty('--mainbg', '#131129');
        root.style.setProperty('--secondbg', '#1D1932');
        root.style.setProperty('--white', '#FFFFFF');
        themebtn.style.filter = '';
        notibtn.style.filter = '';
        searchbar.style.filter = '';
        initialTheme = true;
    }
}
