import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore.js";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess.js";
import styled from "styled-components";
import { useTheme } from "./utils/ThemeHooks";

export default function MyListItem({ title, isUnfolded, onClick, isDisabled }) {
	const { theme } = useTheme();

	const Button = styled.button`
		background: ${props =>
			props.disabled
				? theme === "light"
					? "rgba(100, 116, 139, 0.38)"
					: "rgba(63, 63, 63, 1)"
				: ""};
		border-radius: ${props => (props.disabled ? "9999px" : "")};
		color: ${props =>
			props.disabled ? (theme === "light" ? "#fff" : "#3f3f3f") : ""};
		cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
		&:hover {
			background-color: ${props =>
				props.disabled
					? theme === "light"
						? "rgba(100, 116, 139, 0.38)"
						: "rgba(63, 63, 63, 1)"
					: ""};
		}

		&:active {
			transform: ${props => (props.disabled ? "none" : "")};
		}
	`;
	return (
		<div className='mb-10 flex w-full flex-col'>
			<div className='gap-2 flex flex-row w-full justify-center items-stretch'>
				<h1 className='flex w-fit font-poppins font-bold text-2xl md:text-4xl text-black dark:text-white/87 uppercase'>
					{title}
				</h1>
				<div className='flex w-full'>
					<div className='mt-auto flex w-full h-[2px] bg-slate-950 dark:bg-custom-dark-gray'></div>
				</div>
				<div className='flex w-fit justify-center items-center cursor-pointer'>
					<Button
						data-testid='UnfoldBtn'
						onClick={onClick}
						className='p-4 flex w-7 h-7 justify-center items-center hover:bg-slate-900 dark:hover:bg-custom-gray dark:hover:bg-opacity-100 hover:bg-opacity-80 dark:text-white/87 hover:text-white dark:hover:text-white/87 rounded-full active:scale-90 active:duration-0 transition duration-500 ease-in-out'
						disabled={isDisabled}
					>
						{isUnfolded ? (
							<UnfoldLessIcon sx={{ fontSize: "25px" }} />
						) : (
							<UnfoldMoreIcon sx={{ fontSize: "25px" }} />
						)}
					</Button>
				</div>
			</div>
		</div>
	);
}
