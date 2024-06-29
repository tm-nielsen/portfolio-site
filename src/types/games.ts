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

export class ExtraGameInfo {
  title: string = ""
  cover_override: string = ""
  static_cover_url: string = ""
  tags: {[key: string]: string[]} = {}
  markdown_body_text: string = "No site description yet."

  constructor(parsedProperties: {[key: string]: string},
      parsedTags: {[key: string]: string[]}, bodyText: string) {
    Object.assign(this, parsedProperties)
    this.tags = parsedTags
    this.markdown_body_text = bodyText;
  }
}

export class SupplementedGameInfo extends GameInfo {
  tags: {[key: string]: string[]} = {}
  markdown_body_text: string = 'No site description yet.'

  constructor(gameInfo: GameInfo, extraGameInfo: ExtraGameInfo) {
    super()
    Object.assign(this, extraGameInfo, gameInfo)
    this.checkForCoverOverrides(extraGameInfo)
  }

  checkForCoverOverrides(extraGameInfo: ExtraGameInfo) {
    if (extraGameInfo.cover_override)
      this.cover_url = extraGameInfo.cover_override
    else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    {
      if (extraGameInfo.static_cover_url)
        this.cover_url = extraGameInfo.static_cover_url
      else if (this.cover_url.endsWith('.gif'))
        this.cover_url = '/no_static_alternative.png'
    }
  }
}

export class FocusedGameTileProps {
  title: string = ''
  shortText: string = ''
  coverUrl: string = ''
  rawBodyText: string = ''
  tools: string[] = []
  roles: string[] = []
  linkProps: GameLinkProps

  constructor(source: SupplementedGameInfo) {
    Object.assign(this, source)
    this.shortText = source.short_text
    this.coverUrl = source.cover_url
    this.rawBodyText = source.markdown_body_text
    
    if ("tools" in source.tags)
      this.tools = source.tags.tools
    if ("roles" in source.tags)
      this.roles = source.tags.roles

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
    if ("tags" in source.tags)
      this.tags = source.tags.tags
  }
}