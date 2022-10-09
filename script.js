const leftIcon = document.querySelector('.left_icon'),
    rightIcon = document.querySelector('.right_icon'),
    imgNext = document.querySelectorAll('.img_next img'),
    leftIcon1 = document.querySelector('.left_icon1'),
    leftIcon2 = document.querySelector('.left_icon2'),
    leftIcon3 = document.querySelector('.left_icon3'),
    leftIcon4 = document.querySelector('.left_icon4'),
    rightIcon1 = document.querySelector('.right_icon1'),
    rightIcon2 = document.querySelector('.right_icon2'),
    rightIcon3 = document.querySelector('.right_icon3'),
    rightIcon4 = document.querySelector('.right_icon4'),
    leftIcon5 = document.querySelector('.left_icon5'),
    rightIcon5 = document.querySelector('.right_icon5'),
    imgNext1 = document.querySelectorAll('.img_next1 img'),
    imgNext2 = document.querySelectorAll('.img_next2 img'),
    imgNext3 = document.querySelectorAll('.img_next3 img'),
    imgNext4 = document.querySelectorAll('.img_next4 img'),
    imgNext5 = document.querySelectorAll('.img_next5 img'),
    leftIcon6 = document.querySelector('.left_icon6'),
    rightIcon6 = document.querySelector('.right_icon6'),
    imgNext6 = document.querySelectorAll('.img_next6 img'),
    leftIcon7 = document.querySelector('.left_icon7'),
    rightIcon7 = document.querySelector('.right_icon7'),
    imgNext7 = document.querySelectorAll('.img_next7 img'),
    svgMore = document.querySelector('.svg_more'),
    card1 = document.querySelectorAll('.card1'),
    selector = document.querySelectorAll('.selector'),
    card=document.querySelectorAll('.card'),
    selectors=document.querySelector('.selection_buttons'),
    paragraph=document.querySelector('.section_icon_more p')

paragraph.innerHTML='View More'

let count = 0,
    count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    count5 = 0,
    count6 = 0,
    count7 = 0

function slider() {
    for (let i = 0; i < imgNext.length; i++) {
        imgNext[i].style.transform = `translateX(${-577 * count}px)`
    }
}

leftIcon.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider()
    } else {
        count = 0
        slider()
    }
})


rightIcon.addEventListener('click', () => {
    if (count < imgNext.length - 1) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
})

function slider1() {
    for (let i = 0; i < imgNext1.length; i++) {
        imgNext1[i].style.transform = `translateX(${-577 * count1}px)`
    }
}

leftIcon1.addEventListener('click', () => {
    if (count1 > 0) {
        count1--
        slider1()
    } else {
        count1 = 0
        slider1()
    }
})

rightIcon1.addEventListener('click', () => {
    if (count1 < imgNext1.length - 1) {
        count1++
        slider1()
    } else {
        count1 = 0
        slider1()
    }
})

function slider2() {
    for (let i = 0; i < imgNext2.length; i++) {
        imgNext2[i].style.transform = `translateX(${-577 * count2}px)`
    }
}

leftIcon2.addEventListener('click', () => {
    if (count2 > 0) {
        count2--
        slider2()
    } else {
        count2 = 0
        slider2()
    }
})

rightIcon2.addEventListener('click', () => {
    if (count2 < imgNext2.length - 1) {
        count2++
        slider2()
    } else {
        count2 = 0
        slider2()
    }
})

function slider3() {
    for (let i = 0; i < imgNext3.length; i++) {
        imgNext3[i].style.transform = `translateX(${-577 * count3}px)`
    }
}

leftIcon3.addEventListener('click', () => {
    if (count3 > 0) {
        count3--
        slider3()
    } else {
        count3 = 0
        slider3()
    }
})

rightIcon3.addEventListener('click', () => {
    if (count3 < imgNext3.length - 1) {
        count3++
        slider3()
    } else {
        count3 = 0
        slider3()
    }
})

function slider4() {
    for (let i = 0; i < imgNext4.length; i++) {
        imgNext4[i].style.transform = `translateX(${-577 * count4}px)`
    }
}

