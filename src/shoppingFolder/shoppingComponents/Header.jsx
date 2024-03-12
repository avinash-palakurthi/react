import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { GoSignIn } from "react-icons/go";
const Header = () => {
	return (
		// header section
		<div
			className="flex justify-between 
    bg-black p-2 flex-wrap px-5 "
		>
			{/* left */}

			<div className="">
				{/* title */}
				<div>
					<h1 className="text-xl text-amber-200 uppercase">shopping mall</h1>
				</div>
			</div>

			{/* center */}
			<div className=" ">
				<ul className="flex flex-initial w-fit gap-12 text-gray-400">
					<li>Men</li>
					<li>Women</li>
					<li>Kids</li>
					<li>Beauty</li>
				</ul>
			</div>
			{/* search */}
			<div className="flex items-center justify-center bg-white px-2 rounded  gap-2 ">
				<CiSearch size={25} className="text-black items-center " />
				<input
					type="text"
					placeholder="search .  .  .  .  "
					className="placeholder: text-cente border-none outline-none text-black px-10"
				/>
			</div>
			{/* right */}
			<div className="flex justify-between gap-5">
				{/* signin */}
				<div className="flex gap-3 ">
					<GoSignIn size={25} className="text-amber-200" />
					<p className="text-md text-gray-300 bg-transparent hover:bg-slate-600 cursor-pointer px-5  ease-in-out duration-1000 rounded-md capitalize">
						signin/signup
					</p>
				</div>
				{/* cart */}
				<div tooltip="cart">
					<CiShoppingCart
						size={25}
						className="text-amber-200 "
						tooltip="cart"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
