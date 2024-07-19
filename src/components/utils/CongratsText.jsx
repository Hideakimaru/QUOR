export default function CongratsText({ congratsTextRef }) {
	return (
		<div
			ref={congratsTextRef}
			className='flex w-full justify-center md:justify-start italic font-bold text-sm md:text-base font-poetsen bg-gradient-to-r from-purple-500 to-green-500 dark:bg-gradient-to-t dark:from-purple-300 dark:to-green-300 fill-transparent bg-clip-text text-transparent'
		>
			You have watched all the episodes!
		</div>
	);
}
