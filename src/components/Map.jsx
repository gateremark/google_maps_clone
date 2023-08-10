import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
	const center = useMemo(
		() => ({ lat: -0.3921935964842486, lng: 36.95869511962907 }),
		[],
	);
	const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: apiKey,
	});

	if (!isLoaded) return <div>Loading...</div>;

	return (
		<GoogleMap
			zoom={10}
			center={center}
			mapContainerClassName=" w-[100%] h-[100vh]"
		>
			<Marker position={{ lat: -0.3921935964842486, lng: 36.95869511962907 }} />
		</GoogleMap>
	);
};

export default Map;
