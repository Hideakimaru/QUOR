export default function CongratsText({ congratsTextRef }) {
	return (
		<div
			ref={congratsTextRef}
			className='flex w-full justify-center md:justify-start italic font-bold text-sm md:text-base font-poetsen bg-gradient-to-r from-purple-500 to-green-500 fill-transparent bg-clip-text text-transparent'
		>
			You have watched all the episodes!
		</div>
	);
}
