export default function Wrapper({ children }) {
	return (
		<main className='mt-28 md:mt-32 w-full max-w-full sm:max-w-[600px] md:max-w-[728px] lg:max-w-[800px] mx-auto px-5 pb-12 overflow-hidden'>
			{children}
		</main>
	);
}
