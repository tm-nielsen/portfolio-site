export class GameInfo {
  title: string = ''
  short_text: string = ''
  url: string = ''
  cover_url: string = ''
  created_at: string = ''
  published_at: string = ''
  views_count: number = 0
  downloads_count: number = 0
  p_web: boolean = false
  p_windows: boolean = false
  p_osx: boolean = false
  p_linux: boolean = false
}

export class SupplementedGameInfo extends GameInfo {
  tags: string[] = []
  tools: string[] = []
  roles: string[] = []
  description: string = 'No site description yet.'
  learning: string = 'Yet to be written.'

  constructor(gameInfo: GameInfo, extraGameInfo: object) {
    super()
    Object.assign(this, gameInfo, extraGameInfo)
    if ('cover_override' in extraGameInfo)
      this.cover_url = extraGameInfo.cover_override as string
  }
}

export class GameTileProps {
  title: string = ''
  coverUrl: string = ''
  grabFocus: (gameTitle: string) => void

  constructor(source: SupplementedGameInfo, grabFocus: (gameTitle: string) => void) {
    this.title = source.title
    this.coverUrl = source.cover_url
    this.grabFocus = grabFocus
  }
}

export class FocusedGameTileProps {
  title: string = ''
  shortText: string = ''
  coverUrl: string = ''
  description: string = ''
  learning: string = ''
  tools: string[] = []
  roles: string[] = []
  linkProps: GameLinkProps

  constructor(source: SupplementedGameInfo) {
    Object.assign(this, source)
    this.shortText = source.short_text
    this.coverUrl = source.cover_url
    this.linkProps = new GameLinkProps(source)
  }
}

export class GameLinkProps {
  url: string = ''
  hasWebBuild: boolean = false
  tags: string[] = []

  constructor(source: SupplementedGameInfo) {
    this.url = source.url
    this.hasWebBuild = source.p_web
    this.tags = source.tags
  }
}