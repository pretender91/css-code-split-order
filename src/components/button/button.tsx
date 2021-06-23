import React from "react"
import classnames from 'classnames'

import styles from './button.module.css'

type ButtonProps = {
	children: string
	className?: string
	onClick?: () => void
}

function Button({ children, className, onClick }: ButtonProps) {
	return <button className={classnames(styles.button, className)} onClick={onClick}>{children}</button>
}

export default Button