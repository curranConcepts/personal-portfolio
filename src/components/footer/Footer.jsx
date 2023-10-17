// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title"></h1>

				<div className="footer__social">
					<a
						href="https://www.github.com/curranConcepts/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-github"></i>
					</a>

					<a
						href="https://www.linkedin.com/in/codingcurran/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-linkedin"></i>
					</a>

					<a
						href="https://twitter.com/codingCurran"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-twitter"></i>
					</a>
				</div>

				<span className="footer__copy">&#169;2022 Curran Concepts</span>
			</div>
		</footer>
	);
};

export default Footer;
