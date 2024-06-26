import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Hr from "./utils/Hr.jsx";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
import ContentList from "./ContentList.jsx";
import ImagePrivew from "./ImagePrivew.jsx";
import ContentWrapper from "./ContentWrapper.jsx";
import Wrapper from "./Wrapper.jsx";
import GoArrow from "./GoArrow.jsx";
import ContentMessage from "./ContentMessage.jsx";
import { ScrollRestoration } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { initialData } from "./data.js";
import ContentFilters from "./ContentFilters.jsx";

export default function AddToList() {
	const [contentData, setContentData] = useState(initialData);
	const [originalData, setOriginalData] = useState(initialData);
	const [imageUrl, setImageUrl] = useState("");
	const [imageAlt, setImageAlt] = useState("");
	const [isPrivew, setIsPrivew] = useState(false);
	const [scrollVisability, setScrollVisability] = useState("");
	const [isText, setIsText] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [isFilterActive, setIsFilterActive] = useState(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const searchBarRef = useRef(null);

	useGSAP(
		() => {
			ScrollTrigger.refresh();
		},
		{ dependencies: [searchValue, isFilterActive] }
	);

	// SearchBar handlers
	function handleSearchChange(e) {
		setSearchValue(e.target.value);
		setIsText(true);
	}

	function handleSearchClick() {
		setIsSearch(true);
		searchBarRef.current.focus();
	}

	function handleSearchClear(e) {
		e.stopPropagation();
		searchBarRef.current.focus();
		setIsText(false);
		setIsSearch(true);
		setSearchValue("");
	}

	function handleSearchBlur() {
		setIsSearch(false);
	}
	useEffect(() => {
		const filteredContent = contentData.filter(content =>
			content.title.toLowerCase().includes(searchValue.toLowerCase())
		);
		setIsShow(filteredContent.length === 0 && searchValue.toLowerCase() !== "");
	}, [contentData, searchValue]);

	function handleFilter(contentType) {
		if (contentType === "new") {
			if (isFilterActive === "new") {
				setIsFilterActive(null);
				setContentData(originalData);
			} else {
				setIsFilterActive("new");
				const currentYear = new Date().getFullYear().toString();
				const filteredData = originalData.filter(
					content => content.contentYear === currentYear
				);
				setContentData(filteredData);
			}
		} else {
			if (isFilterActive === contentType) {
				setIsFilterActive(null);
				setContentData(originalData);
			} else {
				setIsFilterActive(contentType);
				const filteredData = originalData.filter(
					content =>
						content.contentType.toLowerCase() === contentType.toLowerCase()
				);
				setContentData(filteredData);
			}
		}
	}

	// Image handlers
	useEffect(() => {
		isPrivew && setScrollVisability("hidden");
		document.body.style.overflow = scrollVisability;

		return () => {
			setScrollVisability("visible");
		};
	}, [isPrivew, scrollVisability]);

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
				<Title text='take something new' />
				<SearchBar
					searchBarRef={searchBarRef}
					isSearch={isSearch}
					isText={isText}
					value={searchValue}
					onChange={handleSearchChange}
					handleSearchClick={handleSearchClick}
					handleSearchClear={handleSearchClear}
					handleSearchBlur={handleSearchBlur}
				/>
				<ContentFilters
					onClick={handleFilter}
					isFilterActive={isFilterActive}
				/>
				<Hr />
				<ContentWrapper>
					{isShow ? (
						<ContentMessage searchWords={searchValue} />
					) : (
						<ul className='flex w-full flex-col list-none'>
							{contentData
								.filter(content =>
									content.title
										.toLowerCase()
										.includes(searchValue.toLowerCase())
								)
								.map(content => {
									return (
										<li className='mb-14 last:mb-0' key={content.id}>
											<ContentList
												imageSrc={content.titleImage}
												altText={content.title}
												title={content.title}
												statusText={content.status}
												onClick={handleImageClick}
												episodesCount={content.episodesCount}
												contentYear={content.contentYear}
												ratingNumber={content.ratingNumber}
												contentGenre={content.contentGenre}
												contentType={content.contentType}
												contentDescription={content.contentDescription}
											/>
										</li>
									);
								})}
						</ul>
					)}
				</ContentWrapper>
				<GoArrow />
			</Wrapper>
			<ScrollRestoration />
		</>
	);
}
