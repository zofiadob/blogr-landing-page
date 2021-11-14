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


function subMenuOpenClose(num){
    const subMenuState1 = document.getElementById('subcathergory-box-1');
    const subMenuState2 = document.getElementById('subcathergory-box-2');
    const subMenuState3 = document.getElementById('subcathergory-box-3');
    console.log(subMenuState1.style.display, subMenuState2.style.display, subMenuState3.style.display);

    if (num == '1'){
        subMenuState1.style.display == '' ? subMenuState1.style.display = 'block' : subMenuState1.style.display = '';
        subMenuState2.style.display = '';
        subMenuState3.style.display = '';
    }

    else if (num == '2'){
        subMenuState2.style.display == '' ? subMenuState2.style.display = 'block' : subMenuState2.style.display = '';
        subMenuState1.style.display = '';
        subMenuState3.style.display = '';
    }

    else{
        subMenuState3.style.display == '' ? subMenuState3.style.display = 'block' : subMenuState3.style.display = '';
        subMenuState2.style.display = '';
        subMenuState1.style.display = '';
    }
}