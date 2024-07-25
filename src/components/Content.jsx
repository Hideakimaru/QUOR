import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import RemoveButton from "./utils/RemoveButton";
import AddEpisodesBtn from "./utils/AddEpisodesBtn";
import RemoveEpisodesBtn from "./utils/RemoveEpisodesBtn";
import CongratsText from "./utils/CongratsText";
import { useTheme } from "./utils/ThemeHooks";
import ContentImage from "./ContentImage";

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

	const { theme } = useTheme();

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
			backgroundColor: theme === "light" ? "#fff" : "#282828",
			width: "250px",
			height: "55px",
			borderRadius: "5px",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "700",
			fontSize: "20px",
			lineHeight: "23px",
			border: isMenuOpen
				? theme === "light"
					? "2px solid #16a34a"
					: "2px solid #22c55e"
				: theme === "light"
				? "2px solid #000"
				: "2px solid #3f3f3f",
			boxShadow: "none",

			":hover": {
				border: isMenuOpen
					? theme === "light"
						? "2px solid #16a34a"
						: "2px solid #22c55e"
					: theme === "light"
					? "2px solid #000"
					: "2px solid #3f3f3f",
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
			border: theme === "light" ? "2px solid #16a34a" : "2px solid #22c55e",
			backgroundColor: theme === "light" ? "#fff" : "#282828"
		}),
		option: styles => ({
			...styles,
			cursor: "pointer",
			backgroundColor: theme === "light" ? "#fff" : "#282828",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "500",
			fontSize: "16px",
			lineHeight: "19px",
			color: theme === "light" ? "#000" : "rgba(255, 255, 255, 0.87)",
			":hover": {
				backgroundColor:
					theme === "light" ? "rgba(46, 204, 113, 0.2)" : "rgba(63, 63, 63, 1)",
				color: theme === "light" ? "#16a34a" : "#22c55e"
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
			backgroundColor: isMenuOpen
				? theme === "light"
					? "#16a34a"
					: "#22c55e"
				: theme === "light"
				? "#000"
				: "#3f3f3f",
			width: "2px"
		}),
		dropdownIndicator: styles => ({
			...styles,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "45px",
			height: "100%",
			backgroundColor: isMenuOpen
				? theme === "light"
					? "rgba(22, 163, 74, 0.2)"
					: "rgba(34, 197, 94, 0.2)"
				: theme === "light"
				? "#fff"
				: "#282828",
			color: isMenuOpen
				? theme === "light"
					? "#16a34a"
					: "#22c55e"
				: theme === "light"
				? "#000"
				: "#3f3f3f",

			":hover": {
				color: isMenuOpen
					? theme === "light"
						? "#16a34a"
						: "#22c55e"
					: theme === "light"
					? "#000"
					: "#3f3f3f"
			}
		}),
		singleValue: (styles, { data }) => ({
			...styles,
			...dot(data.color),
			color: theme === "light" ? "#000" : "rgba(255, 255, 255, 0.87)"
		})
	};
	const colourOptions = [
		{
			value: "watching",
			label: "Watching",
			color: theme === "light" ? "#059669" : "#10b981"
		},
		{
			value: "planned",
			label: "Planned",
			color: theme === "light" ? "#0284c7" : "#0ea5e9"
		},
		{
			value: "completed",
			label: "Completed",
			color: theme === "light" ? "#525252" : "#737373"
		}
	];

	return (
		<div
			ref={contentRef}
			className='gap-6 md:gap-12 px-3 py-5 md:px-8 md:pt-5 md:pb-8 flex w-full flex-col md:flex-row bg-white dark:bg-custom-dark-gray'
		>
			<div className='gap-4 md:gap-0 flex w-full md:w-36 flex-col justify-start items-center'>
				<ContentImage imageSrc={imageSrc} altText={altText} onClick={onClick} />
				<div className='md:pt-0 flex w-full justify-center font-poetsen uppercase'>
					<span
						className='w-fit py-1 px-4 flex justify-center items-center text-white rounded-md'
						style={{
							backgroundColor:
								contentType.toLowerCase() === "movie"
									? "#3b82f6"
									: contentType.toLowerCase() === "anime"
									? "#8b5cf6"
									: contentType.toLowerCase() === "series"
									? "#14b8a6"
									: contentType.toLowerCase() === "cartoon"
									? "#f59e0b"
									: "#121212"
						}}
					>
						{contentType}
					</span>
				</div>
			</div>
			<div className='gap-7 md:gap-8 pt-0 md:pt-5 flex w-full flex-col justify-between'>
				<div className='flex gap-4 w-full flex-col md:justify-start font-roboto text-black dark:text-white/87'>
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
							<span className='flex w-20 font-roboto font-bold text-base text-black dark:text-white/87'>
								Episodes:
							</span>
							<span
								data-testid='EpisodesCounter'
								className='shrink-0 flex w-fit font-roboto text-base text-black dark:text-white/87'
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
