import { useData } from "../context/HairOilContext";

function Telangana({ item }) {
	const { oil } = useData();
	return (
		<div className="text-3xl ">
			your{" "}
			<span className=" text-5xl text-yellow-600 uppercase">{oil.oilName}</span>
			{"   "}
			Oredr Deliver To{" "}
			<span className="text-emerald-500 font-bold text-3xl">
				Telangana
			</span>{" "}
			from <span className="text-emerald-500 font-bold text-3xl">Kerala </span>{" "}
			place: <span className="text-red-400">{oil.city}</span>
		</div>
	);
}

export default Telangana;
