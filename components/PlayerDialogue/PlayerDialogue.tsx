import { Divider } from '../Divider'
import styles from './PlayerDialogue.module.scss'
import cn from 'classnames'

interface PlayerDialogueProps {
  title: string
  children: React.ReactNode
  containerClass?: string
  onClick?: () => void
}

export function PlayerDialogue(props: PlayerDialogueProps) {
  const { title, children, containerClass, onClick } = props

  const containerClasses = cn(styles.container, containerClass)

  return (
    <div className={containerClasses}>
      <div onClick={onClick}><h4>{title}</h4>
        <Divider size={32} /></div>
      {children}
      <span className={styles.copyright}>Created with ♥ at FaceLink.cc</span>
    </div>
  )
}
