import { Link } from "react-router-dom";
import GithubIcon from "@mui/icons-material/GitHub";
import KofiIcon from "@mui/icons-material/Coffee";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Footer() {
	const footerRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			const footerTl = gsap.timeline({
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top bottom",
					end: "-=222"
				}
			});

			footerTl.fromTo(
				footerRef.current,
				{ y: 222, opacity: 0 },
				{ y: 0, opacity: 1 }
			);
			footerTl.fromTo(
				".LOGO-TEXT",
				{ rotation: 0, opacity: 0 },
				{ rotation: 720, opacity: 1 }
			);
			footerTl.fromTo(
				".INSTAGRAM",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".KOFI",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".GITHUB",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".MAIL",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".TELEGRAM",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(".LINKS", { opacity: 0 }, { opacity: 1, ease: true });
			footerTl.fromTo(".COPYRIGHT", { opacity: 0 }, { opacity: 1, ease: true });
		},
		{ scope: footerRef }
	);
	return (
		<footer
			ref={footerRef}
			className='pt-3 px-3 pb-5 md:pt-5 md:px-5 md:pb-8 gap-5 flex flex-col w-full items-center mt-auto bg-slate-950'
		>
			<Link className='LOGO-TEXT' to='/' replace={true}>
				<span className='font-poetsen font-bold text-4xl hover:opacity-80 text-white'>
					MWL
				</span>
			</Link>
			<div className='flex flex-row gap-4 justify-center items-center text-white'>
				<a className='INSTAGRAM' href='#'>
					<InstagramIcon
						className='hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a className='KOFI' href='#'>
					<KofiIcon
						className='hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a className='GITHUB' href='https://github.com/Hideakimaru/MyWatchList'>
					<GithubIcon
						className='hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a className='MAIL' href='mailto:mywatchlist.support@gmail.com'>
					<MailIcon
						className='hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
				<a className='TELEGRAM' href='https://t.me/MWLsupport'>
					<TelegramIcon
						className='hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
						fontSize='medium'
					/>
				</a>
			</div>
			<div className='LINKS flex flex-row justify-center font-poppins font-bold text-sm'>
				<Link
					to='/privacy-policy'
					className='relative text-white after:absolute after:content-[""] after:left-0 after:bottom-[-8px] after:bg-white after:w-0 after:h-[2px] hover:after:w-full'
				>
					Privacy Policy
				</Link>
				<span className='block mx-4 w-[2px] h-5 bg-white'></span>
				<Link
					to='/terms-and-conditions'
					className='relative text-white after:absolute after:content-[""] after:left-0 after:bottom-[-8px] after:bg-white after:w-0 after:h-[2px] hover:after:w-full'
				>
					Terms &amp; Conditions
				</Link>
			</div>
			<p className='COPYRIGHT font-popins font-medium text-bold text-white'>
				&#xA9;&nbsp;Copyright 2024{" "}
				<span className='italic font-light '>Yehor Marchenko</span>
			</p>
		</footer>
	);
}
