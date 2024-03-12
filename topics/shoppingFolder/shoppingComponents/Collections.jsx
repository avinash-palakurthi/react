const Collections = ({ gentsClothes }) => {
	const { title, image1, image2, image3, image4, image5, image6 } =
		gentsClothes;
	return (
		<div className="bg-slate-900 mt-5 ">
			<h2 className="text-4xl">{title}</h2>
			<div className=" flex flex-row flex-wrap gap-12  mx-5 justify-evenly mt-5 ">
				<img
					src={image1}
					alt="img1"
					className="size-60 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer"
				/>
				<img
					src={image2}
					alt="img2"
					className="size-60 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer"
				/>
				<img
					src={image3}
					alt="img3"
					className="size-60 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer"
				/>
				<img
					src={image4}
					alt="img4"
					className="size-60 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer"
				/>
				<img
					src={image5}
					alt="img5"
					className="size-60 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer"
				/>
				<img
					src={image6}
					alt="img6"
					className="size-60 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Collections;
