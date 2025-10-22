let mBtns = document.querySelectorAll('[data-component-name]')
let allComponents = document.querySelectorAll('.component')
let mainBody = document.querySelector('.mainBody')

// variables for input data, used in other scripts
let inputTextField
let privateKeyField
let outputField
let msgManBtn
let cryptType
let cryptProcessType
let copyResBtn

mBtns.forEach(e => {
    e.addEventListener('click', componentSwitch)
})

function componentSwitch(event) {
    console.log('componentSwitch()')
    allComponents.forEach(component => {
        if (event.currentTarget.getAttribute('data-component-name') === 'selectionScreen' && component.classList.contains('selectionScreen')) {
            compSwAdditional(component, false, true)
            return
        }
        if (component.classList.contains(event.currentTarget.getAttribute('data-component-name')) && component.classList.contains(event.currentTarget.getAttribute('data-process-type'))) {
            compSwAdditional(component, true, false)
        }
    })
}

function compSwAdditional(component, isMod, isLeaving) {
    mainBody.querySelector('.component').style.cssText = 'transform: translateX(-30px); opacity: 0'
    let componentCache = component.cloneNode(true)
    if (isMod) {
        inputTextField = componentCache.querySelector('[data-public-text]')
        privateKeyField = componentCache.querySelector('[data-private-key]')
        outputField = componentCache.querySelector('.output')
        msgManBtn = componentCache.querySelector('.msgManBtn')
        cryptType = componentCache.classList[1]
        cryptProcessType = componentCache.classList[2]
        copyResBtn = componentCache.querySelector('.outputCopyBtn')
        msgManBtn.addEventListener('click', manData)
        copyResBtn.addEventListener('click', copyResult)
        console.log(inputTextField, privateKeyField, outputField, msgManBtn, cryptType, cryptProcessType, copyResBtn)
    }
    if (isLeaving) {
        inputTextField = undefined
        privateKeyField = undefined
        outputField = undefined
        msgManBtn = undefined
        cryptType = undefined
        copyResBtn = undefined
    }
    componentCache.style.cssText = 'transform: translateX(+30px); opacity: 0'
    setTimeout(() => {
        mainBody.innerHTML = ''
        mainBody.appendChild(componentCache)
        setTimeout(() => {
            componentCache.style.cssText = 'transform: translateX(0px); opacity: 1'
        }, 10)
        restoreListeners()
    }, 260)
}

function restoreListeners() {
    console.log('restoreListeners()')
    // buttons for switching components
    mBtns = document.querySelectorAll('[data-component-name]')
    mBtns.forEach(e => e.addEventListener('click', componentSwitch))
}