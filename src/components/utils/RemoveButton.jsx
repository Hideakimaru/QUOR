export default function RemoveButton({ onDelete }) {
	return (
		<div className='flex w-full justify-center md:justify-start'>
			<button
				data-testid='RemoveButton'
				className='py-2 px-1 flex w-36 justify-center items-center bg-custom-orange  font-poppins font-bold text-lg text-white rounded-md hover:bg-opacity-80 transition duration-500 ease-in-out'
				onClick={onDelete}
			>
				Remove
			</button>
		</div>
	);
}
