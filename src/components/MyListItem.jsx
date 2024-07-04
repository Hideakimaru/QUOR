import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore.js";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess.js";
import styled from "styled-components";

const Button = styled.button`
	background: ${props => (props.disabled ? "rgba(100, 116, 139, 0.3)" : "")};
	border-radius: ${props => (props.disabled ? "9999px" : "")};
	color: ${props => (props.disabled ? "#fff" : "")};
	opacity: ${props => (props.disabled ? "0.8" : "1")};
	pointer-events: ${props => (props.disabled ? "none" : "auto")};

	&:active {
		transform: ${props => (props.disabled ? "none" : "")};
	}
`;

export default function MyListItem({ title, isUnfolded, onClick, isDisabled }) {
	return (
		<div className='mb-10 flex w-full flex-col'>
			<div className='gap-2 flex flex-row w-full justify-center items-stretch'>
				<h1 className='flex w-fit font-poppins font-bold text-2xl md:text-4xl text-black uppercase'>
					{title}
				</h1>
				<div className='flex w-full'>
					<div className='mt-auto flex w-full h-[2px] bg-slate-950'></div>
				</div>
				<div className='flex w-fit justify-center items-center cursor-pointer'>
					<Button
						onClick={onClick}
						className='p-4 flex w-7 h-7 justify-center items-center hover:bg-slate-900 hover:bg-opacity-80 hover:text-white rounded-full active:scale-90 active:duration-0 transition duration-500 ease-in-out'
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
