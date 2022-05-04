import React from "react";
import styled from "styled-components";

const DispayInfo = ({ serverData }) => {
	if (serverData) {
		const {
			ip,
			isp,
			location: { city, timezone },
		} = serverData;
		return (
			<Info>
				<div>
					<h3>IP ADDRESS</h3>
					<p>{ip}</p>
				</div>

				<div>
					<h3>LOCATION</h3>
					<p>{city}</p>
				</div>
				<div>
					<h3>TIMEZONE</h3>
					<p>{timezone}</p>
				</div>
				<div>
					<h3>ISP</h3>
					<p>{isp}</p>
				</div>
			</Info>
		);
	}
};

export default DispayInfo;

const Info = styled.div`
	display: grid;
	padding: 16px;
	border-radius: 16px;
	background-color: white;
	margin: 0 auto;
	transform: translateY(10%);
	width: max-content;
	gap: 8px;
	z-index: 403;

	h3 {
		font-size: 0.7rem;
		color: hsl(0, 0%, 59%);
		font-weight: 500;
	}
	p {
		font-weight: 700;
	}
	@media (min-width: 700px) {
		padding: 16px;
		gap: 16px;
		text-align: left;
		grid-template-columns: repeat(4, 1fr);
		transform: translateY(15%);
		max-width: 600px;
	}

	@media (min-width: 1000px) {
		transform: translateY(60%);
	}
`;
