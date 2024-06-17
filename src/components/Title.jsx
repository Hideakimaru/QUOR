export default function Title({ text }) {
	return (
		<div className='flex w-full justify-center pt-9 px-9 pb-3.5'>
			<h1 className='font-semibold font-poppins text-4xl text-black uppercase'>
				{text}
			</h1>
		</div>
	);
}
