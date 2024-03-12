import gentsBanner from "/public/GentsBanner.gif";
const Banner = () => {
	return (
		// banner section
		<div>
			{/* banner box */}
			<div className="">
				<img src={gentsBanner} alt="" className="w-full " />
			</div>
		</div>
	);
};

export default Banner;
