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
    this.checkForCoverOverrides(extraGameInfo)
  }

  checkForCoverOverrides(extraGameInfo: object) {
    if ('cover_override' in extraGameInfo)
      this.cover_url = extraGameInfo.cover_override as string
    else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    {
      if ('static_cover_url' in extraGameInfo)
        this.cover_url = extraGameInfo.static_cover_url as string
      else if (this.cover_url.endsWith('.gif'))
        this.cover_url = '/no_static_alternative.png'
    }
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