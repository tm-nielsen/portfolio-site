import gameData from '/assets/game_data.json' with { type: "json" }

const gameTileElements = [...document.getElementsByClassName('game-tile')]
const gameList = document.getElementsByClassName('game-list')[0]

const tiles = gameTileElements.map(
    tile => {
        const title = tile.getElementsByTagName('h2')[0].textContent
        const data = gameData.find(entry => entry.title === title)
        const element = tile.parentElement
        return {title, data, element}
    }
)


function bindSortMethod(sortKey)
{
    if (!sortKey) return (a, b) => -1
    return (a, b) => {
        let valueA = a.data[sortKey]
        let valueB = b.data[sortKey]
        if (Number.isInteger(valueA)) return valueB - valueA
        if (Date.parse(valueA)) return valueB.localeCompare(valueB)
        else return valueA.localeCompare(valueB)
    }
}

function bindTitleFilterMethod(searchValue)
{
    if (!searchValue) return (tile) => true
    searchValue = searchValue.toLowerCase()
    return ({title}) => title.toLowerCase().startsWith(searchValue)
}

function bindPlatformFilterMethod(value)
{
    if (!value) return (tile) => true
    return ({data}) => data[`p_${value}`]
}

function bindPropertyFilterMethod(key, values)
{
    return ({element}) => {
        const tileValues = element.getAttribute(`data-${key}`)
        return values.every(value => tileValues.includes(value))
    }
}


function sieveGameTiles()
{
    const params = new URLSearchParams(window.location.search)
    const searchValue = params.get('q')
    const selectedPlatform = params.get('platform')
    const selectedSortMethod = params.get('sort')

    const bindSearchParampropertyFilterMethod
    = (key) => bindPropertyFilterMethod(
        key, params.getAll(key).reduce(
            (result, value) => {
                result.push(...value.split(','))
                return result
            }
            , []
        )
    )

    gameList.replaceChildren(
        ...tiles.filter(
            bindTitleFilterMethod(searchValue)
        ).filter(
            bindPlatformFilterMethod(selectedPlatform)
        ).filter(
            bindSearchParampropertyFilterMethod('tags')
        ).filter(
            bindSearchParampropertyFilterMethod('tools')
        ).filter(
            bindSearchParampropertyFilterMethod('roles')
        ).sort(
            bindSortMethod(selectedSortMethod)
        )
        .map(({element}) => element)
    )
}

window.addEventListener('popstate', sieveGameTiles)
sieveGameTiles()