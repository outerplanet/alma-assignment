'use client';

import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useCallback, useMemo, useState } from 'react';
import { LeadStatus } from '../../common/models';
import { Button, Input, Sidebar } from '../../ui';
import styles from './page.module.scss';
import useLeads from './useLeads';
import useUpdateLead from './useUpdateLead';
import { columns, pageSize, Row } from './utils';

export default function Leads() {
	const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

	const { data: leads, isFetching: isLoadingLeads } = useLeads();
	const { isPending: isUpdatingLead, mutate: updateLead } = useUpdateLead();

	const handleLeadUpdate = useCallback(() => {
		updateLead({ id: rowSelectionModel[0] as string, status: LeadStatus.ReachedOut });
	}, [rowSelectionModel, updateLead]);

	const rows = useMemo(() => {
		if (!leads) return [];

		return leads.map(
			(lead): Row => ({
				country: lead.country,
				createdAt: new Date(lead.createdAt).toLocaleString(),
				id: lead.id,
				name: lead.name + ' ' + lead.lastName,
				status: lead.status,
			}),
		);
	}, [leads]);

	return (
		<div className={styles.container}>
			<Sidebar />

			<div className={styles.content}>
				<h1>Leads</h1>

				<div className={styles.header}>
					<Input className={styles.search} placeholder="Search" />

					<Input placeholder="Status" />
				</div>

				<DataGrid
					className={styles.table}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { pageSize },
						},
					}}
					loading={isLoadingLeads}
					onRowSelectionModelChange={setRowSelectionModel}
					pageSizeOptions={[pageSize]}
					rowSelectionModel={rowSelectionModel}
					rows={rows}
				/>

				{rowSelectionModel[0] && (
					<Button background className={styles.updateLead} loading={isUpdatingLead} onClick={handleLeadUpdate}>
						Reach out
					</Button>
				)}
			</div>
		</div>
	);
}
