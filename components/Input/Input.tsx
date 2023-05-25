import cn from 'classnames'
import Image from 'next/image'
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	containerClassName?: string
	iconSrc?: string
}

export function Input(props: InputProps) {
	const { containerClassName, iconSrc, ...inputProps } = props

	const containerClasses = cn(styles.container, containerClassName)

	return (
		<div className={containerClasses}>
			{iconSrc && <Image className={styles.icon} src={iconSrc} width={20} height={20} alt="" />}
			<input className={styles.Input} type="text" {...inputProps} />
		</div>
	)
}
