const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const textInputs = document.querySelectorAll('input[type="text"]')

checkboxes.forEach(checkbox => checkbox.removeAttribute('disabled'))


const cookieStoreSupported = typeof(cookieStore)!="undefined"

async function getCookie(label) {
    if (cookieStoreSupported) {
        return cookieStore.get(label)
    }
    else {
        const cookieRegex = RegExp(`${label}=([^;])+`)
        const regexResult = document.cookie.match(cookieRegex)
        return regexResult[1]
    }
}

function SetCookie(label, value) {
    if (cookieStoreSupported) {
        cookieStore.set(label, value)
    }
    else {
        document.cookie = `${label}=${value}`
    }
}


function bindCookieMethods(inputElement, setMethod, getMethod) {
    const labelText = inputElement.parentElement.textContent
    const cookieLabel = labelText.split('\n')[0].trim()
    cookieStore.get(cookieLabel).then(
        cookie => {
            if(cookie) setMethod(cookie.value) 
        }
    )
    inputElement.onchange = event => {
        cookieStore.set(cookieLabel, getMethod(event.target))
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