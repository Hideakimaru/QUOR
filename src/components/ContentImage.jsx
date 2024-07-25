export default function ContentImage({ imageSrc, altText, onClick }) {
	return (
		<div className='relative flex md:min-w-36 md:h-40'>
			<div className='flex w-48 h-64 md:w-36 md:h-48 left-0 hover:opacity-80 active:opacity-100 active:scale-90 transition duration-500 ease-in-out rounded-md md:absolute md:-top-[40px] md:left-auto overflow-hidden cursor-pointer active:duration-0'>
				<img
					data-testid='ContentImage'
					className='w-full h-auto'
					src={imageSrc}
					alt={altText}
					onClick={onClick}
				/>
			</div>
		</div>
	);
}
