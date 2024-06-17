import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function BoundaryBtn() {
	const [isNavigate, setIsNavigate] = useState(false);
	function handleClick() {
		setIsNavigate(!isNavigate);
	}
	return (
		<>
			<button onClick={handleClick} className='text-xl'>
				&#x2190;Go Back
			</button>
			{isNavigate && <Navigate to='/' replace={true} />}
		</>
	);
}
