import { Link, useNavigate } from "react-router-dom";
import { Table } from "../../components/dashboard/table/Table";
import { tableStatusValue } from "../../data/tableData";
import { SearchBar } from "../../components/dashboard/SearchBar";
import Button from "../../components/dashboard/ui/Button";
import { Pagination } from "../../components/dashboard/table/Pagination";

const data = [
	{
		clientName: "Ankit Singh",
		mobileNumber: "7014587528",
		createdAt: "10 Dac 2022",
		updatedAt: "16 Dec 2022",
		status: "Incomplete",
		steps: "dfdfdf0",
		source: "",
		rm: "AK Singh",
		verifier: "VK Bansal",
		actions: "dd",
	},
	{
		clientName: "Ankit Singh",
		mobileNumber: "7014587528",
		createdAt: "10 Dac 2022",
		updatedAt: "16 Dec 2022",
		status: "Verified",
		steps: "dfdfdf0",
		source: "",
		rm: "AK Singh",
		verifier: "VK Bansal",
		actions: "dd",
	},
	{
		clientName: "Ankit Singh",
		mobileNumber: "7014587528",
		createdAt: "10 Dac 2022",
		updatedAt: "16 Dec 2022",
		status: "Rejected",
		steps: "dfdfdf0",
		source: "",
		rm: "AK Singh",
		verifier: "VK Bansal",
		actions: "dd",
	},
	{
		clientName: "Ankit Singh",
		mobileNumber: "7014587528",
		createdAt: "10 Dac 2022",
		updatedAt: "16 Dec 2022",
		status: "Resubmitted",
		steps: "dfdfdf0",
		source: "",
		rm: "AK Singh",
		verifier: "VK Bansal",
		actions: "dd",
	},
	{
		clientName: "Ankit Singh",
		mobileNumber: "7014587528",
		createdAt: "10 Dac 2022",
		updatedAt: "16 Dec 2022",
		status: "Final Rejected",
		steps: "dfdfdf0",
		source: "",
		rm: "AK Singh",
		verifier: "VK Bansal",
		actions: "dd",
	},
];

const Dashboard = () => {
	const navigate = useNavigate();
	const columns = [
		{ Header: "Client Name", accessor: "clientName", minWidth: 130 },
		{ Header: "Mobile Number", accessor: "mobileNumber", minWidth: 130 },
		{ Header: "Created At", accessor: "createdAt", minWidth: 130 },
		{ Header: "Last Updated At", accessor: "updatedAt", minWidth: 130 },
		{
			Header: "Status",
			accessor: "status",
			minWidth: 150,
			Cell: ({ row }) => (
				<div
					className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppins"
					style={{
						backgroundColor: tableStatusValue[row.original.status]?.bgColor,
					}}
				>
					{row.original.status}
				</div>
			),
		},
		{
			Header: "Steps",
			accessor: "steps",
			minWidth: 150,
		},
		{ Header: "Source", accessor: "source", minWidth: 90 },
		{ Header: "RM", accessor: "rm", minWidth: 100 },
		{ Header: "Verifier", accessor: "verifier", minWidth: 100 },
		{
			Header: "Actions",
			accessor: "actions",
			minWidth: 60,
			Cell: () => (
				<div className="flex items-center justify-center gap-2">
					<Link to="/dashboard/edit-product">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#000"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-pencil cursor-pointer"
						>
							<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
							<path d="m15 5 4 4" />
						</svg>
					</Link>
					{/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye cursor-pointer"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> */}
				</div>
			),
		},
	];

	const handleAddProduct = () => {
		navigate('/dashboard/edit-product');
	}

	return (
		<div className="w-full flex flex-col ">
			<div className="w-full py-[20px] px-2 md:!px-[24px] mb-[30px] overflow-x-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<div className="mb-4 flex items-center justify-between">
					<SearchBar />
					<Button text="+ Add Product" handleClick={handleAddProduct} />
				</div>
				<Table
					columns={columns}
					data={[...data, ...data]}
					displayBlock={true}
				/>
				<div>
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
