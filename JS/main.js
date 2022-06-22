const toggleMenu = (toggleID, menuID) => {
    //html -> js
    const toggle = document.getElementById(toggleID);
    const navList = document.getElementById(menuID);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if(toggle&&navList) {
        //toggle click
        toggle.addEventListener('click', () => {
            //show-hide menu: .show-menu
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx-x
            toggleIcon.classList.toggle('bx-menu');
            toggleIcon.classList.toggle('bxs-x-square');
        });
    }
}
toggleMenu("toggleID", "menuID");