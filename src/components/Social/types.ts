export interface SocialProps {
  position: Position
  isBackground: IsBackground
  isVisible: IsVisible
}

export type Position = 'horizontal' | 'vertical'
export type IsBackground = boolean
export type IsVisible = boolean
