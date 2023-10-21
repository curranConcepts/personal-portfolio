import React from "react";

const Social = () => {
	return (
		<div className="home__social">
			<a
				href="https://www.linkedin.com/in/codingcurran"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-linkedin"></i>
			</a>

			<a
				href="https://github.com/curranConcepts"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-github-alt"></i>
			</a>

			<a
				href="https://twitter.com/codingcurran"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-twitter"></i>
			</a>

			<a
				href="mailto:austin.curran@proton.me"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-envelope"></i>
			</a>
		</div>
	);
};

export default Social;
