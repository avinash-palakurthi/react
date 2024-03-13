// import React from "react";

const cars = [
	{
		name: "Audi",
		origin: "Germany",
		model: "A8",
		year: 2023,
		image:
			"https://images.pexels.com/photos/16382728/pexels-photo-16382728/free-photo-of-audi-a8-on-street-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "BMW",
		origin: "Germany",
		model: "3 series",
		year: 2024,
		image:
			"https://images.pexels.com/photos/8642186/pexels-photo-8642186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Tata",
		origin: "India",
		model: "Altroz",
		year: 2020,
		image:
			"https://images.pexels.com/photos/9031387/pexels-photo-9031387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "JLR",
		origin: "UK",
		model: "Defender",
		year: 1998,
		image:
			"https://images.pexels.com/photos/16365199/pexels-photo-16365199/free-photo-of-silver-land-rover-defender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
];
const ArrObjMethod = () => {
	return (
		<div>
			<div className="flex gap-2 justify-evenly">
				{cars.map((car, id) => {
					return (
						<div key={id} className="flex gap-2 ">
							<div className="flex flex-col gap-3 ">
								<div>
									<img
										src={car.image}
										alt=""
										className="size-72 object-cover hover:scale-110"
									/>
								</div>
								<div className="flex flex-col items-center ">
									<h1>Car :{car.name}</h1>
									<p>Model: {car.model}</p>
									<p>Year: {car.year}</p>
									<h3>Country: {car.origin}</h3>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ArrObjMethod;
