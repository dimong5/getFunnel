'use client'

import cn from 'classnames'

import styles from './ChangeTheme.module.scss'

interface ChangeThemeProps {
	containerClassName?: string
}

export function ChangeTheme(props: ChangeThemeProps) {
	const { containerClassName } = props

	const containerClasses = cn(styles.container, containerClassName)

	const changeTheme = () => {

		const root = document.documentElement
		const primaryColor = 'red'
		const secondaryColor = "blue"
		const surfaceColor = "#ffff"
		const onSurfaceColor = "#27272a"
		const surfaceBrightColor = "#f4f4f5"
		const onSurfaceBrightColor = "#505053"

		root.style.setProperty('--primary-color', primaryColor)
		root.style.setProperty('--secondary-color', secondaryColor)
		root.style.setProperty('--surface-color', surfaceColor)
		root.style.setProperty('--on-surface-color', onSurfaceColor)
		root.style.setProperty('--surface-bright-color', surfaceBrightColor)
		root.style.setProperty('--on-surface-bright-color', onSurfaceBrightColor)
	}


	return (
		<div className={containerClasses}>
			<button onClick={changeTheme} className={styles.button}>Change theme</button>
		</div>
	)
}
