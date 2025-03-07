import { GridColDef } from '@mui/x-data-grid';

export interface Row {
	country: string;
	createdAt: string;
	id: string;
	name: string;
	status: string;
}

export const pageSize = 8;

export const columns: GridColDef<Row>[] = [
	{
		field: 'name',
		flex: 1,
		headerName: 'Name',
		maxWidth: 200,
	},
	{
		field: 'createdAt',
		flex: 1,
		headerName: 'Submitted',
		maxWidth: 200,
	},
	{
		field: 'status',
		flex: 1,
		headerName: 'Status',
		maxWidth: 200,
	},
	{
		field: 'country',
		flex: 1,
		headerName: 'Country',
		maxWidth: 200,
	},
];
