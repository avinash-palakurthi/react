import { useData } from "../context/HairOilContext";
import Tamilnadu from "./Tamilnadu";

function Kerala({ item }) {
	const { oil } = useData();
	return (
		<div className="">
			<p className="text-3xl">
				<span className="text-yellow-600 text-5xl uppercase">
					{oil.oilName}
				</span>{" "}
				Product started from {""}
				<span className="text-emerald-500 font-bold text-3xl">
					Kerala
				</span> To {""}
				<span className="text-emerald-500 font-bold text-3xl">Telangana</span>
			</p>
			<Tamilnadu item={item} />
		</div>
	);
}

export default Kerala;
