import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">Experience</h2>
			<span className="section__subtitle">My personel journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Work
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
                        <div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Web Develper
								</h3>
								<span className="qualification__subtitle">
									Windfall Inc. - Missoula, Mt
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{" "}
									2023 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Software Engineer
								</h3>
								<span className="qualification__subtitle">
									100Devs - Los Angeles, CA
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{" "}
									2022 - 2023
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">
									Freelance Web Developer
								</h3>
								<span className="qualification__subtitle">
									Curran Concepts - Missoula, MT
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{" "}
									2022 - Present
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Independant Contractor
								</h3>
								<span className="qualification__subtitle">
									CC&R - Missoula, MT
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{" "}
									2018 - 2023
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									100Devs Academy
								</h3>
								<span className="qualification__subtitle">
									Los Angeles, CA - Remote
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Jan
									2022 - Oct 2022
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
							</div>

							<div>
								<h3 className="qualification__title">
									Billings Lincoln Center
								</h3>
								<span className="qualification__subtitle">
									Billings, MT
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Aug
									2008 - May 2010
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
