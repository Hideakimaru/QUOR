import { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "@mui/icons-material/ExpandMore";
import ArrowUpIcon from "@mui/icons-material/ExpandLess";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

export default function ContentList({
	imageSrc,
	altText,
	onClick,
	title,
	episodesCount,
	contentYear,
	ratingNumber,
	contentGenre,
	contentType,
	contentDescription,
	handleAddBtn,
	isAdded,
	contentId
}) {
	const [isExpanded, setIsExpaned] = useState(false);
	const descriptionRef = useRef(null);
	const btnRef = useRef(null);
	const arrowDownRef = useRef(null);
	const [isButtonActive, setIsButtonActive] = useState(false);

	const localData = JSON.parse(localStorage.getItem("myData") || []);
	console.log(localData);

	gsap.registerPlugin(useGSAP);

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem("myData") || []);
		const isAlreadyAdded = savedData.some(item => item.id === contentId);
		setIsButtonActive(isAlreadyAdded);
	}, [contentId]);

	function onArrowDownClick() {
		setIsExpaned(true);
	}

	return (
		<div className='gap-6 md:gap-12 px-3 py-5 md:px-8 md:pt-5 md:pb-8 flex w-full flex-col md:flex-row bg-white'>
			<div className='gap-4 md:gap-0 flex w-full md:w-36 flex-col justify-start items-center'>
				<div className='relative flex md:min-w-36 md:h-40'>
					<div className='flex w-48 h-64 md:w-36 md:h-48 left-0 hover:opacity-80 active:opacity-100 active:scale-90 transition duration-500 ease-in-out md:rounded-md md:absolute md:-top-[40px] md:left-auto overflow-hidden cursor-pointer'>
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
			<div className='pt-5 flex w-full flex-col justify-between'>
				<div className='flex gap-4 w-full flex-col md:justify-start font-roboto text-black'>
					<h1 className='pr-5 text-center md:text-left font-bold text-2xl md:text-3xl uppercase'>
						{title}
					</h1>
					<div className='flex flex-col gap-2'>
						<p className='font-bold '>
							Year: <span className='font-normal'>{contentYear}</span>
						</p>
						<p className='font-bold '>
							Rating: <span className='font-normal'>{ratingNumber}</span>
						</p>
						<p className='font-bold '>
							Episodes: <span className='font-normal'>{episodesCount}</span>
						</p>
						<p className='font-bold '>
							Genre: <span className='font-normal'>{contentGenre}</span>
						</p>
						<div className='flex w-full flex-col gap-1'>
							<span className='flex w-45 font-bold '>Description: </span>
							<span
								ref={descriptionRef}
								className='flex justify-center font-normal overflow-hidden'
								style={{
									maskImage: isExpanded
										? ""
										: "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 75%)",
									height: isExpanded ? "auto" : 120 + "px"
								}}
							>
								{contentDescription}
							</span>
							<div className='flex w-full justify-center'>
								{isExpanded ? (
									<ArrowUpIcon
										onClick={() => {
											setIsExpaned(false);
										}}
										className='cursor-pointer hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
										sx={{ fontSize: "35px" }}
									/>
								) : (
									<ArrowDownIcon
										ref={arrowDownRef}
										className='cursor-pointer hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
										sx={{ fontSize: "35px" }}
										onClick={onArrowDownClick}
									/>
								)}
							</div>
						</div>
					</div>
					<div
						ref={btnRef}
						className='flex w-full justify-center md:justify-start items-start'
					>
						{isAdded || isButtonActive ? (
							<p className='font-poppins font-normal text-base text-custom-green '>
								This has been added!&#9825;
							</p>
						) : (
							<button
								onClick={isAdded ? null : handleAddBtn}
								className='py-2 px-1 flex w-36 justify-center items-center bg-custom-green  font-poppins font-bold text-lg text-white rounded-md hover:bg-opacity-80 transition duration-500 ease-in-out'
							>
								Add
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
