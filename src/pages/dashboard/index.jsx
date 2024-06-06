import { Table } from "../../components/dashboard/table/Table"
import { tableStatusValue } from "../../data/tableData";

const data = [
	{ clientName: 'Ankit Singh', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', status: 'Incomplete', steps: 'dfdfdf0', source: '', rm: 'AK Singh', verifier: 'VK Bansal', actions: 'dd' },
	{ clientName: 'Ankit Singh', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', status: 'Verified', steps: 'dfdfdf0', source: '', rm: 'AK Singh', verifier: 'VK Bansal', actions: 'dd' },
	{ clientName: 'Ankit Singh', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', status: 'Rejected', steps: 'dfdfdf0', source: '', rm: 'AK Singh', verifier: 'VK Bansal', actions: 'dd' },
	{ clientName: 'Ankit Singh', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', status: 'Resubmitted', steps: 'dfdfdf0', source: '', rm: 'AK Singh', verifier: 'VK Bansal', actions: 'dd' },
	{ clientName: 'Ankit Singh', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', status: 'Final Rejected', steps: 'dfdfdf0', source: '', rm: 'AK Singh', verifier: 'VK Bansal', actions: 'dd' }
];


const Dashboard = () => {

	const columns = [
		{ Header: 'Client Name', accessor: 'clientName', minWidth: 130 },
		{ Header: 'Mobile Number', accessor: 'mobileNumber', minWidth: 130 },
		{ Header: 'Created At', accessor: 'createdAt', minWidth: 130 },
		{ Header: 'Last Updated At', accessor: 'updatedAt', minWidth: 130 },
		{
			Header: 'Status',
			accessor: 'status',
			minWidth: 150,
			Cell: ({ row }) => (
				<div
					className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppins"
					style={{
						backgroundColor: tableStatusValue[row.original.status]?.bgColor
					}}
				>
					{row.original.status}
				</div>
			)
		},
		{
			Header: 'Steps',
			accessor: 'steps',
			minWidth: 150,
			// Cell: ({ row }) => (
			// 	<StepProgressBar
			// 		selectedStep={7}
			// 		steps={steps || []}
			// 		setSteps={setSteps}
			// 		width="w-full"
			// 		circleDim="10px"
			// 		circleRadius="1px"
			// 		lineDim="h-[2px]"
			// 	/>
			// )
		},
		{ Header: 'Source', accessor: 'source', minWidth: 90 },
		{ Header: 'RM', accessor: 'rm', minWidth: 100 },
		{ Header: 'Verifier', accessor: 'verifier', minWidth: 100 },
		{
			Header: 'Actions',
			accessor: 'actions',
			minWidth: 60,
			// 	Cell: ({ row }) => (
			// 		<MyPopover
			// 			PopoverParentComp={PopoverParentComp}
			// 			PopoverChildComp={PopoverChildComp}
			// 		/>
			// 	)
		}
	];


	return (
		<div className="w-full flex flex-col ">
			<div className="w-full py-5 px-[25px] mb-[30px] overflow-x-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
				<Table columns={columns} data={[...data, ...data]} displayBlock={true} />
			</div>
		</div>
	)
}

export default Dashboard;
