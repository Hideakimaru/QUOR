import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Hr from "./utils/Hr.jsx";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
import ContentList from "./ContentList.jsx";
import ImagePrivew from "./ImagePreview.jsx";
import ContentWrapper from "./ContentWrapper.jsx";
import Wrapper from "./Wrapper.jsx";
import GoArrow from "./GoArrow.jsx";
import ContentMessage from "./ContentMessage.jsx";
import { ScrollRestoration } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { initialData } from "./config/data.js";
import ContentFilters from "./ContentFilters.jsx";

const LOCAL_STORAGE_KEY = "myData";

export default function AddToList() {
	const [contentData, setContentData] = useState(initialData);
	const [originalData] = useState(initialData);
	const [imageUrl, setImageUrl] = useState("");
	const [imageAlt, setImageAlt] = useState("");
	const [isPrivew, setIsPreview] = useState(false);
	const [scrollVisability, setScrollVisability] = useState("");
	const [isText, setIsText] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [isFilterActive, setIsFilterActive] = useState(null);
	const [isMyData, setIsMyData] = useState(() => {
		const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (savedData && savedData !== "null") {
			try {
				return JSON.parse(savedData) || [];
			} catch (e) {
				console.error("Error parsing JSON from localStorage:", e);
				return [];
			}
		}
		return [];
	});

	const [addedContentIds, setAddedContentIds] = useState([]);

	// newData

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isMyData));
	}, [isMyData]);

	function handleAddBtn(content) {
		setIsMyData([...isMyData, content]);
		setAddedContentIds([...addedContentIds, content.id]);
	}

	// Gsap
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
		setIsPreview(true);
		setImageUrl(e.target.src);
		setImageAlt(e.target.alt);
	}

	function handlePreviewClose() {
		setIsPreview(false);
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
				<Title text='watch something new' />
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
												contentId={content.id}
												handleAddBtn={() => {
													handleAddBtn({
														id: content.id,
														title: content.title,
														titleImage: content.titleImage,
														contentYear: content.contentYear,
														episodesCount: content.episodesCount,
														ratingNumber: content.ratingNumber,
														contentGenre: content.contentGenre,
														contentType: content.contentType,
														contentDescription: content.contentDescription,
														selectStatus: content.selectStatus,
														currentEpisode: content.currentEpisode,
														allEpisodes: content.allEpisodes
													});
												}}
												isAdded={addedContentIds.includes(content.id)}
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
