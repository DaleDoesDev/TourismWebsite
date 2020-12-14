function toggle(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none') {

        e.style.display = 'block';
        e.style.margin = '35px 0px';   
    }
    else {
        e.style.display = 'none';
    }
}