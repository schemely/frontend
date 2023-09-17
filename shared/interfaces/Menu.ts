export interface Menu {
  items: MenuItem[]
}

export interface MenuItem {
  text: string
  isChecked?: boolean
  icon?: string
  shortCut?: string
  link?: string
  isExternalLink?: boolean
  action?: () => void
  submenu?: MenuItem[]
}
