const   wholeSlider=document.querySelectorAll('.whole_slider'),
        sag=document.querySelector('.sag'),
        ol=document.querySelector('.ol')

let bigCount1=0

function bigSlider2() {
    for (let i = 0; i < wholeSlider.length; i++) {
        wholeSlider[i].style.transform = `translateX(${-500 * bigCount1}px)`
    }
}

sag.addEventListener('click', () => {
    if (bigCount1 > 0) {
        bigCount1--
        bigSlider2()
    } else {
        bigCount1 = 0
        bigSlider2()
    }
})


ol.addEventListener('click', () => {
    if (bigCount1 < wholeSlider.length -1) {
        bigCount1++
        bigSlider2()
    } else {
        bigCount1 = 0
        bigSlider2()
    }
})