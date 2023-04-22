function clickMenu (){
    let  menuMobile = document.querySelector('.material-symbols-outlined')
    if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open')
    } else {
       menuMobile.classList.add('open')
    }
}