import Banner from "../shoppingComponents/Banner";
import Collections from "../shoppingComponents/Collections";
import Footer from "../shoppingComponents/Footer";
import Header from "../shoppingComponents/Header";
import { Gents, Ladies } from "../data";
import { useState } from "react";
import WomenCollection from "../shoppingComponents/WomenCollection";
const Mainpage = () => {
	const [gentsFashion, setGentsFashion] = useState(Gents);
	const [womenFashion, setWomenFashion] = useState(Ladies);
	return (
		<div>
			<Header />
			<Banner />
			<Collections gentsClothes={gentsFashion} />
			<WomenCollection womenClothes={womenFashion} />
			<Footer />
		</div>
	);
};

export default Mainpage;
