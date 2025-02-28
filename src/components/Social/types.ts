export interface SocialProps {
  position: Position
  isBackground: IsBackground
  isVisible: IsVisible
  className?: ClassName
}

export type Position = 'horizontal' | 'vertical'
export type IsBackground = boolean
export type IsVisible = boolean
export type ClassName = string