leftIcon4.addEventListener('click', () => {
    if (count4 > 0) {
        count4--
        slider4()
    } else {
        count4 = 0
        slider4()
    }
})

rightIcon4.addEventListener('click', () => {
    if (count4 < imgNext4.length - 1) {
        count4++
        slider4()
    } else {
        count4 = 0
        slider4()
    }
})

function slider5() {
    for (let i = 0; i < imgNext5.length; i++) {
        imgNext5[i].style.transform = `translateX(${-577 * count5}px)`
    }
}

leftIcon5.addEventListener('click', () => {
    if (count5 > 0) {
        count5--
        slider5()
    } else {
        count5 = 0
        slider5()
    }
})

rightIcon5.addEventListener('click', () => {
    if (count5 < imgNext5.length - 1) {
        count5++
        slider5()
    } else {
        count5 = 0
        slider5()
    }
})

function slider6() {
    for (let i = 0; i < imgNext6.length; i++) {
        imgNext6[i].style.transform = `translateX(${-577 * count6}px)`
    }
}

leftIcon6.addEventListener('click', () => {
    if (count6 > 0) {
        count6--
        slider6()
    } else {
        count6 = 0
        slider6()
    }
})


rightIcon6.addEventListener('click', () => {
    if (count6 < imgNext6.length - 1) {
        count6++
        slider6()
    } else {
        count6 = 0
        slider6()
    }
})

function slider7() {
    for (let i = 0; i < imgNext7.length; i++) {
        imgNext7[i].style.transform = `translateX(${-577 * count7}px)`
    }
}

leftIcon7.addEventListener('click', () => {
    if (count7 > 0) {
        count7--
        slider7()
    } else {
        count7 = 0
        slider7()
    }
})


rightIcon7.addEventListener('click', () => {
    if (count7 < imgNext7.length - 1) {
        count7++
        slider7()
    } else {
        count7 = 0
        slider7()
    }
})

let a=0



for(let j=0;j<selector.length;j++){
    selector[j].addEventListener('click',()=>{
        selectors.querySelector('.active').classList.remove('active')
        selector[j].classList.add('active')
        classChecker=selector[j].getAttribute('data-name')
        for(let i=0;i<card.length;i++){
            cardChecker=card[i].getAttribute('data-name')
            if(classChecker===cardChecker || classChecker==='all'){
                card[i].classList.add('show')
                card[i].classList.remove('hide')
                a=a+1
            }else{
                card[i].classList.remove('show')
                card[i].classList.add('hide')
                a=0
            }
        }
    })
}

svgMore.addEventListener('click', () => {
    paragraph.innerHTML=''
    card1.forEach(hey => {
        hey.classList.remove('show')
        hey.classList.toggle('display_none')
    })
    
    if(a===0){
        svgMore.style.transform='rotate(180deg)'
        paragraph.innerHTML='View Less'
        a=a+1
    }else{
        svgMore.style.transform='none'
        paragraph.innerHTML='View More'
        a=a-1
    }
    
})

//******************************************************************************************************************/
//******************************************************************************************************************/
//******************************************************************************************************************/
//******************************************************************************************************************/
//******************************************************************************************************************/
//******************************************************************************************************************/

const   bigLeft=document.querySelector('.big_left'),
        bigRight=document.querySelector('.big_right'),
        sliderCard=document.querySelectorAll('.slider_card img')
        
        
let bigCount=0


function bigSlider() {
    for (let i = 0; i < sliderCard.length; i++) {
        sliderCard[i].style.transform = `translateX(${-1080 * bigCount}px)`
    }
}

bigLeft.addEventListener('click', () => {
    if (bigCount > 0) {
        bigCount--
        bigSlider()
    } else {
        bigCount = 0
        bigSlider()
    }
})


bigRight.addEventListener('click', () => {
    if (bigCount < sliderCard.length -1) {
        bigCount++
        bigSlider()
    } else {
        bigCount = 0
        bigSlider()
    }
})