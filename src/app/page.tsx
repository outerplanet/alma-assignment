'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { calculateLogoSize } from '../common/utils';
import { Button, Checkbox, FileInput, Input, Logo, PageWidth, Textarea } from '../ui';
import useCreateLead, { CreateLeadInput, VisaCategory } from './leads/useCreateLead';
import styles from './page.module.scss';

export default function Home() {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<CreateLeadInput>();

	const router = useRouter();

	const { isPending: creatingLead, mutate: createLead } = useCreateLead();

	const onSubmit = useCallback(
		(data: CreateLeadInput) => {
			createLead(data, {
				onSuccess: () => {
					router.push('/thank-you');
				},
			});
		},
		[createLead, router],
	);

	return (
		<>
			<section className={styles.heading}>
				<PageWidth>
					<Logo {...calculateLogoSize(80)} />

					<h1 className={styles.title}>
						Get An Assessment <br /> Of Your Immigration Case
					</h1>

					<Button background className={styles.button} href="/leads">
						Go to Leads Page
					</Button>
				</PageWidth>

				<div className={styles.background} />
			</section>

			<section className={styles.content}>
				<PageWidth>
					<h2>Want to understand your visa options?</h2>

					<p className={styles.description}>
						Submit the form below and our team of experienced attorneys will review your information and send a
						preliminary assessment of your case based on your goals.
					</p>

					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Input placeholder="First Name*" required {...register('name')} />
						<Input placeholder="Last Name*" required {...register('lastName')} />
						<Input
							error={errors.email?.message}
							placeholder="Email*"
							required
							{...register('email', {
								pattern: {
									message: 'Invalid email address',
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								},
							})}
						/>
						<Input placeholder="Country*" required {...register('country')} />
						<FileInput label="Resume/CV Upload*" required {...register('resume')} />

						<h3 className={styles.subtitle}>Visa categories of interest?</h3>
						<Checkbox label="O-1" value={VisaCategory['O-1']} {...register('visaCategories')} />
						<Checkbox label="EB-1A" value={VisaCategory['EB-1A']} {...register('visaCategories')} />
						<Checkbox label="EB-2 NIW" value={VisaCategory['EB-2 NIW']} {...register('visaCategories')} />
						<Checkbox
							label="I don't know"
							value={VisaCategory['Not specified']}
							{...register('visaCategories')}
						/>

						<h3 className={styles.subtitle}>How can we help you?</h3>
						<Textarea placeholder="Additional Information" rows={4} {...register('additionalInfo')} />

						<Button background className={styles.submit} loading={creatingLead} type="submit">
							Submit
						</Button>
					</form>
				</PageWidth>
			</section>
		</>
	);
}
