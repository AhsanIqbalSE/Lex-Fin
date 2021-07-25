function scrollAppear() {
    var box = document.querySelector('.start');
    var boxPosition = box.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.9;
    if (boxPosition < screenPosition) {
        box.classList.add('end')
    }
    // console.log(screenPosition);
    // console.log(boxPosition);
}
window.addEventListener('scroll', scrollAppear);

function scrollAppear1() {
    var box1 = document.querySelector('.start1');
    var boxPosition1 = box1.getBoundingClientRect().top;
    var screenPosition1 = window.innerHeight / 1.9;
    if (boxPosition1 < screenPosition1) {
        box1.classList.add('end1')
    }
    // console.log(screenPosition1);
    // console.log(boxPosition1);
}
window.addEventListener('scroll', scrollAppear1);

function scrollAppear2() {
    var box2 = document.querySelector('.start2');
    var boxPosition2 = box2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.9;
    if (boxPosition2 < screenPosition2) {
        box2.classList.add('end2')
    }
    // console.log(screenPosition2);
    // console.log(boxPosition2);
}
window.addEventListener('scroll', scrollAppear2);