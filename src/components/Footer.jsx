import { Link } from "react-router-dom";
import GithubIcon from "@mui/icons-material/GitHub";
import KofiIcon from "@mui/icons-material/Coffee";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer({ footerRef }) {
	return (
		<footer
			ref={footerRef}
			className='pt-3 px-3 pb-5 md:pt-5 md:px-5 md:pb-8 gap-5 flex flex-col w-full items-center mt-auto bg-slate-950 dark:bg-custom-dark-gray'
		>
			<Link className='LOGO-TEXT' to='/' replace={true}>
				<span className='font-poetsen font-bold text-4xl hover:opacity-80 text-white dark:text-white/87'>
					QUOR
				</span>
			</Link>
			<div className='flex flex-row gap-4 justify-center items-center text-white dark:text-white/87'>
				<a
					data-testid='InstagramLink'
					className='INSTAGRAM'
					href='https://www.instagram.com/quorsupport/'
				>
					<InstagramIcon
						data-testid='InstagramIcon'
						className='hover:text-custom-green dark:hover:text-green-300 hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a
					data-testid='KofiLink'
					className='KOFI'
					href='https://ko-fi.com/quorwebapp'
				>
					<KofiIcon
						data-testid='KofiIcon'
						className='hover:text-custom-green dark:hover:text-green-300 hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a
					data-testid='GithubLink'
					className='GITHUB'
					href='https://github.com/Hideakimaru/MyWatchList'
				>
					<GithubIcon
						data-testid='GithubIcon'
						className='hover:text-custom-green dark:hover:text-green-300 hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a
					data-testid='MailLink'
					className='MAIL'
					href='mailto:quor.assist@gmail.com'
				>
					<MailIcon
						data-testid='MailIcon'
						className='hover:text-custom-green dark:hover:text-green-300 hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a
					data-testid='TelegramLink'
					className='TELEGRAM'
					href='https://t.me/QuorSupportBot'
				>
					<TelegramIcon
						data-testid='TelegramIcon'
						className='hover:text-custom-green dark:hover:text-green-300 hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
			</div>
			<div className='LINKS flex flex-row justify-center font-poppins font-bold text-sm'>
				<Link
					to='/privacy-policy'
					className='relative text-white dark:text-white/87 after:absolute after:content-[""] after:left-0 after:bottom-[-8px] after:bg-white after:w-0 after:h-[2px] hover:after:w-full'
				>
					Privacy Policy
				</Link>
				<span className='block mx-4 w-[2px] h-5 bg-white'></span>
				<Link
					to='/terms-and-conditions'
					className='relative text-white dark:text-white/87 after:absolute after:content-[""] after:left-0 after:bottom-[-8px] after:bg-white after:w-0 after:h-[2px] hover:after:w-full'
				>
					Terms &amp; Conditions
				</Link>
			</div>
			<p className='COPYRIGHT font-popins font-medium text-bold text-white dark:text-white/87'>
				&#xA9;&nbsp;Copyright 2024{" "}
				<span className='italic font-light'>Yehor Marchenko</span>
			</p>
		</footer>
	);
}
