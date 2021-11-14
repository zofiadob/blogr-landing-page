function menuOpenClose(){
    const menuState = document.getElementById('icon-ham');
    const menuBox = document.getElementById('menu-box');

    if (menuState.src.includes('hamburger')){
        menuState.src = './images/icon-close.svg';
        menuBox.style.display = 'inline';
    }
        else{
            menuState.src = './images/icon-hamburger.svg';
            menuBox.style.display = 'none'
        }
    }
