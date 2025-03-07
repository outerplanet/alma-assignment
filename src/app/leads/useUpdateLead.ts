import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { LeadStatus } from '../../common/models';

export interface UpdateLeadInput {
	id: string;
	status: LeadStatus;
}

export default function useUpdateLead() {
	const queryClient = useQueryClient();

	const query = useMutation({
		mutationFn: async (input: UpdateLeadInput) => {
			const result = await axios.put('/api/leads', input);
			return result.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['leads'] });
		},
	});

	return query;
}
