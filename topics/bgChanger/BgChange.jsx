import { useState } from "react";

function App() {
	let [color, setColor] = useState("cyan");

	return (
		<>
			<div
				className="flex flex-col   w-full h-screen"
				style={{ backgroundColor: color }}
			>
				<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
					<div className="bg-white space-x-2 gap-3 shadow-lg flex  flex-wrap justify-center px-4 py-1 rounded-full">
						<button
							onClick={() => setColor("DodgerBlue")}
							style={{ backgroundColor: "DodgerBlue" }}
							className="outline-none px-4 m-1 p-1 bg-slate-400 rounded-full"
						>
							DodgerBlue
						</button>
						<button
							onClick={() => setColor("tomato")}
							style={{ backgroundColor: "tomato" }}
							className="outline-none px-4 m-1 p-1 bg-slate-400 rounded-full"
						>
							tomato
						</button>{" "}
						<button
							onClick={() => setColor("gray")}
							style={{ backgroundColor: "gray" }}
							className="outline-none px-4 m-1 p-1 bg-slate-400 rounded-full"
						>
							gray
						</button>{" "}
						<button
							onClick={() => setColor("brown")}
							style={{ backgroundColor: "brown" }}
							className="outline-none px-4 m-1 p-1 bg-slate-400 rounded-full"
						>
							brown
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
