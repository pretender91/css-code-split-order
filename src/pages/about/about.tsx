import React from "react"

import SocialButton from "../../components/social-button/social-button"

function AboutPage() {
	return (
		<div>
			<h1>About page</h1>
			<SocialButton variant="facebook" />
			<SocialButton variant="google" />
		</div>
	)
}

export default AboutPage