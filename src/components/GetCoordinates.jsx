import { useState } from "react";

const GetCoordinates = () => {
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	const onLatitudeChange = (e) => {
		const newLatitude = e.target.value;
		setLatitude(+newLatitude);
	};

	const onLongitudeChange = (e) => {
		const newLongitude = e.target.value;
		setLongitude(+newLongitude);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let geolocation = { lat: latitude, lng: longitude };
		console.log(geolocation);
	};

	return (
		<>
			<form
				className=" flex justify-start items-center p-1 gap-1"
				action=""
				onSubmit={onSubmit}
			>
				<input
					type="number"
					id="latitude"
					value={latitude}
					onChange={onLatitudeChange}
					min="-90"
					max="90"
					required
					placeholder="Latitude"
					className="p-1 border-[#000] border-[1px] rounded-xl w-[100px]"
				/>
				<input
					type="number"
					id="longitude"
					value={longitude}
					onChange={onLongitudeChange}
					min="-180"
					max="180"
					required
					placeholder="Longitude"
					className="p-1 border-[#000] border-[1px] rounded-xl w-[100px]"
				/>
				<button type="submit" className="p-1 border-[#000] border-2 rounded-xl">
					{" "}
					Submit
				</button>
			</form>
		</>
	);
};

export default GetCoordinates;
