import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Lead } from '../../common/models';

export default function useLeads() {
	const query = useQuery<Lead[]>({
		queryFn: async () => {
			const result = await axios.get('/api/leads');
			return result.data;
		},
		queryKey: ['leads'],
	});

	return query;
}
