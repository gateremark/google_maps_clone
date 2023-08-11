import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { PlacesAutocomplete } from "./PlacesAutocomplete";

const Map = () => {
	const center = useMemo(
		() => ({ lat: -0.3921935964842486, lng: 36.95869511962907 }),
		[],
	);
	const [selected, setSelected] = useState(center);

	return (
		<>
			<div className=" absolute top-[10px] left-[50%] translate-x-[-50%] z-10 w-[300px] shadow-md border-[#c5c7ca] border-[1px] opacity-60 hover:opacity-100 cursor-text">
				<PlacesAutocomplete setSelected={setSelected} />
			</div>

			<GoogleMap
				zoom={10}
				center={selected}
				mapContainerClassName=" w-[100%] h-[100vh]"
			>
				{selected && <Marker position={selected} />}
			</GoogleMap>
		</>
	);
};

export default Map;
