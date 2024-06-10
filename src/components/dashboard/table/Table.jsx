import { useTable } from 'react-table';

export const Table = ({ columns, data, displayBlock, isLoading }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

	return (
		<div className="w-full grid">
			<table
				{...getTableProps()}
				className="table-auto text-center h-full w-full overflow-x-auto scroll"
				style={{
					display: displayBlock && 'block'
				}}
			>
				<thead>
					{headerGroups.map((headerGroup, i1) => (
						<tr key={`head_group_${i1}`} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, i2) => (
								<th
									key={`head_group_header_${i2}`}
									{...column.getHeaderProps()}
									className="pt-2 py-4 text-[15px] text-[#9A9A9A] tracking-wide leading-[22px] font-medium font-poppins"
									style={{
										width: column.width,
										minWidth: column.minWidth
									}}
								>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()} className={isLoading ? "flex items-center justify-center my-20" : ""}>
					{!isLoading ? rows.map((row, i1) => {
						prepareRow(row);
						return (
							<tr
								key={`row_${i1}`}
								{...row.getRowProps()}
								className={`${row.cells.length - 1 !== i1 && 'border-b'} text-[15px]`}
							>
								{row.cells.map((cell, i2) => {
									return (
										<td
											key={`row_cell_${i2}`}
											{...cell.getCellProps()}
											className="py-[16px] text-[15px] text-[#000] leading-[22px] font-medium font-poppins"
										>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					}): <div className="w-full text-center">Loading...</div>}
				</tbody>
			</table>
		</div>
	);
};