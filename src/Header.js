import React from "react";
import styled from "styled-components";
import DispayInfo from "./DisplayInfo";
import Search from "./Search";

const Header = ({
	inputValue,
	searchHandler,
	submitHandler,
	serverData,
	invalidInput,
}) => {
	return (
		<StyledHeader>
			<h1>IP Address Tracker</h1>
			<Search
				inputValue={inputValue}
				searchHandler={searchHandler}
				submitHandler={submitHandler}
				invalidInput={invalidInput}
			/>
			<DispayInfo serverData={serverData} />
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	height: 35vh;
	background: url(${require("./images/pattern-bg.png")});
	background-repeat: no-repeat;
	text-align: center;
	padding: 16px;
	position: relative;
	z-index: 403;

	h1 {
		color: white;
		padding: 16px 0;
	}
`;
