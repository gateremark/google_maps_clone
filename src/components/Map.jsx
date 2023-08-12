import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { RxHamburgerMenu } from "react-icons/rx";

const Map = () => {
	const center = useMemo(
		() => ({ lat: -0.3921935964842486, lng: 36.95869511962907 }),
		[],
	);
	const [selected, setSelected] = useState(center);

	return (
		<>
			{" "}
			<div className=" flex absolute items-center top-[10px] left-[50%] translate-x-[-50%] z-10">
				<div className=" text-xl bg-white p-[10px] shadow-md cursor-pointer" title="Menu">
					{" "}
					<RxHamburgerMenu />{" "}
				</div>
				<div className="w-[300px] shadow-md cursor-text">
					<PlacesAutocomplete setSelected={setSelected} />
				</div>
			</div>
			<GoogleMap
				zoom={12}
				center={selected}
				mapContainerClassName="w-[100%] h-[100vh]"
			>
				{selected && <Marker position={selected} />}
			</GoogleMap>
		</>
	);
};

export default Map;
