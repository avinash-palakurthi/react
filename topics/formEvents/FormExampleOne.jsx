import { useState } from "react";

const FormExampleOne = () => {
	const [text, setText] = useState("");
	const [details, setDetails] = useState();
	const getEnteredText = (e) => {
		setText(e.target.value);
	};
	const getDetails = (e) => {
		e.preventDefault();
		setDetails(text);
	};
	return (
		<section className="max-w-5xl h-80 flex flex-col items-center justify-center  mx-auto bg-gray-700 px-5">
			<p className="text-start">your tex : {details}</p>
			<form onSubmit={getDetails}>
				<div className="p-2 ">
					<input
						type="text"
						placeholder="`Enter Some Text . . . .`"
						className="border border-slate-600 outline-none text-xl text-black p-2 w-96"
						onChange={getEnteredText}
					/>
					<button className="bg-emerald-700 p-2 text-xl" type="submit">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default FormExampleOne;
