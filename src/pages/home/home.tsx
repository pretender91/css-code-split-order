import React from "react"

import Button from "../../components/button/button"

import styles from './home.module.css'


function HomePage() {
	return <div>
		<h1>Home page</h1>
		<Button className={styles.greenTextButton}>should be green</Button>
	</div>
}

export default HomePage