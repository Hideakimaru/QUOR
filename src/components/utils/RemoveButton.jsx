export default function RemoveButton({ onDelete }) {
	return (
		<div className='flex w-full justify-center md:justify-start'>
			<button
				data-testid='RemoveButton'
				className='py-2 px-1 flex w-36 justify-center items-center bg-custom-orange dark:bg-amber-300 font-poppins font-bold text-lg text-white rounded-md dark:hover:bg-opacity-67 hover:bg-opacity-80 transition duration-500 ease-in-out'
				onClick={onDelete}
			>
				Remove
			</button>
		</div>
	);
}
