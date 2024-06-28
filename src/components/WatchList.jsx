import { useEffect } from "react";
import { useState } from "react";
import { initialData } from "./data.js";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
import Content from "./Content.jsx";
import ImagePrivew from "./ImagePrivew.jsx";
import ContentWrapper from "./ContentWrapper.jsx";
import Wrapper from "./Wrapper.jsx";
import GoArrow from "./GoArrow.jsx";
import { ScrollRestoration } from "react-router-dom";
import Hr from "./utils/Hr.jsx";

export default function WatchList() {
	const [contentData, setContentData] = useState(initialData);
	const [imageUrl, setImageUrl] = useState("");
	const [imageAlt, setImageAlt] = useState("");
	const [isPrivew, setIsPrivew] = useState(false);
	const [searchTitle, setSearchTitle] = useState("");
	const [scrollVisability, setScrollVisability] = useState("");

	useEffect(() => {
		isPrivew && setScrollVisability("hidden");
		document.body.style.overflow = scrollVisability;

		return () => {
			setScrollVisability("visible");
		};
	}, [isPrivew, scrollVisability]);

	function handleSearchChange(e) {
		setSearchTitle(e.target.value);
	}

	function handleImageClick(e) {
		setIsPrivew(true);
		setImageUrl(e.target.src);
		setImageAlt(e.target.alt);
	}

	function handlePreviewClose() {
		setIsPrivew(false);
	}

	return (
		<>
			<Wrapper>
				{isPrivew && (
					<ImagePrivew
						src={imageUrl}
						alt={imageAlt}
						onClick={handlePreviewClose}
					/>
				)}
				<Title text='My List' />
				<SearchBar value={searchTitle} onChange={handleSearchChange} />
				<Hr />
				<ContentWrapper>
					<ul className='flex w-full flex-col'>
						{contentData
							.filter(content =>
								content.title.toLowerCase().includes(searchTitle.toLowerCase())
							)
							.map(content => (
								<li className='mb-14 last:mb-0' key={content.id}>
									<Content
										imageSrc={content.titleImage}
										altText={content.title}
										title={content.title}
										statusText={content.status}
										onClick={handleImageClick}
										onDelete={() =>
											setContentData(
												contentData.filter(c => c.id !== content.id)
											)
										}
										onSelectChanges={choise => {
											setContentData(
												contentData.map(c => {
													if (c.id === content.id) {
														return {
															...c,
															status: choise.value.toLowerCase()
														};
													} else {
														return c;
													}
												})
											);
										}}
									/>
								</li>
							))}
					</ul>
				</ContentWrapper>
				<GoArrow />
			</Wrapper>
			<ScrollRestoration />
		</>
	);
}
