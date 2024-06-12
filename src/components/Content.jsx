import Select from 'react-select';

const dot = (color = 'transperent') => ({
	alignItems: 'center',
	display: 'flex',

	':before': {
		backgroundColor: color,
		borderRadius: 10,
		content: '" "',
		display: 'block',
		marginRight: 8,
		height: 10,
		width: 10
	}
});

export default function Content({
	imageSrc,
	altText,
	title,
	onClick,
	onDelete,
	onSelectChanges
}) {
	const colorStyles = {
		control: styles => ({
			...styles,
			backgroundColor: '#fff',
			width: '175px',
			borderRadius: '0',
			fontFamily: 'Roboto',
			fontWeight: '600',
			fontSize: '16px',
			lineHeight: '19px',
			border: '1px solid #000',
			color: '#000',
			boxShadow: 'none',
			':hover': {
				cursor: 'pointer',
				border: '1px solid #000'
			}
		}),
		option: styles => ({
			...styles,
			backgroundColor: '#fff',
			fontFamily: 'Roboto',
			fontSize: '14px',
			lineHeight: '17px',
			color: '#000',
			':hover': {
				backgroundColor: 'rgba(46, 204, 113, 0.2)'
			}
		}),
		ValueContainer: styles => ({
			...styles,
			display: 'flex',
			justifyContent: 'center',
			padding: '0'
		}),
		indicatorSeparator: styles => ({
			...styles,
			backgroundColor: '#000'
		}),
		dropdownIndicator: styles => ({
			...styles,
			color: '#000',
			':hover': {
				color: '#000'
			}
		}),
		singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
	};
	const colourOptions = [
		{ value: 'completed', label: 'Completed', color: '#ccc' },
		{ value: 'watching', label: 'Watching', color: '#2ecc71' },
		{ value: 'planed', label: 'Planed', color: '#3498db' }
	];
	return (
		<div className='pt-8 px-9 pb-16 flex w-full flex-row bg-white'>
			<div className='flex relative min-w-36 justify-center items-center mr-14'>
				<div className='flex absolute w-36 h-48 left-0 top-m-14 hover:opacity-80 active:opacity-100 active:scale-90'>
					<img
						className='w-full h-auto'
						src={imageSrc}
						alt={altText}
						onClick={onClick}
					/>
				</div>
			</div>
			<div className='flex w-full flex-col justify-between gap-7'>
				<div className='flex w-full '>
					<h1 className='font-roboto font-bold relative text-2xl uppercase text-black'>
						{title}
					</h1>
				</div>
				<div className='flex w-full flex-row items-center'>
					<div className='flex max-w-64 mr-5'>
						<Select
							className='react-select-container'
							classNamePrefix='react-select'
							defaultValue={colourOptions[2]}
							options={colourOptions}
							styles={colorStyles}
							onChange={onSelectChanges}
							isSearchable={false}
						/>
					</div>
					<div className='flex w-full'>
						<button
							className='flex w-12 h-12 rounded-full bg-custom-orange hover:bg-opacity-80 active:scale-90 justify-center items-center'
							onClick={onDelete}
						>
							<img
								src='https://i.imgur.com/8IW9zgv.png'
								alt='Remove ico'
								width='15'
								height='15'
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
