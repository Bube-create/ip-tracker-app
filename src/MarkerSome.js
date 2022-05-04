import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

function MarkerSome() {
	function LocationMarker() {
		const [position, setPosition] = useState(null);
		const [bbox, setBbox] = useState([]);

		const map = useMap();

		useEffect(() => {
			map.locate().on("locationfound", function (e) {
				setPosition(e.latlng);
				map.flyTo(e.latlng, map.getZoom());

				setBbox(e.bounds.toBBoxString().split(","));
			});
		}, [map]);
		console.log(position);
		return position === null ? null : (
			<Marker position={position}>
				<Popup>
					You are here. <br />
					Map bbox: <br />
					<b>Southwest lng</b>: {bbox[0]} <br />
					<b>Southwest lat</b>: {bbox[1]} <br />
					<b>Northeast lng</b>: {bbox[2]} <br />
					<b>Northeast lat</b>: {bbox[3]}
				</Popup>
			</Marker>
		);
	}
	return <LocationMarker />;
}

export default MarkerSome;
