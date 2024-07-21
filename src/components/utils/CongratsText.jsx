export default function CongratsText({ congratsTextRef }) {
	return (
		<div
			ref={congratsTextRef}
			className='flex w-full justify-center md:justify-start italic font-bold text-base md:text-lg font-poetsen bg-gradient-to-r from-purple-600 to-green-600 dark:bg-gradient-to-br dark:from-purple-500 dark:to-green-500 fill-transparent bg-clip-text text-transparent'
		>
			You have watched all the episodes!
		</div>
	);
}
