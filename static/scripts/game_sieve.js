const gameTileElements = [...document.getElementsByClassName('game-tile')]
const gameList = document.getElementsByClassName('game-list')[0]

const tiles = gameTileElements.map(
    tile => {
        const title = tile.getElementsByTagName('h2')[0].textContent
        const element = tile.parentElement
        return {title, element, data: null}
    }
)


function bindSortMethod(sortKey)
{
    if (!sortKey) return (_a, _b) => -1
    return (a, b) => {
        if (!a.data || !b.data) return -1
        let valueA = a.data[sortKey]
        let valueB = b.data[sortKey]
        if (Number.isInteger(valueA)) return valueB - valueA
        if (Date.parse(valueA)) return valueB.localeCompare(valueB)
        else return valueA.localeCompare(valueB)
    }
}

function bindTitleFilterMethod(searchValue)
{
    if (!searchValue) return (_) => true
    searchValue = searchValue.toLowerCase()
    return ({title}) => {
        const lowTitle = title.toLowerCase();
        return lowTitle.startsWith(searchValue)
        || lowTitle.includes(searchValue)
    }
}

function bindPlatformFilterMethod(value)
{
    if (!value) return (_) => true
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
    const selectedSortMethod = params.get('sort') ?? 'published_at'

    const bindSearchParamPropertyFilterMethod
    = (key) => bindPropertyFilterMethod(
        key, params.getAll(key).reduce(
            (result, value) => {
                result.push(...value.split(','))
                return result
            }
            , []
        )
    )

    const filteredTiles = tiles.filter(
        bindTitleFilterMethod(searchValue)
    ).filter(
        bindPlatformFilterMethod(selectedPlatform)
    ).filter(
        bindSearchParamPropertyFilterMethod('tags')
    ).filter(
        bindSearchParamPropertyFilterMethod('tools')
    ).filter(
        bindSearchParamPropertyFilterMethod('roles')
    ).sort(
        bindSortMethod(selectedSortMethod)
    )
    .map(({element}) => element)

    if (typeof(gameList.replaceChildren)!="undefined") {
        gameList.replaceChildren(...filteredTiles)
    }
    else {
        gameList.innerHTML = ""
        filteredTiles.forEach(gameList.appendChild)
    }
}

window.addEventListener('popstate', sieveGameTiles)
sieveGameTiles()


const result = await fetch('https://games.twig.skin')
const responseData = await result.json()
tiles.forEach(
    tile => {
        const matchingData = responseData.find(
            ({title}) => title === tile.title
        )
        if (matchingData) tile.data = matchingData
    }
)
sieveGameTiles()