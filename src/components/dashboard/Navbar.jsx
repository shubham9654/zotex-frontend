import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { svgAssets } from '../../assets/image';
import { SearchBar } from './SearchBar';

export const  Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [activeRoute, setActiveRoute] = useState();

	const handleStartKyc = () => {
		navigate('/kyc');
	};

	useEffect(() => {
		const route = location.pathname.split('/');
		if (route.includes('kyc')) {
			setActiveRoute('kyc');
		} else {
			setActiveRoute('');
		}
	}, [location.pathname]);

	return (
		<div className="w-full !py-5 flex items-center z-50 fixed bg-[#F6F8F9]">
			<div className="pl-10 cursor-pointer absolute">
				<Link to="/">
					<h6 className="text-3xl font-medium font-poppins">Admin Panel</h6>
				</Link>
			</div>
			<div className="pl-5 pr-2.5 ml-[300px] mr-5 flex grow items-center justify-between">
				<SearchBar />
				<div className="flex items-center">
					<button
						className="px-4 py-2.5 mx-2.5 rounded-[10px] bg-black text-white font-medium font-poppins"
						onClick={() => handleStartKyc()}
					>
						{activeRoute === 'kyc' ? 'Share My Screen' : '+ Start'}
					</button>
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