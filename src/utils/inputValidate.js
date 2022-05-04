export function ValidateIPaddress(ipaddress) {
	if (
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
			ipaddress
		)
	) {
		return true;
	}
	// alert("You have entered an invalid IP address!");
	return false;
}

// https://stackoverflow.com/questions/29529629/validate-a-domain-name-with-javascript-in-real-time
export function validateDomain(the_domain) {
	// strip off "http://" and/or "www."
	the_domain = the_domain.replace("http://", "");
	the_domain = the_domain.replace("www.", "");

	var reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
	return reg.test(the_domain);
} // end validateDomain()

// const serverData = {
// 	ip: "105.112.36.131",
// 	location: {
// 		country: "NG",
// 		region: "Lagos State",
// 		city: "Lagos",
// 		lat: 6.45407,
// 		lng: 3.39467,
// 		postalCode: "",
// 		timezone: "+01:00",
// 		geonameId: 2332459,
// 	},
// 	as: {
// 		asn: 36873,
// 		name: "VNL1-AS",
// 		route: "105.112.36.0/24",
// 		domain: "ng.airtel.com",
// 		type: "NSP",
// 	},
// 	isp: "Airtel Networks Limited",
// };

// const {
// 	ip,
// 	isp,
// 	location: { city, timezone },
// } = serverData;

// console.log(ip, isp, city, timezone);
