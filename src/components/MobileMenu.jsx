import { NavLink } from "react-router-dom";
import { X } from "./BurgerMenu";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";

const navRoutes = [
	{
		index: 0,
		name: "Home",
		path: "/"
	},
	{
		index: 1,
		name: "Add",
		path: "/app"
	},
	{
		index: 2,
		name: "My List",
		path: "/app/my-list"
	}
];

export default function MobileMenu({ onClick, closeBtnRef, onLinkClick }) {
	const mobileMenuRef = useRef(null);

	gsap.config({ nullTargetWarn: false });

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.fromTo(
				"#MOBILE-MENU__LINKS",
				{ opacity: 0, x: 100 },
				{ opacity: 1, x: 0, stagger: 1, ease: true }
			);
		},
		{ scope: mobileMenuRef }
	);
	return (
		<div
			ref={mobileMenuRef}
			className='z-[1000] px-2 md:px-4 flex flex-col w-full h-screen overflow-hidden bg-custom-black '
		>
			<div className='px-3 md:px-5 pt-8 pb-5 flex w-full justify-end items-center'>
				<X onClick={onClick} closeBtnRef={closeBtnRef} />
			</div>
			<div className='flex flex-col w-full h-full justify-center'>
				<ul className='flex flex-col gap-5 list-none'>
					{navRoutes.map(route => {
						return (
							<li
								className='p-5 flex justify-center items-center border-b last:border-none border-white/87'
								key={route.index}
							>
								<NavLink
									onClick={onLinkClick}
									id='MOBILE-MENU__LINKS'
									className='font-poppins font-bold text-white/87 text-2xl ease-in-out hover:text-green-500'
									to={route.path}
									style={({ isActive, isPending }) => {
										return {
											color: isActive
												? "#22c55e"
												: isPending
												? "rgba(255, 255, 255, 0.87)"
												: ""
										};
									}}
									end
								>
									{route.name}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
