import { Link } from 'react-router-dom';

import { svgAssets } from '../../assets/image';
import { useDialog } from '../../stores/dialog.store';

export const  Navbar = () => {
	const { isOpen } = useDialog(
    (state) => state
  )

	return (
		<div className={`w-full !py-5 flex items-center z-50  fixed ${isOpen ? 'bg-transparent' : 'bg-[#F6F8F9]'}`}>
			<div className="pl-10 cursor-pointer absolute">
				<Link to="/dashboard">
					<h6 className="text-3xl font-medium font-poppins">Admin Panel</h6>
				</Link>
			</div>
			<div className="pl-5 pr-2.5 ml-[300px] mr-5 flex grow items-center justify-between">
				<h2 className="text-[22px] font-medium font-poppins">Product List</h2>
				<div className="flex items-center">
					<img className="mx-2.5 cursor-pointer" alt="notification" src={svgAssets.navbar.notification} />
					<Link to="/login" className="flex items-center">
						<img className="mx-2.5 cursor-pointer" alt="user_img" src={svgAssets.navbar.defaultUser} />
						<span className="ml-1.5 text-[#383637] font-medium font-poppins">Alex Dam</span>
					</Link>
				</div>
			</div>
		</div>
	);
};