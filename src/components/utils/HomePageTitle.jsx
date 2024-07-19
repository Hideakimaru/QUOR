import MovieIcon from "@mui/icons-material/Movie";

export default function HomePageTitle({ appName }) {
	return (
		<div className='title flex flex-col md:flex-row md:gap-[5px] w-full justify-center items-center font-poppins font-bold text-3xl md:text-5xl text-black dark:text-white/87'>
			<h1>Welcome to</h1>
			<h2 className='flex flex-row items-center gap-2'>
				{appName}
				<MovieIcon data-testid='MovieIcon' fontSize='large' />
			</h2>
		</div>
	);
}
