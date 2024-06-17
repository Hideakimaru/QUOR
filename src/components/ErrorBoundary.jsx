import BoundaryBtn from "./BoundaryBtn";

export default function ErrorBoundary() {
	return (
		<div className='flex w-full flex-col gap-5 h-screen items-center justify-center'>
			<h1 className='text-4xl font-bold'>404 Page not Found</h1>
			<BoundaryBtn />
		</div>
	);
}
