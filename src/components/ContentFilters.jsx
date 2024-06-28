function FilterBtn({ text, onClick, isFilterActive, contentType }) {
	return (
		<button
			onClick={() => onClick(contentType)}
			className='w-fit py-4 px-8 flex justify-center items-center bg-slate-950 font-poppins font-medium text-lg text-white rounded-full hover:bg-opacity-80 active:bg-opacity-100'
			style={{
				background: isFilterActive
					? "linear-gradient(to right, #a855f7, #22c55e)"
					: ""
			}}
		>
			{text}
		</button>
	);
}

export default function ContentFilters({ onClick, isFilterActive }) {
	return (
		<section className='gap-3 sm:gap-6 md:gap-4 md:max-w-[500px] md:mx-auto lg:max-w-max px-5 pt-8 pb-0 flex flex-wrap w-full flex-row justify-center items-center'>
			<FilterBtn
				key='New'
				text='New'
				onClick={onClick}
				isFilterActive={isFilterActive === "new"}
				contentType='new'
			/>
			<FilterBtn
				key='Movies'
				text='Movies'
				onClick={onClick}
				isFilterActive={isFilterActive === "movie"}
				contentType='movie'
			/>
			<FilterBtn
				key='Series'
				text='Series'
				onClick={onClick}
				isFilterActive={isFilterActive === "series"}
				contentType='series'
			/>
			<FilterBtn
				key='Anime'
				text='Anime'
				onClick={onClick}
				isFilterActive={isFilterActive === "anime"}
				contentType='anime'
			/>
			<FilterBtn
				key='Cartoons'
				text='Cartoons'
				onClick={onClick}
				isFilterActive={isFilterActive === "cartoon"}
				contentType='cartoon'
			/>
		</section>
	);
}
