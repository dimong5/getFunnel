import cn from 'classnames'
import Image from 'next/image'
import styles from './PlayerTopBar.module.scss'

interface PlayerTopBarProps {
	containerClassName?: string
}

export function PlayerTopBar(props: PlayerTopBarProps) {
	const { containerClassName } = props

	const containerClasses = cn(styles.container, containerClassName)

	return (
		<div className={containerClasses}>
			<Image src="/icons/back.svg" width={21} height={21} alt={'Back'} />
			<Image src="/icons/settings.svg" width={21} height={21} alt={'Settings'} />
		</div>
	)
}
