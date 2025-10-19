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

window.addEventListener('popstate', (event) => {
    const params = new URLSearchParams(window.location.search)
    const searchValue = params.get('q')?.toLowerCase()

    let displayTiles = tiles

    if (searchValue)
    {
        displayTiles = displayTiles.filter(
            ({title}) => title.toLowerCase().startsWith(searchValue)
        )
    }
    gameList.replaceChildren(...displayTiles.map(({element}) => element))
})