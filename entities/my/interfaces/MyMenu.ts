export interface MyMenu {
  items: MyMenuItem[]
}

export interface MyMenuItem {
  text: string
  icon?: string
  link?: string
  isExternalLink?: boolean
  action?: () => void
}
