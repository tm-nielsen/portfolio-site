const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const textInputs = document.querySelectorAll('input[type="text"]')

checkboxes.forEach(checkbox => checkbox.removeAttribute('disabled'))

async function getCookie(label) {
    const escapedLabel = label.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')
    const cookieRegex = RegExp(`${escapedLabel}=([^;]+)`)
    const regexResult = document.cookie.match(cookieRegex)
    return regexResult && regexResult[1]
}

function setCookie(label, value) {
    document.cookie = `${label}=${value}`
}


function bindCookieMethods(inputElement, setMethod, getMethod) {
    const labelText = inputElement.parentElement.textContent
    const cookieLabel = labelText.split('\n')[0].trim()

    getCookie(cookieLabel).then(setMethod)
    inputElement.onchange = event => {
        setCookie(cookieLabel, getMethod(event.target))
    }
}

checkboxes.forEach(
    checkbox => bindCookieMethods(
        checkbox,
        value => checkbox.checked = value === 'true',
        target => target.checked
    )
)

textInputs.forEach(
    input => bindCookieMethods(
        input,
        value => input.value = value,
        target => String(target.value)
    )
)