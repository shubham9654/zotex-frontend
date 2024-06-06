
export const TableHeader = ({ title, numberOfApplications }) => {
	return (
		<div className="flex items-center">
			<h6 className="mr-2.5 text-[22px] leading-[33px] font-semibold font-poppinsSemiBold">
				{title}
			</h6>
			{
				numberOfApplications && (
					<span className="px-3 py-[1px] rounded-md	inline-flex items-center justify-center font-semibold font-poppinsSemiBold bg-[#FFF1D7]">
						{numberOfApplications}
					</span>
				)
			}
		</div>
	);
};