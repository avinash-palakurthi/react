import { userData } from "./data";

const NestedArrObjMethod = () => {
	return (
		<div>
			<p className="text-center text-2xl">NestedArrObjMethod</p>
			<div>
				{userData.map((data) => {
					return (
						<div
							className="text-cyan-500 mx-2 text-start border m-2 w-52 p-2 text-lg"
							key={data.id}
						>
							<p className="text-yellow-200 text-center">({data.id})</p>{" "}
							<h1>
								<span className="text-rose-400">Name:</span> {data.name}
								<p>
									<span className="text-rose-400">City : </span>
									{data.address.city}
								</p>
							</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NestedArrObjMethod;
