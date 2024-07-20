import { useEffect, useState, useRef } from "react";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
import Content from "./Content.jsx";
import ImagePreview from "./ImagePreview.jsx";
import ContentWrapper from "./ContentWrapper.jsx";
import Wrapper from "./Wrapper.jsx";
import GoArrow from "./GoArrow.jsx";
import { ScrollRestoration } from "react-router-dom";
import Hr from "./utils/Hr.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import NoContentMessage from "./utils/NoContentMessage.jsx";
import MyListItem from "./MyListItem.jsx";
import MyListContainer from "./MyListContainer.jsx";
import MyListNoContentMessage from "./utils/MyListNoContentMessage.jsx";
import MyListsWrapper from "./utils/MyListsWrapper.jsx";
import ContentMessage from "./ContentMessage.jsx";

const LOCAL_STORAGE_KEY = "myData";

export default function WatchList() {
	const [contentData, setContentData] = useState(() => {
		const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		return storedData || [];
	});
	const [imageUrl, setImageUrl] = useState("");
	const [imageAlt, setImageAlt] = useState("");
	const [isPreview, setIsPreview] = useState(false);
	const [scrollVisibility, setScrollVisibility] = useState("");
	const [isContent, setIsContent] = useState(false);
	const [isUnfolded, setIsUnfolded] = useState({
		watching: true,
		planned: true,
		completed: true
	});
	const [isDisabled, setIsDisabled] = useState({
		watching: false,
		planned: false,
		completed: false
	});
	const [isSearch, setIsSearch] = useState(false);
	const [isText, setIsText] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [filteredContent, setFiltredContent] = useState([]);

	const searchBarRef = useRef(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(
		() => {
			ScrollTrigger.refresh();
		},
		{
			dependencies: [contentData, filteredContent]
		}
	);

	// Episodes button's

	function handleAddEpisodes(id) {
		setContentData(prevData =>
			prevData.map(content =>
				content.id === id && content.currentEpisode < content.allEpisodes
					? { ...content, currentEpisode: content.currentEpisode + 1 }
					: content
			)
		);
	}

	function handleRemoveEpisodes(id) {
		setContentData(prevData =>
			prevData.map(content =>
				content.id === id && content.currentEpisode > 0
					? { ...content, currentEpisode: content.currentEpisode - 1 }
					: content
			)
		);
	}

	// SearchBar

	useEffect(() => {
		const filtred = contentData.filter(content =>
			content.title.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFiltredContent(filtred);
	}, [contentData, searchValue]);

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

	// Data workers
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedData && storedData.length > 0) {
			setContentData(storedData);
			setIsContent(true);
		} else {
			setIsContent(false);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contentData));
	}, [contentData]);

	useEffect(() => {
		setIsDisabled({
			watching:
				contentData.filter(content =>
					content.selectStatus.toLowerCase().includes("watching")
				).length === 0,
			planned:
				contentData.filter(content =>
					content.selectStatus.toLowerCase().includes("planned")
				).length === 0,
			completed:
				contentData.filter(content =>
					content.selectStatus.toLowerCase().includes("completed")
				).length === 0
		});
	}, [contentData]);

	function handleDelete(id) {
		const updatedData = contentData.filter(content => content.id !== id);
		setContentData(updatedData);
		setIsContent(updatedData.length > 0);
	}

	useEffect(() => {
		isPreview && setScrollVisibility("hidden");
		document.body.style.overflow = scrollVisibility;

		return () => {
			setScrollVisibility("visible");
		};
	}, [isPreview, scrollVisibility]);

	function handleImageClick(e) {
		setIsPreview(true);
		setImageUrl(e.target.src);
		setImageAlt(e.target.alt);
	}

	function handlePreviewClose() {
		setIsPreview(false);
	}

	function handleSelectChange(contentId, choice) {
		const updatedData = contentData.map(c =>
			c.id === contentId
				? { ...c, selectStatus: choice.value.toLowerCase() }
				: c
		);
		setContentData(updatedData);
	}

	function handleUnfold(type) {
		setIsUnfolded(prevState => ({
			...prevState,
			[type]: !prevState[type]
		}));
	}

	return (
		<>
			<Wrapper>
				{isPreview && (
					<ImagePreview
						src={imageUrl}
						alt={imageAlt}
						onClick={handlePreviewClose}
					/>
				)}
				<Title text='My List' />
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
				<Hr />
				<ContentWrapper>
					{isText ? (
						filteredContent.length > 0 ? (
							<div>
								<ul className='flex w-full flex-col'>
									{filteredContent.map(content => (
										<li className='mb-14 last:mb-0' key={content.id}>
											<Content
												imageSrc={content.titleImage}
												altText={content.title}
												title={content.title}
												statusText={content.status}
												onClick={handleImageClick}
												onDelete={() => handleDelete(content.id)}
												selectedStatus={content.selectStatus}
												onSelectChanges={choice =>
													handleSelectChange(content.id, choice)
												}
												contentType={content.contentType}
												currentEpisode={content.currentEpisode}
												allEpisodes={content.allEpisodes}
												onEpisodesAdd={() => {
													handleAddEpisodes(content.id);
												}}
												onEpisodesRemove={() => {
													handleRemoveEpisodes(content.id);
												}}
												episodesCount={content.currentEpisode}
											/>
										</li>
									))}
								</ul>
							</div>
						) : (
							<ContentMessage searchWords={searchValue} />
						)
					) : isContent ? (
						<MyListsWrapper>
							<MyListContainer>
								<MyListItem
									title='Watching'
									isUnfolded={isUnfolded.watching}
									onClick={() => handleUnfold("watching")}
									isDisabled={isDisabled.watching}
								/>
								{isUnfolded.watching && (
									<ul className='flex w-full flex-col'>
										{contentData.filter(content =>
											content.selectStatus.toLowerCase().includes("watching")
										).length === 0 ? (
											<MyListNoContentMessage text='No Content in "Watching"' />
										) : (
											contentData
												.filter(content =>
													content.selectStatus
														.toLowerCase()
														.includes("watching")
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
															selectedStatus={content.selectStatus}
															onSelectChanges={choice =>
																handleSelectChange(content.id, choice)
															}
															contentType={content.contentType}
															currentEpisode={content.currentEpisode}
															allEpisodes={content.allEpisodes}
															onEpisodesAdd={() => {
																handleAddEpisodes(content.id);
															}}
															onEpisodesRemove={() => {
																handleRemoveEpisodes(content.id);
															}}
															episodesCount={content.currentEpisode}
														/>
													</li>
												))
										)}
									</ul>
								)}
							</MyListContainer>
							<MyListContainer>
								<MyListItem
									title='Planned'
									isUnfolded={isUnfolded.planned}
									onClick={() => handleUnfold("planned")}
									isDisabled={isDisabled.planned}
								/>
								{isUnfolded.planned && (
									<ul className='flex w-full flex-col'>
										{contentData.filter(content =>
											content.selectStatus.toLowerCase().includes("planned")
										).length === 0 ? (
											<MyListNoContentMessage text='No Content in "Planned"' />
										) : (
											contentData
												.filter(content =>
													content.selectStatus.toLowerCase().includes("planned")
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
															selectedStatus={content.selectStatus}
															onSelectChanges={choice =>
																handleSelectChange(content.id, choice)
															}
															contentType={content.contentType}
															currentEpisode={content.currentEpisode}
															allEpisodes={content.allEpisodes}
															onEpisodesAdd={() => {
																handleAddEpisodes(content.id);
															}}
															onEpisodesRemove={() => {
																handleRemoveEpisodes(content.id);
															}}
															episodesCount={content.currentEpisode}
														/>
													</li>
												))
										)}
									</ul>
								)}
							</MyListContainer>
							<MyListContainer>
								<MyListItem
									title='Completed'
									isUnfolded={isUnfolded.completed}
									onClick={() => handleUnfold("completed")}
									isDisabled={isDisabled.completed}
								/>
								{isUnfolded.completed && (
									<ul className='flex w-full flex-col'>
										{contentData.filter(content =>
											content.selectStatus.toLowerCase().includes("completed")
										).length === 0 ? (
											<MyListNoContentMessage text='No Content in "Completed"' />
										) : (
											contentData
												.filter(content =>
													content.selectStatus
														.toLowerCase()
														.includes("completed")
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
															selectedStatus={content.selectStatus}
															onSelectChanges={choice =>
																handleSelectChange(content.id, choice)
															}
															contentType={content.contentType}
															currentEpisode={content.currentEpisode}
															allEpisodes={content.allEpisodes}
															onEpisodesAdd={() => {
																handleAddEpisodes(content.id);
															}}
															onEpisodesRemove={() => {
																handleRemoveEpisodes(content.id);
															}}
															episodesCount={content.currentEpisode}
														/>
													</li>
												))
										)}
									</ul>
								)}
							</MyListContainer>
						</MyListsWrapper>
					) : (
						<NoContentMessage />
					)}
				</ContentWrapper>
				<GoArrow />
			</Wrapper>
			<ScrollRestoration />
		</>
	);
}
