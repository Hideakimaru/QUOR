export default function MainWrapper({ children }) {
	return (
		<div className='flex w-full flex-col flex-wrap min-h-screen'>
			{children}
		</div>
	);
}
