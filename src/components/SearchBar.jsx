export default function SearchBar({ value, onChange }) {
	return (
		<div className='flex w-full mb-14 items-center'>
			<input
				className='border border-black focus:border-custom-green focus:border-2 flex w-full justify-center items-center py-2 px-5 text-black font-poppins text-xl focus:placeholder:opacity-0 placeholder:font-poppins placeholder:font-light placeholder:text-xl placeholder:text-black placeholder:text-opacity-70'
				placeholder='Enter Title'
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
