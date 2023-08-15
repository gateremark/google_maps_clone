import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { RiLayoutLeftLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import classNames from "classnames";
import {
	gateremaps,
	contrbl,
	location,
	timeline,
	data,
	recents,
	print,
	share,
	lang,
} from "../assets/Images";

const Menu = ({ openMenu, setOpenMenu }) => {
	const [isSelected, setIsSelected] = useState(false);

	const menuItemsOne = [
		{
			id: 1,
			icon: "contr",
			name: "Saved",
		},
		{
			id: 2,
			icon: recents,
			name: "Recents",
		},
		{
			id: 3,
			icon: contrbl,
			name: "Your contributions",
		},
		{
			id: 4,
			icon: location,
			name: "Location sharing",
		},
		{
			id: 5,
			icon: timeline,
			name: "Your timeline",
		},
		{
			id: 6,
			icon: data,
			name: "Your data in Maps",
		},
	];
	const menuItemsTwo = [
		{
			id: 1,
			icon: share,
			name: "Share or embed map",
		},
		{
			id: 2,
			icon: print,
			name: "Print",
		},
		{
			id: 3,
			icon: null,
			name: "Add a missing place",
		},
		{
			id: 4,
			icon: null,
			name: "Add your business",
		},
		{
			id: 5,
			icon: null,
			name: "Edit the map",
		},
	];
	const menuItemsThree = [
		{
			id: 1,
			icon: null,
			name: "Tips and tricks",
		},
		{
			id: 2,
			icon: null,
			name: "Get help",
		},
		{
			id: 3,
			icon: null,
			name: "Consumer information",
		},
	];
	const menuItemsFour = [
		{
			id: 1,
			icon: lang,
			name: "Language",
		},
		{
			id: 2,
			icon: null,
			name: "Search settings",
		},
		{
			id: 3,
			icon: null,
			name: "Maps activity",
		},
	];

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<div
			className={classNames(
				"px-5 flex flex-row absolute top-0 z-50 bg-[#fff] md:w-[23.5%] text-[#202124] text-xs h-[100%] overflow-y-scroll overflow-x-hidden transition-transform duration-300 transform",
				{ "translate-x-0": openMenu, "-translate-x-full": !openMenu },
			)}
		>
			<div className="w-[100%] ">
				<div className="flex pt-3 w-[100%] justify-between items-center">
					<a href="" className="cursor-pointer">
						<img
							className=" w-auto h-4 md:h-6"
							src={gateremaps}
							alt="gateremaps"
						/>
					</a>
					<IoMdClose
						onClick={handleCloseMenu}
						className="text-[#616161] text-2xl cursor-pointer"
					/>
				</div>
				<div className=" flex justify-between items-center my-3">
					<div className="flex justify-between gap-6 items-center cursor-pointer">
						<RiLayoutLeftLine className=" text-[#616161] text-2xl" />
						<p className="text-[#0f0f0f]">Show side bar</p>
					</div>

					{/* <div
						onClick={() => setIsSelected((isSelected) => !isSelected)}
						className={classNames(
							"flex w-[37px] h-[14px] bg-[#BDC1C6] rounded-full relative items-center cursor-pointer",
							{
								"bg-[#F2F7FE] justify-end": isSelected,
							},
						)}
					> */}
					<div
						onClick={() => setIsSelected((isSelected) => !isSelected)}
						className={
							!isSelected
								? " flex w-[37px] h-[14px] bg-[#BDC1C6] rounded-full relative items-center cursor-pointer shadow shadow-[#979797]"
								: "flex w-[37px] h-[14px] rounded-full relative items-center cursor-pointer bg-[#F2F7FE] justify-end"
						}
					>
						<span
							className={
								!isSelected
									? "w-5 h-5 absolute bg-[#ffffff] rounded-full shadow shadow-[#898a8d] border border-[#f7f7f7]"
									: "w-5 h-5 absolute bg-[#1A73E8] rounded-full shadow shadow-[#898a8d] "
							}
						/>
					</div>
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsOne.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#616161] hover:text-[#1a73e8] my-3 cursor-pointer grayscale hover:grayscale-0"
							>
								{/* <FaRegBookmark className="text-[#70757a] text-xl" /> */}
								{item.id === 1 && <FaRegBookmark className="text-[23px]" />}
								{item.id === 2 && <LuHistory className="text-[23px]" />}
								{item.id !== 1 && item.id !== 2 && (
									<img src={item.icon} className=" w-6" alt="icon" />
								)}

								<p className="text-xs">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsTwo.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#494949] hover:text-[#1a73e8] my-3 cursor-pointer grayscale hover:grayscale-0"
							>
								{/* <FaRegBookmark className="text-[#70757a] text-xl" /> */}
								{item.icon !== null && (
									<img src={item.icon} className="w-6" alt="icon" />
								)}
								<p className="text-xs my-[1px]">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsThree.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#494949] hover:text-[#1a73e8] my-3 cursor-pointer"
							>
								<p className="text-xs my-[1px]">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsFour.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#494949] hover:text-[#1a73e8] my-3 cursor-pointer grayscale hover:grayscale-0"
							>
								<p className="text-xs my-[1px] flex items-center gap-1">
									{item.name} {item.icon !== null && <img src={lang} alt="" />}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Menu;
