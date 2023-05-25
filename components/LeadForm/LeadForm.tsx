import cn from 'classnames'

import styles from './LeadForm.module.scss'

interface LeadFormProps {
  containerClassName?: string
}

export function LeadForm(props: LeadFormProps) {
  const { containerClassName } = props

  const containerClasses = cn(styles.container, containerClassName)

	return (
		<div className={containerClasses}>
			LeadForm
		</div>
	)
}
