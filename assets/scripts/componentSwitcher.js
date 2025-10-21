let mBtns = document.querySelectorAll('.mBtn')

mBtns.forEach(e => {
    e.addEventListener('click', componentSwitch)
})

function componentSwitch(event) {
    console.log(event.currentTarget)
}