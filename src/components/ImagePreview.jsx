export default function ImagePreview({ src, alt, onClick }) {
	return (
		<div className='z-[1000000] py-3 px-5 flex fixed flex-col w-full h-screen justify-center items-center top-0 left-0 bg-black bg-opacity-80'>
			<div className='flex w-full max-w-auto sm:max-w-[450px] lg:max-w-[350px] flex-col'>
				<div className='flex w-full justify-end'>
					<button
						data-testid='CloseImagePreview'
						className='flex font-roboto text-lg text-opacity-30 hover:text-opacity-100 font-normal bg-transparent active:scale-90 text-white items-center justify-center'
						onClick={onClick}
					>
						&#x2715;
					</button>
				</div>
				<div className='flex w-full'>
					<img
						data-testid='PreviewImage'
						className='w-full h-auto'
						src={src}
						alt={alt}
					/>
				</div>
			</div>
		</div>
	);
}
