const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const textInputs = document.querySelectorAll('input[type="text"]')

checkboxes.forEach(checkbox => checkbox.removeAttribute('disabled'))

function bindCookieMethods(inputElement, setMethod, getMethod) {
    const cookieLabel = inputElement.parentElement.textContent.trim()
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