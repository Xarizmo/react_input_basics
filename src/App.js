import React from "react";
import "./App.css";

export default function App() {
	const [draft, setDraft] = React.useState("");

	return (
		<div className="input-app">
			<span>Вы ввели: {draft}</span>
			<input
				type="text"
				className="form-control"
				value={draft}
				onChange={event => setDraft(event.target.value)}
				autoFocus
			/>
			<br />
			<button
				type="submit"
				className="btn btn-primary"
				onClick={() => {
					alert(draft);
					setDraft("");
				}}
			>
				Show input value
			</button>
		</div>
	);
}
