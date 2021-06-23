import classNames from "classnames"
import React from "react"
import { useCallback, useMemo } from "react"

import Button from "../button/button"

import styles from './social-button.module.css'

type SocialButtonProps = {
	variant: 'google' | 'facebook'
}

function SocialButton({ variant }: SocialButtonProps) {
	const text = useMemo(() => {
		if (variant === 'google') {
			return 'Google'
		}

		return 'Facebook'

	}, [variant])

	const handleClick = useCallback(() => {
		if (variant === 'google') {
			console.log('go to google');
			return
		}

		console.log('go to facebook');
	}, [variant])

	return (
		<Button onClick={handleClick} className={classNames({
			[styles.google]: variant === 'google',
			[styles.facebook]: variant === 'facebook'
		})}>{text}</Button>
	)
}

export default SocialButton