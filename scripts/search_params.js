const searchInput = document.getElementById('search')
const selects = document.querySelectorAll('select')

searchInput.form.onsubmit = event => event.preventDefault()
searchInput.onsubmit = event => event.preventDefault()


function SetQueryString(newQueryString)
{
    var newUrl = window.location.origin
    newUrl += window.location.pathname
    newUrl += '?' + newQueryString
    if (history.replaceState)
    {
        history.replaceState({path:newUrl}, '', newUrl)
    }
    else window.location = newUrl
}

function SetSearchParam(name, value)
{
    const currentParams = new URLSearchParams(window.location.search)
    if (value) currentParams.set(name, value)
    else currentParams.delete(name)
    SetQueryString(currentParams.toString())
        window.dispatchEvent(new Event('popstate'))
}

function SetSearchParamFromValueEvent(event)
{
    SetSearchParam(event.target.name, event.target.value)
}

function SetSearchParamFromMultiselectEvent(event)
{
    var selectedValues = []

    for (var option of event.target.selectedOptions)
    {
        if (option.value) selectedValues.push(option.value)
    }
    if (selectedValues.length === 0) selectedValues = null
    SetSearchParam(event.target.name, selectedValues)
}


const initialParams = new URLSearchParams(window.location.search)
function AssignSearchParamValue(element)
{
    const initialValue = initialParams.get(element.name)
    if (initialValue) element.value = initialValue
}

function AssignSearchParamSelected(element)
{
    const initialSelected = initialParams.getAll(element.name).reduce(
        (result, value) => {
            result.push(...value.split(','))
            return result
        }
        , []
    )
    for (var option of element.options)
    {
        const isSelected = initialSelected.includes(option.value)
        if (isSelected) option.setAttribute('selected', true)
    }
}

AssignSearchParamValue(searchInput)
searchInput.oninput = SetSearchParamFromValueEvent

selects.forEach(
    select => {
        if (select.multiple)
        {
            AssignSearchParamSelected(select)
            select.onchange = SetSearchParamFromMultiselectEvent
        }
        else {
            AssignSearchParamValue(select)
            select.onchange = SetSearchParamFromValueEvent
        }
    }
)