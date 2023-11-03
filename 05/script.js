var colorBox = document.querySelector('#colorBox')
var unlock = document.querySelector('#unlock')
var lockSymbol = document.querySelector('.lock')
var toogleBtn = document.querySelector('#toogleBox')
isClicked = true;

toogleBtn.addEventListener('click', () => {
    if(isClicked){
        colorBox.style.left = '57.5%'
        toogleBtn.style.backgroundColor = '#7D29DF'
        lockSymbol.style.display = 'block'
        unlock.style.display = 'none'

        isClicked = false;
    }
    else{
        colorBox.style.left = '9.5%'
        toogleBtn.style.backgroundColor = 'rgba(214, 214, 214, 0.998)'
        lockSymbol.style.display = 'none'
        unlock.style.display = 'block'

        isClicked = true;
    }
});
