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

    const arrowState1 = document.getElementById('light1');
    const arrowStateDark1 = document.getElementById('dark1');

    const arrowState2 = document.getElementById('light2');
    const arrowStateDark2 = document.getElementById('dark2');

    const arrowState3 = document.getElementById('light3');
    const arrowStateDark3 = document.getElementById('dark3');

    console.log(subMenuState1.style.display, subMenuState2.style.display, subMenuState3.style.display);

    if (num == '1'){
        subMenuState1.style.display == '' ? subMenuState1.style.display = 'block' : subMenuState1.style.display = '';
        subMenuState2.style.display = '';
        subMenuState3.style.display = '';

        arrowState1.style.transform == "rotate(0deg)" || arrowState1.style.transform == "" ? arrowState1.style.transform = "rotate(180deg)" : arrowState1.style.transform = "rotate(0deg)";
        arrowStateDark1.style.transform == "rotate(0deg)" || arrowStateDark1.style.transform == "" ? arrowStateDark1.style.transform = "rotate(180deg)" : arrowStateDark1.style.transform = "rotate(0deg)";
        arrowStateDark2.style.transform = "rotate(0deg)";
        arrowStateDark3.style.transform = "rotate(0deg)";
        arrowState3.style.transform = "rotate(0deg)";
        arrowState2.style.transform = "rotate(0deg)";
    }

    else if (num == '2'){
        subMenuState2.style.display == '' ? subMenuState2.style.display = 'block' : subMenuState2.style.display = '';
        subMenuState1.style.display = '';
        subMenuState3.style.display = '';

        arrowState2.style.transform == "rotate(0deg)" || arrowState2.style.transform == "" ? arrowState2.style.transform = "rotate(180deg)" : arrowState2.style.transform = "rotate(0deg)";
        arrowStateDark2.style.transform == "rotate(0deg)" || arrowStateDark2.style.transform == "" ? arrowStateDark2.style.transform = "rotate(180deg)" : arrowStateDark2.style.transform = "rotate(0deg)";
        arrowStateDark1.style.transform = "rotate(0deg)";
        arrowStateDark3.style.transform = "rotate(0deg)";
        arrowState1.style.transform = "rotate(0deg)";
        arrowState3.style.transform = "rotate(0deg)";
    }

    else{
        subMenuState3.style.display == '' ? subMenuState3.style.display = 'block' : subMenuState3.style.display = '';
        subMenuState2.style.display = '';
        subMenuState1.style.display = '';

        arrowState3.style.transform == "rotate(0deg)" || arrowState3.style.transform == "" ? arrowState3.style.transform = "rotate(180deg)" : arrowState3.style.transform = "rotate(0deg)";
        arrowStateDark3.style.transform == "rotate(0deg)" || arrowStateDark3.style.transform == "" ? arrowStateDark3.style.transform = "rotate(180deg)" : arrowStateDark3.style.transform = "rotate(0deg)";
        arrowStateDark2.style.transform = "rotate(0deg)";
        arrowStateDark1.style.transform = "rotate(0deg)";
        arrowState2.style.transform = "rotate(0deg)";
        arrowState1.style.transform = "rotate(0deg)";
    }
}