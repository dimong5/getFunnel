import cn from 'classnames'

import styles from './Copyright.module.scss'

interface CopyrightProps {
  containerClassName?: string
}

export function Copyright(props: CopyrightProps) {
  const { containerClassName } = props

  const containerClasses = cn(styles.container, containerClassName)

	return (
		<div className={containerClasses}>
			Copyright
		</div>
	)
}
