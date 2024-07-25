import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ImagePreview({ src, alt, onClick, isPreview }) {
	const previewContainerRef = useRef(null);
	const previewImageRef = useRef(null);

	gsap.config({ nullTargetWarn: false, trialWarn: false });

	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			let ctx = gsap.context(() => {
				gsap.fromTo(
					previewImageRef.current,
					{ opacity: 0 },
					{ opacity: 1, duration: 1, ease: "power1.inOut" }
				);
			}, previewContainerRef);

			return () => ctx.revert();
		},
		{ dependencies: [isPreview], scope: previewContainerRef }
	);

	return (
		<div
			ref={previewContainerRef}
			className='z-[1000] px-3 pt-0 pb-3 md:p-5 flex fixed overflow-hidden flex-col w-full h-screen justify-start sm:justify-center items-center top-0 left-0 bg-black dark:bg-custom-black bg-opacity-80 dark:bg-opacity-67'
		>
			<div className='flex w-full max-w-full sm:max-w-[400px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[400px] flex-col justify-start items-center'>
				<div className='py-2 flex w-full justify-end'>
					<button
						data-testid='CloseImagePreview'
						className='-mr-[7px] md:-mr-[18px] lg:-mr-[10px] xl:-mr-[20px] 2xl:-mr-[10px] flex w-10 h-10 font-roboto text-3xl lg:text-2xl tall:w-20
						tall:h-20 tall:text-5xl hover:text-opacity-100 font-normal bg-transparent active:scale-90 text-gray-500 hover:text-white 
						dark:text-white/38 dark:hover:text-white/87 items-center justify-center hover:bg-custom-dark-gray rounded-full'
						onClick={onClick}
					>
						&#x2715;
					</button>
				</div>
				<div className='max-h-[75vh] md:max-h-[85vh] 2xl:max-h-[550px] flex w-full justify-center items-start md:items-center'>
					<img
						ref={previewImageRef}
						className='w-full h-full'
						data-testid='PreviewImage'
						src={src}
						alt={alt}
					/>
				</div>
			</div>
		</div>
	);
}
