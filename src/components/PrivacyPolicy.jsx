import { Link, ScrollRestoration } from "react-router-dom";
import GoArrow from "./GoArrow.jsx";
import Header from "./CustomHeader.jsx";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
	const [isGoTopBtnShow, setIsGoTopBtnShow] = useState(false);

	//Go to Top Arrow logic
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 150) {
				setIsGoTopBtnShow(true);
			} else {
				setIsGoTopBtnShow(false);
			}
		});
	}, []);

	function handleGoTopClick(e) {
		e.stopPropagation();
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<Header />
			<div className='container mt-20 gap-5 mx-auto px-3 py-8 sm:px-10 sm:py-32 md:p-20 flex flex-col text-black dark:text-white/87'>
				<h1
					data-testid='mainTitle'
					className='font-bold text-2xl md:text-4xl text-center'
				>
					Privacy Policy
				</h1>
				<p>
					<strong>Effective Date: 07/20/2024</strong>
				</p>
				<p>
					Welcome to Quor! We value your privacy and are committed to protecting
					your personal information. This Privacy Policy explains how we
					collect, use, and safeguard your data when you use our services.
				</p>

				<h2>
					<b>1.</b> Information We Collect
				</h2>
				<p>
					<strong>Personal Information</strong>: When you sign up for Quor, we
					collect personal information such as your name, email address, and any
					other information you choose to provide.
				</p>
				<p>
					<strong>Usage Data</strong>: We collect information about how you
					interact with our application, including the content you add to your
					watchlist, your preferences, and activity logs.
				</p>

				<h2>
					<b>2.</b> How We Use Your Information
				</h2>
				<p>We use the information we collect to:</p>
				<ul>
					<li>Provide and improve our services.</li>
					<li>Personalize your experience on Quor.</li>
					<li>
						Communicate with you, including sending updates and notifications.
					</li>
					<li>
						Analyze usage patterns to enhance our application’s functionality.
					</li>
				</ul>

				<h2>
					<b>3.</b> Sharing Your Information
				</h2>
				<p>
					We do not sell, trade, or otherwise transfer your personal information
					to outside parties except as described below:
				</p>
				<p>
					<strong>Service Providers</strong>: We may share your information with
					third-party service providers who assist us in operating our website,
					conducting our business, or servicing you.
				</p>
				<p>
					<strong>Legal Requirements</strong>: We may disclose your information
					if required by law or in response to valid requests by public
					authorities.
				</p>

				<h2>
					<b>4.</b> Data Security
				</h2>
				<p>
					We implement a variety of security measures to maintain the safety of
					your personal information. However, please be aware that no method of
					electronic storage is 100% secure.
				</p>

				<h2>
					<b>5.</b> Your Rights
				</h2>
				<p>You have the right to:</p>
				<ul>
					<li>Access the personal information we hold about you.</li>
					<li>Request correction or deletion of your personal information.</li>
					<li>Opt-out of certain data collection and use practices.</li>
				</ul>

				<h2>
					<b>6.</b> Changes to This Privacy Policy
				</h2>
				<p>
					We may update this Privacy Policy from time to time. We will notify
					you of any changes by posting the new Privacy Policy on this page.
				</p>

				<h2>
					<b>7.</b> Contact Us
				</h2>
				<p>
					If you have any questions about this Privacy Policy, please contact us
					at:
				</p>
				<p>
					<strong>Email</strong>:{" "}
					<a
						className='underline hover:no-underline'
						href='mailto:quor.assist@gmail.com'
					>
						quor.assist@gmail.com
					</a>
				</p>

				<p>Thank you for using Quor. Your privacy is important to us.</p>
				<div className='pt-10 flex flex-row justify-center items-center gap-5'>
					<Link
						className='flex flex-row w-fit items-center justify-center py-4 px-8 bg-green-600 dark:bg-green-500 rounded-md font-roboto font-bold text-white dark:text-white/87 bg-opacity-50 hover:bg-opacity-100 dark:bg-opacity-38 dark:hover:bg-opacity-100'
						to='/'
					>
						I&apos;m Agree
					</Link>
				</div>
				{isGoTopBtnShow && <GoArrow onClick={handleGoTopClick} />}
			</div>
			<ScrollRestoration />
		</>
	);
}
