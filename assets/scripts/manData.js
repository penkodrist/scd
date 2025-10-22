// inputTextField
// privateKeyField
// msgManBtn
// cryptType
// cryptProcessType
// outputField
// copyResBtn

let result = ''
let inputData
let shift
let alphabet_ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('')

function manData() {
    result = ''
    inputData = undefined
    if (cryptProcessType === 'crypt') {
        switch (cryptType) {
            case 'caesarCipher':
                console.log('caesarCipher - crypt is active')
                shift = undefined
                inputData = inputTextField.value.toLowerCase().split('')
                shift = parseInt(privateKeyField.value)
                for (let i = 0; i < inputData.length; i++) {
                    let cachedLetterIndex
                    let cachedLetter = inputData[i]
                    cachedLetterIndex = alphabet_ru.indexOf(inputData[i])
                    console.log(cachedLetter, cachedLetterIndex, '| iteration:', i)
                    if (cachedLetterIndex === -1) {
                        result += cachedLetter
                    } else {
                        cachedLetterIndex += shift
                        while (cachedLetterIndex < alphabet_ru.length - 1) {
                            cachedLetterIndex += alphabet_ru.length
                        }
                        while (cachedLetterIndex > alphabet_ru.length - 1) {
                            cachedLetterIndex -= alphabet_ru.length
                        }
                        console.log(cachedLetterIndex, '| after shift')
                        result += alphabet_ru[cachedLetterIndex]
                    }
                }
                outputField.innerText += result
                break
            case 'unicodeMod':
                console.log('unicodeMod - crypt is active')
                break
        }
    } else {
        switch (cryptType) {
            case 'caesarCipher':
                console.log('caesarCipher - decrypt is active')
                shift = undefined
                inputData = inputTextField.value.toLowerCase().split('')
                shift = parseInt(privateKeyField.value)
                for (let i = 0; i < inputData.length; i++) {
                    let cachedLetterIndex
                    let cachedLetter = inputData[i]
                    cachedLetterIndex = alphabet_ru.indexOf(inputData[i])
                    console.log(cachedLetter, cachedLetterIndex, '| iteration:', i)
                    if (cachedLetterIndex === -1) {
                        result += cachedLetter
                    } else {
                        cachedLetterIndex -= shift
                        while (cachedLetterIndex > alphabet_ru.length - 1) {
                            cachedLetterIndex -= alphabet_ru.length
                        }
                        while (cachedLetterIndex < 0) {
                            cachedLetterIndex += alphabet_ru.length
                        }
                        console.log(cachedLetterIndex, '| after shift')
                        result += alphabet_ru[cachedLetterIndex]
                    }
                }
                outputField.innerText += result
                break
            case 'unicodeMod':
                console.log('unicodeMod - decrypt is active')
                break
        }
    }
}

function copyResult(event) {
    let thisBtn = event.currentTarget
    window.navigator.clipboard.writeText(result)
    thisBtn.innerText = 'Скопировано'
    setTimeout(() => {
        thisBtn.innerText = 'Копировать результат'
    }, 1000)
}
