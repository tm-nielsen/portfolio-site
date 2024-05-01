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
  description: string = ''
  learned: string = ''

  constructor(gameInfo: GameInfo, extraGameInfo: object) {
    super()
    Object.assign(this, gameInfo, extraGameInfo)
    if ('cover_override' in extraGameInfo)
      this.cover_url = extraGameInfo.cover_override as string
  }
}