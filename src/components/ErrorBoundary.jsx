import { Link } from "react-router-dom";

export default function ErrorBoundary() {
	return (
		<div className='grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 font'>
			<div className='text-center'>
				<p className='text-3xl font-bold md:text-5xl text-custom-green'>404</p>
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl'>
					Page not found
				</h1>
				<p className='mt-6 text-base leading-7 text-gray-600'>
					Sorry, we couldn&#x2019;t find the page you&#x2019;re looking for.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						to='/'
						href='#'
						className='rounded-md bg-custom-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 '
					>
						Go back home
					</Link>
					<a
						href='mailto:mywatchlist.support@gmail.com'
						className='text-sm font-semibold text-gray-900'
					>
						Contact support <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</div>
		</div>
	);
}
