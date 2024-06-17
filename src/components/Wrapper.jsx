export default function Wrapper({ children }) {
	return (
		<main
			className={`mt-8 md:mt-16 w-full sm:max-w-full md:max-w-[500px] lg:max-w-[800px] mx-auto px-5 pb-12 overflow-hidden`}
		>
			{children}
		</main>
	);
}
