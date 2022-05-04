import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Map from "./Map";

import { ValidateIPaddress, validateDomain } from "./utils/inputValidate";

function App() {
	const [serverData, setServerData] = useState();
	const [inputValue, setInputVaue] = useState("");
	const [location, setLocation] = useState(null);
	const [invalidInput, setInvalidInput] = useState(false);
	const API_KEY = process.env.REACT_APP_IP_GEOLOCATION;

	useEffect(() => {
		//initial fetch
		request(null);
	}, []);

	useEffect(() => {
		if (serverData) {
			const {
				location: { lat, lng },
			} = serverData;
			setLocation([lat.toFixed(4), lng.toFixed(4)]);
		}
	}, [serverData]);
	function searchHandler(e) {
		setInputVaue(e.target.value);
	}

	function request(parameter) {
		if (parameter) {
			fetch(
				`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${parameter.name}=${parameter.value}`
			)
				.then((res) => res.json())
				.then((res) => setServerData(res));
		} else {
			fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`)
				.then((res) => res.json())
				.then((res) => setServerData(res));
		}
	}
	function submitHandler(e) {
		e.preventDefault();
		// console.log(inputValue);
		if (ValidateIPaddress(inputValue)) {
			// console.log("ip-address");
			request({ name: "ipAddress", value: inputValue });
		} else if (validateDomain(inputValue)) {
			// console.log("domain");
			request({ name: "domain", value: inputValue });
		} else {
			setInvalidInput(true);
			setTimeout(() => {
				setInvalidInput(false);
			}, 2000);
		}
		setInputVaue("");
	}

	return (
		<StyledApp>
			<Header
				inputValue={inputValue}
				searchHandler={searchHandler}
				submitHandler={submitHandler}
				serverData={serverData}
				invalidInput={invalidInput}
			/>
			<Map location={location} />
		</StyledApp>
	);
}

export default App;

const StyledApp = styled.div`
	height: 100%;
`;
