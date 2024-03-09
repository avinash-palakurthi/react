import { useState } from "react";

function App() {
	let [counter, setCounter] = useState(21);

	const addValue = () => {
		counter = counter + 1;
		setCounter(counter);
	};
	const removeValue = () => {
		counter = counter - 1;
		setCounter(counter);
	};
	return (
		<>
			<main className="flex flex-col items-center justify-center">
				<div className="bg-slate-600 w-full flex items-center justify-center text-white text-2xl p-1 ">
					<h1>Counter App</h1>
				</div>
				<section className="flex flex-col items-center justify-center mt-20">
					<div className="text-2xl">
						<h1>count:{counter}</h1>
					</div>
					<div className="space-x-10 mt-5">
						<button
							onClick={addValue}
							className="bg-slate-500 text-white p-2 px-4 rounded"
						>
							Increment
						</button>
						<button
							onClick={removeValue}
							className="bg-slate-500 text-white p-2 px-4 rounded"
						>
							Decrement
						</button>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
