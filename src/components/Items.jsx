import { PiForkKnifeFill } from "react-icons/pi";
import {
	MdPhotoCamera,
	MdHotel,
	MdOutlineMuseum,
	MdOutlineDirectionsSubway,
	MdOutlineLocalPharmacy,
	MdAtm,
} from "react-icons/md";

const Items = () => {
	return (
		<div className=" hidden md:flex text-[#424242] gap-2 absolute z-40 m-auto top-[70px] right-28 text-sm font-medium">
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<PiForkKnifeFill className=" text-lg" />
				Restaurants
			</div>
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<MdHotel className=" text-lg" />
				Hotels
			</div>
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<MdPhotoCamera className=" text-base" />
				Things to do
			</div>
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<MdOutlineMuseum className=" text-lg" />
				Museums
			</div>
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<MdOutlineDirectionsSubway className=" text-lg" />
				Transit
			</div>
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<MdOutlineLocalPharmacy className=" text-lg" />
				Pharmacies
			</div>
			<div className=" flex items-center justify-center gap-1 bg-[#fff] py-[6px] px-2 rounded-full shadow-md cursor-pointer hover:bg-[#f7f7f7] hover:shadow-lg">
				<MdAtm className=" text-lg" />
				ATMs
			</div>
		</div>
	);
};

export default Items;
