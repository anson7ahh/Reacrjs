const handleOnclickOpen = () => {
    const drawer = document.getElementById("drawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    drawer.style.right = '0px';
    drawerOverlay.style.visibility = 'visible';

}
const handleOnclickClose = () => {
    const drawer = document.getElementById("drawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    drawer.style.right = '-300px';
    drawerOverlay.style.visibility = 'hidden';
}
const handleOnclickClosedrawerOverlay = () => {
    const drawer = document.getElementById("drawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    drawer.style.right = '-300px';
    drawerOverlay.style.visibility = 'hidden';
}



