import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import RemoveButton from "./utils/RemoveButton";
import AddEpisodesBtn from "./utils/AddEpisodesBtn";
import RemoveEpisodesBtn from "./utils/RemoveEpisodesBtn";
import CongratsText from "./utils/CongratsText";

const dot = (color = "transperent") => ({
	alignItems: "center",
	display: "flex",

	":before": {
		backgroundColor: color,
		borderRadius: 10,
		content: '" "',
		display: "block",
		marginRight: 8,
		height: 10,
		width: 10
	}
});

export default function Content({
	imageSrc,
	altText,
	title,
	onClick,
	onDelete,
	onSelectChanges,
	selectedStatus,
	contentType,
	allEpisodes,
	onEpisodesAdd,
	onEpisodesRemove,
	episodesCount
}) {
	const [currentState, setCurrentState] = useState(selectedStatus);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCongrats, setIsCongrats] = useState(false);

	const congratsTextRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		if (episodesCount === allEpisodes) {
			setIsCongrats(true);
		} else {
			setIsCongrats(false);
		}
	}, [allEpisodes, episodesCount]);

	// React select
	useEffect(() => {
		setCurrentState(selectedStatus);
	}, [selectedStatus]);

	const colorStyles = {
		control: styles => ({
			...styles,
			overflow: "hidden",
			cursor: "pointer",
			backgroundColor: "#fff",
			width: "200px",
			height: "50px",
			borderRadius: "5px",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "700",
			fontSize: "20px",
			lineHeight: "23px",
			border: isMenuOpen ? "2px solid #2ecc71" : "2px solid #000",
			color: "#000",
			boxShadow: "none",

			":hover": {
				border: isMenuOpen ? "2px solid #2ecc71" : "2px solid #000",
				opacity: isMenuOpen ? "1" : "0.8"
			},
			"@media only screen and (min-width: 640px)": {
				...styles["@media only screen and (min-width: 640px)"],
				width: "250px"
			}
		}),
		menu: styles => ({
			...styles,
			padding: "5px 0",
			borderRadius: "10px",
			border: "2px solid #2ecc71"
		}),
		option: styles => ({
			...styles,
			cursor: "pointer",
			backgroundColor: "#fff",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "500",
			fontSize: "16px",
			lineHeight: "19px",
			color: "#000",
			":hover": {
				backgroundColor: "rgba(46, 204, 113, 0.2)",
				color: "#2ecc71"
			}
		}),
		valuecontainer: styles => ({
			...styles,
			display: "flex",
			justifyContent: "center",
			padding: "0"
		}),
		indicatorSeparator: styles => ({
			...styles,
			margin: "0",
			height: "100%",
			backgroundColor: isMenuOpen ? "#2ecc71" : "#000",
			width: "2px"
		}),
		dropdownIndicator: styles => ({
			...styles,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "45px",
			height: "100%",
			backgroundColor: isMenuOpen ? "rgba(46, 204, 113, 0.2)" : "#fff",
			color: isMenuOpen ? "#2ecc71" : "#000",

			":hover": {
				color: isMenuOpen ? "#2ecc71" : "#000"
			}
		}),
		singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
	};
	const colourOptions = [
		{ value: "watching", label: "Watching", color: "#2ecc71" },
		{ value: "planned", label: "Planned", color: "#3498db" },
		{ value: "completed", label: "Completed", color: "#ccc" }
	];

	return (
		<div
			ref={contentRef}
			className='gap-6 md:gap-12 px-3 py-5 md:px-8 md:pt-5 md:pb-8 flex w-full flex-col md:flex-row bg-white'
		>
			<div className='gap-4 md:gap-0 flex w-full md:w-36 flex-col justify-start items-center'>
				<div className='relative flex md:min-w-36 md:h-40'>
					<div className='flex w-48 h-64 md:w-36 md:h-48 left-0 hover:opacity-80 active:opacity-100 active:scale-90 transition duration-500 ease-in-out md:rounded-md md:absolute md:-top-[40px] md:left-auto overflow-hidden cursor-pointer active:duration-0'>
						<img
							className='w-full h-auto'
							src={imageSrc}
							alt={altText}
							onClick={onClick}
						/>
					</div>
				</div>
				<div className='md:pt-0 flex w-full justify-center font-poetsen uppercase'>
					<span
						className='w-fit py-1 px-4 flex justify-center items-center text-white rounded-md'
						style={{
							backgroundColor:
								contentType.toLowerCase() === "movie"
									? "#2980b9"
									: contentType.toLowerCase() === "anime"
									? "#8e44ad"
									: contentType.toLowerCase() === "series"
									? "#16a085"
									: contentType.toLowerCase() === "cartoon"
									? "#f39c12"
									: "#000"
						}}
					>
						{contentType}
					</span>
				</div>
			</div>
			<div className='gap-5 md:gap-10 pt-0 md:pt-5 flex w-full flex-col justify-between'>
				<div className='flex gap-3 w-full flex-col md:justify-start font-roboto text-black'>
					<h1 className='pr-5 text-center md:text-left font-bold text-2xl md:text-3xl uppercase'>
						{title}
					</h1>
					<div className='flex w-full justify-center md:justify-start'>
						<Select
							className='react-select-container'
							classNamePrefix='react-select'
							defaultValue={colourOptions.find(
								option => option.value === currentState.toLowerCase()
							)}
							options={colourOptions}
							styles={colorStyles}
							onChange={onSelectChanges}
							onMenuOpen={() => {
								setIsMenuOpen(true);
							}}
							onMenuClose={() => {
								setIsMenuOpen(false);
							}}
							isSearchable={false}
						/>
					</div>
					<div className='flex flex-col w-full justify-center items-center md:items-start'>
						<div className='gap-1 md:gap-2 flex w-fit flex-row items-center'>
							<span className='flex w-20 font-roboto font-bold text-base text-black'>
								Episodes:
							</span>
							<span
								data-testid='EpisodesCounter'
								className='shrink-0 flex w-fit font-roboto text-base text-black'
							>{`${episodesCount} / ${allEpisodes}`}</span>
							<div className='gap-1 flex w-full flex-row justify-start items-center'>
								<AddEpisodesBtn onClick={onEpisodesAdd} />
								<RemoveEpisodesBtn onClick={onEpisodesRemove} />
							</div>
						</div>
					</div>
					{isCongrats ? (
						<CongratsText congratsTextRef={congratsTextRef} />
					) : null}
				</div>
				<RemoveButton onDelete={onDelete} />
			</div>
		</div>
	);
}
