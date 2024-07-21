import { Link, ScrollRestoration } from "react-router-dom";
import GoArrow from "./GoArrow.jsx";
import Header from "./CustomHeader.jsx";

export default function TermsAndConditions() {
	return (
		<>
			<Header />
			<div className='container mt-20 gap-5 mx-auto p-3 sm:p-10 md:p-20 flex flex-col text-black dark:text-white/87'>
				<h1
					data-testid='mainTitle'
					className='font-bold text-2xl md:text-4xl text-center'
				>
					Terms & Conditions
				</h1>
				<p>
					<strong>Effective Date: 07/20/2024</strong>
				</p>
				<p>
					Welcome to Quor! By using our services, you agree to comply with and
					be bound by the following terms and conditions. Please review them
					carefully.
				</p>

				<h2>
					<b>1.</b> Acceptance of Terms
				</h2>
				<p>
					By accessing or using Quor, you agree to be bound by these terms and
					conditions and our Privacy Policy. If you do not agree to these terms,
					please do not use our services.
				</p>

				<h2>
					<b>2.</b> Description of Service
				</h2>
				<p>
					Quor provides a platform for tracking movies, TV shows, anime, and
					cartoons. You can add content to your watchlist, track your progress,
					and manage your video content easily.
				</p>

				<h2>
					<b>3.</b> User Responsibilities
				</h2>
				<p>As a user, you agree to:</p>
				<ul>
					<li>Provide accurate and up-to-date information.</li>
					<li>
						Use Quor in compliance with all applicable laws and regulations.
					</li>
					<li>Respect the rights and privacy of other users.</li>
				</ul>

				<h2>
					<b>4.</b> Prohibited Activities
				</h2>
				<p>You agree not to:</p>
				<ul>
					<li>Use Quor for any unlawful purpose.</li>
					<li>
						Engage in any activity that could harm or disrupt our services or
						servers.
					</li>
					<li>
						Attempt to gain unauthorized access to any part of our service or
						related systems.
					</li>
				</ul>

				<h2>
					<b>5.</b> Intellectual Property
				</h2>
				<p>
					All content and materials on Quor, including but not limited to text,
					graphics, logos, and software, are the property of Quor or its
					licensors and are protected by applicable intellectual property laws.
				</p>

				<h2>
					<b>6.</b> Termination
				</h2>
				<p>
					We reserve the right to terminate or suspend your access to Quor at
					our discretion, without notice, for conduct that we believe violates
					these terms or is harmful to other users of the service, us, or third
					parties, or for any other reason.
				</p>

				<h2>
					<b>7.</b> Limitation of Liability
				</h2>
				<p>
					Quor is provided on an &quot;as is&quot; and &quot;as available&quot;
					basis. We make no warranties, either express or implied, regarding the
					service. To the fullest extent permitted by law, we disclaim all
					liability for any damages arising out of or in connection with your
					use of Quor.
				</p>

				<h2>
					<b>8.</b> Changes to Terms
				</h2>
				<p>
					We may update these terms and conditions from time to time. We will
					notify you of any changes by posting the new terms on this page. Your
					continued use of Quor after such changes constitutes your acceptance
					of the new terms.
				</p>

				<h2>
					<b>9.</b> Contact Us
				</h2>
				<p>
					If you have any questions about these Terms & Conditions, please
					contact us at:
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

				<p>Thank you for using Quor!</p>

				<div className='pt-10 flex flex-row justify-center items-center gap-5'>
					<Link
						className='flex flex-row w-fit items-center justify-center py-4 px-8 bg-green-600 dark:bg-green-500 rounded-md font-roboto font-bold text-white dark:text-white/87 bg-opacity-50 hover:bg-opacity-100 dark:bg-opacity-38 dark:hover:bg-opacity-100'
						to='/'
					>
						Yes, I&apos;m Agree
					</Link>
				</div>
				<GoArrow />
			</div>
			<ScrollRestoration />
		</>
	);
}
