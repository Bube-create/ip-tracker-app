import { ReactComponent as Icon } from "./images/icon-arrow.svg";
import styled from "styled-components";

const Search = ({ searchHandler, inputValue, submitHandler, invalidInput }) => {
	return (
		<div>
			<form onSubmit={submitHandler}>
				<StyledSearch>
					<input
						onChange={searchHandler}
						value={inputValue}
						placeholder="Search for any IP address or domain"
						style={
							invalidInput ? { backgroundColor: "#f1a5a4" } : null
						}
					/>

					<button>
						<Icon />
					</button>
				</StyledSearch>
				{invalidInput ? (
					<StyledError>
						Please input a valid domiain or url!!
					</StyledError>
				) : null}
			</form>
		</div>
	);
};

export default Search;

const StyledSearch = styled.div`
	display: flex;
	max-width: 400px;
	margin: 0 auto;
	border-radius: 16px;
	overflow: hidden;
	input {
		width: 100%;
		padding: 8px 16px;
		outline: none;
		border: 0;
	}
	button {
		background-color: hsl(0, 0%, 17%);
		border: 0;
		padding: 8px 16px;
		color: white;
	}
`;

const StyledError = styled.p`
	color: #f1a5a4;
	font-size: 1.3rem;
`;
