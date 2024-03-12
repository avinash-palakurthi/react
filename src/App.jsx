import { OilProvider } from "./components/context/HairOilContext";
import Kerala from "./components/contextContainer/Kerala";

function App() {
	const product = "hairOil";
	return (
		<div className="bg-gray-700 h-screen w-full text-center ">
			<OilProvider>
				<Kerala item={product} />
			</OilProvider>
		</div>
	);
}

export default App;
