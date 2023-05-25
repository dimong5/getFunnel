import cn from 'classnames'
import styles from './MapItems.module.scss'

interface MapProps<T> {
	containerClassName?: string
	items: T[]
	renderItems: (item: T, index: number) => React.ReactNode
	keyExtractor: (item: T) => string
}

export function MapItems<T extends any>(props: MapProps<T>) {
	const { containerClassName, renderItems, items, keyExtractor } = props

	const containerClasses = cn(styles.container, containerClassName)

	return (
		<div className={containerClasses}>
			{items.map((item, i) => (
				<div key={keyExtractor(item)} className={styles.item}>
					{renderItems(item, i)}
				</div>
			))}
		</div>
	)
}
