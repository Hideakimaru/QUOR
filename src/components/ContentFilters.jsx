function FilterBtn({ text, onClick, isFilterActive, contentType }) {
	return (
		<button
			data-testid='FilterBtn'
			onClick={() => onClick(contentType)}
			className='w-fit py-4 px-8 flex justify-center items-center bg-slate-950 dark:bg-custom-dark-gray dark:hover:bg-custom-gray font-poppins font-medium text-lg text-white dark:text-white/87 rounded-full hover:bg-opacity-80 active:bg-opacity-100'
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
				data-testid='FilterNew'
				key='New'
				text='New'
				onClick={onClick}
				isFilterActive={isFilterActive === "new"}
				contentType='new'
			/>
			<FilterBtn
				data-testid='FilterMovies'
				key='Movies'
				text='Movies'
				onClick={onClick}
				isFilterActive={isFilterActive === "movie"}
				contentType='movie'
			/>
			<FilterBtn
				data-testid='FilterSeries'
				key='Series'
				text='Series'
				onClick={onClick}
				isFilterActive={isFilterActive === "series"}
				contentType='series'
			/>
			<FilterBtn
				data-testid='FilterAnime'
				key='Anime'
				text='Anime'
				onClick={onClick}
				isFilterActive={isFilterActive === "anime"}
				contentType='anime'
			/>
			<FilterBtn
				data-testid='FilterCartoons'
				key='Cartoons'
				text='Cartoons'
				onClick={onClick}
				isFilterActive={isFilterActive === "cartoon"}
				contentType='cartoon'
			/>
		</section>
	);
}
