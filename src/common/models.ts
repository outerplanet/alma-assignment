export enum LeadStatus {
	Pending = 'Pending',
	ReachedOut = 'Reached out',
}

export interface Lead {
	country: string;
	createdAt: string;
	id: string;
	lastName: string;
	name: string;
	status: LeadStatus;
}
