import styles from './Panel.module.scss'
import cn from 'classnames'

interface PanelProps {
  children: React.ReactNode
  containerClassName?: string
}

export function Panel(props: PanelProps) {
  const { children, containerClassName } = props
  const containerClass = cn(styles.container, containerClassName)

  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}
