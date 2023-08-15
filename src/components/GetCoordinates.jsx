import { useState } from "react";
import { MdApps } from "react-icons/md";
import gateremark from "../assets/gateremark.jpg";

const GetCoordinates = ({ onLocationSubmit }) => {
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
		onLocationSubmit(geolocation);
	};

	return (
		<div className=" flex justify-between px-[2px] md:px-3 md:pr-6 items-center">
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
					step="any"
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
					step="any"
					required
					placeholder="Longitude"
					className="p-1 border-[#000] border-[1px] rounded-xl w-[100px]"
				/>
				<button type="submit" className="p-1 border-[#000] border-2 rounded-xl">
					{" "}
					Submit
				</button>
			</form>
			<div className="flex gap-2 md:gap-5">
				<MdApps
					title="Google Apps"
					className=" text-[#535353] text-3xl cursor-pointer"
				/>
				<a
					href="https://github.com/gateremark"
					target="_blank"
					rel="noreferrer"
					title="gateremark"
				>
					<img className="rounded-full w-8" src={gateremark} alt="" />
				</a>
			</div>
		</div>
	);
};

export default GetCoordinates;
