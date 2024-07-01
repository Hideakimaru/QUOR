import { useEffect } from "react";
import { useState } from "react";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
import Content from "./Content.jsx";
import ImagePrivew from "./ImagePrivew.jsx";
import ContentWrapper from "./ContentWrapper.jsx";
import Wrapper from "./Wrapper.jsx";
import GoArrow from "./GoArrow.jsx";
import { ScrollRestoration } from "react-router-dom";
import Hr from "./utils/Hr.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import NoContentMessage from "./utils/NoContentMessage.jsx";

const LOCAL_STORAGE_KEY = "myData";

export default function WatchList() {
	const [contentData, setContentData] = useState([]);
	const [imageUrl, setImageUrl] = useState("");
	const [imageAlt, setImageAlt] = useState("");
	const [isPrivew, setIsPrivew] = useState(false);
	const [searchTitle, setSearchTitle] = useState("");
	const [scrollVisability, setScrollVisability] = useState("");
	const [isContent, setIsContent] = useState(false);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(
		() => {
			ScrollTrigger.refresh();
		},
		{
			dependencies: [contentData]
		}
	);

	// Data workers

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (data) {
			if (data && data.length > 0) {
				setContentData(data);
				setIsContent(true);
			} else {
				setIsContent(false);
			}
		}
	}, [contentData.length]);

	function handleDelete(id) {
		const clearedData = contentData.filter(content => content.id !== id);
		setContentData(clearedData);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(clearedData));
		setIsContent(clearedData.length > 0);
	}

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("myData"));

		if (data) {
			setContentData(data);
		}
	}, []);

	useEffect(() => {
		isPrivew && setScrollVisability("hidden");
		document.body.style.overflow = scrollVisability;

		return () => {
			setScrollVisability("visible");
		};
	}, [isPrivew, scrollVisability]);

	// Search bar
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
				{isContent ? (
					<ContentWrapper>
						<ul className='flex w-full flex-col'>
							{contentData
								.filter(content =>
									content.title
										.toLowerCase()
										.includes(searchTitle.toLowerCase())
								)
								.map(content => (
									<li className='mb-14 last:mb-0' key={content.id}>
										<Content
											imageSrc={content.titleImage}
											altText={content.title}
											title={content.title}
											statusText={content.status}
											onClick={handleImageClick}
											onDelete={() => handleDelete(content.id)}
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
				) : (
					<NoContentMessage />
				)}
				<GoArrow />
			</Wrapper>
			<ScrollRestoration />
		</>
	);
}
