import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BiDockLeft } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import classNames from "classnames";
import gateremaps from "../assets/gateremaps2.png";

const Menu = ({ openMenu, setOpenMenu }) => {
	const [isSelected, setIsSelected] = useState(false);

	const menuItemsOne = [
		{
			id: 1,
			icon: "FaRegBookmark",
			name: "Saved",
		},
		{
			id: 2,
			icon: "FaRegBookmark",
			name: "Recents",
		},
		{
			id: 3,
			icon: "FaRegBookmark",
			name: "Your contributions",
		},
		{
			id: 4,
			icon: "FaRegBookmark",
			name: "Location sharing",
		},
		{
			id: 5,
			icon: "FaRegBookmark",
			name: "Your timeline",
		},
		{
			id: 6,
			icon: "FaRegBookmark",
			name: "Your data in Maps",
		},
	];
	const menuItemsTwo = [
		{
			id: 1,
			icon: "FaRegBookmark",
			name: "Share or embed map",
		},
		{
			id: 2,
			icon: "FaRegBookmark",
			name: "Print",
		},
		{
			id: 3,
			icon: "FaRegBookmark",
			name: "Add a missing place",
		},
		{
			id: 4,
			icon: "FaRegBookmark",
			name: "Add your business",
		},
		{
			id: 5,
			icon: "FaRegBookmark",
			name: "Edit the map",
		},
	];
	const menuItemsThree = [
		{
			id: 1,
			icon: "FaRegBookmark",
			name: "Tips and tricks",
		},
		{
			id: 2,
			icon: "FaRegBookmark",
			name: "Get help",
		},
		{
			id: 3,
			icon: "FaRegBookmark",
			name: "Consumer information",
		},
	];
	const menuItemsFour = [
		{
			id: 1,
			icon: "FaRegBookmark",
			name: "Language",
		},
		{
			id: 2,
			icon: "FaRegBookmark",
			name: "Search settings",
		},
		{
			id: 3,
			icon: "FaRegBookmark",
			name: "Maps activity",
		},
	];

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<div
			className={classNames(
				"px-5 flex flex-row absolute top-0 z-50 bg-[#fff] w-[23.5%] text-[#202124] text-xs h-[100%] overflow-y-scroll transition-transform duration-300 transform",
				{ "translate-x-0": openMenu, "-translate-x-full": !openMenu },
			)}
		>
			<div className="w-[100%] ">
				<div className="flex pt-3 w-[100%] justify-between">
					<a href="" className="cursor-pointer">
						<img className=" w-auto h-6" src={gateremaps} alt="gateremaps" />
					</a>
					<IoMdClose
						onClick={handleCloseMenu}
						className="text-[#616161] text-2xl cursor-pointer"
					/>
				</div>
				<div className=" flex justify-between items-center my-3">
					<div className="flex justify-between gap-5 items-center cursor-pointer">
						<BiDockLeft className=" text-[#616161] text-3xl" />
						<p className="">Show side bar</p>
					</div>

					<div
						onClick={() => setIsSelected((isSelected) => !isSelected)}
						className={classNames(
							"flex w-[37px] h-[14px] bg-[#BDC1C6] rounded-full relative items-center cursor-pointer",
							{
								"bg-[#F2F7FE] justify-end": isSelected,
							},
						)}
					>
						<span
							className={classNames(
								"w-5 h-5 absolute bg-[#ffffff] rounded-full shadow shadow-[#898a8d] border border-[#f7f7f7]",
								{
									"bg-[#1A73E8]": isSelected,
									"border-[0]": isSelected,
								},
							)}
						/>
					</div>
				</div>
				<hr className="w-[100%]" />
				<div className="my-3 px-1">
					{menuItemsOne.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center hover:text-[#1a73e8] my-3 cursor-pointer"
							>
								<FaRegBookmark className="text-[#70757a] text-xl" />
								<p className="text-xs">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[100%]" />
				<div className="my-3 px-1">
					{menuItemsTwo.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center hover:text-[#1a73e8] my-3 cursor-pointer"
							>
								<FaRegBookmark className="text-[#70757a] text-xl" />
								<p className="text-xs">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[100%]" />
				<div className="my-3 px-1">
					{menuItemsThree.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center hover:text-[#1a73e8] my-3 cursor-pointer"
							>
								<FaRegBookmark className="text-[#70757a] text-xl" />
								<p className="text-xs">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[100%]" />
				<div className="my-3 px-1">
					{menuItemsFour.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center hover:text-[#1a73e8] my-3 cursor-pointer"
							>
								<FaRegBookmark className="text-[#70757a] text-xl" />
								<p className="text-xs">{item.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Menu;
