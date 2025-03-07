/* eslint-disable require-await */
import { NextResponse } from 'next/server';
import { v4 } from 'uuid';
import leads from '../../../assets/leads.json';
import { Lead, LeadStatus } from '../../../common/models';
import { CreateLeadInput } from '../../utils';

export async function GET() {
	return NextResponse.json(leads);
}

export async function POST(request: Request) {
	const input: CreateLeadInput = await request.json();

	const lead: Lead = {
		country: input.country,
		createdAt: new Date().toISOString(),
		id: v4(),
		lastName: input.lastName,
		name: input.name,
		status: LeadStatus.Pending,
	};

	leads.push(lead);

	return NextResponse.json(lead);
}

export async function PUT(request: Request) {
	const { id, status } = await request.json();

	const lead = leads.find((l) => l.id === id);

	if (lead) {
		lead.status = status;
		return NextResponse.json(lead);
	}

	return NextResponse.json({ message: 'Lead not found' }, { status: 404 });
}
