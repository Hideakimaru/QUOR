// import { useEffect } from "react";
import { useState } from "react";
// import { initialData } from "./data.js";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
// import Content from "./Content.jsx";
import AddContent from "./GoArrow.jsx";
// import ImagePrivew from "./ImagePrivew.jsx";
// import ContentWrapper from "./ContentWrapper.jsx";
import Wrapper from "./Wrapper.jsx";

export default function AddToList() {
	// const [contentData, setContentData] = useState(initialData);
	// const [imageUrl, setImageUrl] = useState("");
	// const [imageAlt, setImageAlt] = useState("");
	// const [isPrivew, setIsPrivew] = useState(false);
	const [searchTitle, setSearchTitle] = useState("");
	// const [scrollVisability, setScrollVisability] = useState("");

	// useEffect(() => {
	// 	isPrivew && setScrollVisability("hidden");
	// 	document.body.style.overflow = scrollVisability;

	// 	return () => {
	// 		setScrollVisability("visible");
	// 	};
	// }, [isPrivew, scrollVisability]);

	function handleSearchChange(e) {
		setSearchTitle(e.target.value);
	}

	// function handleImageClick(e) {
	// 	setIsPrivew(true);
	// 	setImageUrl(e.target.src);
	// 	setImageAlt(e.target.alt);
	// }

	// function handlePreviewClose() {
	// 	setIsPrivew(false);
	// }

	return (
		<Wrapper>
			{/* {isPrivew && (
				<ImagePrivew
					src={imageUrl}
					alt={imageAlt}
					onClick={handlePreviewClose}
				/>
			)} */}
			<Title text='ADD TO LIST PAGE' />
			<SearchBar value={searchTitle} onChange={handleSearchChange} />

			<AddContent />
		</Wrapper>
	);
}
