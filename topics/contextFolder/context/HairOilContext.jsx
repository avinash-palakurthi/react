import { createContext, useState, useContext } from "react";

const CoconutOil = createContext(); // 1 create a context and assigned to coconutOil variable

// OilProvider is a component
export const OilProvider = ({ children }) => {
	const [oil, setOil] = useState({
		oilName: "Natural Almond Oil",
		city: "kochi",
	});

	return (
		<CoconutOil.Provider value={{ oil, setOil }}>
			{/* 2 added .Provider and value to CoconutOil context */}
			{[children]}
		</CoconutOil.Provider>
	);
};

export const useData = () => useContext(CoconutOil);
// 3 added useContext and useData function to use OilProvider
