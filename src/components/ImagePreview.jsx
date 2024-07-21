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
			className='z-[1000] p-5 flex fixed flex-col w-full max-h-screen h-screen justify-center items-center top-0 left-0 bg-black dark:bg-custom-black bg-opacity-80 dark:bg-opacity-67'
		>
			<div className='flex w-full max-w-full md:max-w-[600px] lg:max-w-[800px] xl:max-w-[400px] flex-col justify-center items-center'>
				<div className='-mr-[21px] py-2 flex w-full justify-end'>
					<button
						data-testid='CloseImagePreview'
						className='flex w-10 h-10 font-roboto text-3xl lg:text-2xl tall:text-5xl hover:text-opacity-100 font-normal bg-transparent active:scale-90 text-gray-500 hover:text-white 
						dark:text-white/38 dark:hover:text-white/87 items-center justify-center hover:bg-custom-dark-gray rounded-full'
						onClick={onClick}
					>
						&#x2715;
					</button>
				</div>
				<div className='flex w-full max-h-[80vh] justify-center items-center'>
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
