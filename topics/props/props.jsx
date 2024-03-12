import Card from "./Card";

const user1 = {
	id: 1,
	name: "user1",
	img: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const user2 = {
	id: 2,
	name: "user3",
	img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const user3 = {
	id: 3,
	name: "user3",
	img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
function App() {
	return (
		<>
			<div className="flex flex-col items-center justify-center mt-4">
				<h1 className="text-4xl mb-5 bg-slate-500 p-4 px-8 rounded text-white text-center capitalize">
					props
				</h1>
				<div className="flex gap-4 flex-wrap items-center justify-center">
					<Card userName={user1.name} image={user1.img} />
					<Card userName={user2.name} image={user2.img} />

					<Card userName={user3.name} image={user3.img} />
				</div>
			</div>
		</>
	);
}

export default App;
