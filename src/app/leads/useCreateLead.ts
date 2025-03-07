import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export enum VisaCategory {
	'EB-1A' = 'EB-1A',
	'EB-2 NIW' = 'EB-2 NIW',
	'Not specified' = '0',
	'O-1' = 'O-1',
}

export interface CreateLeadInput {
	additionalInfo: string;
	country: string;
	email: string;
	lastName: string;
	name: string;
	resume: string;
	visaCategories: VisaCategory[];
}

export default function useCreateLead() {
	const queryClient = useQueryClient();

	const query = useMutation({
		mutationFn: async (input: CreateLeadInput) => {
			const result = await axios.post('/api/leads', input);
			return result.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['leads'] });
		},
	});

	return query;
}
