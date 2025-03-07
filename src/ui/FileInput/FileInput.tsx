import { forwardRef, InputHTMLAttributes, Ref, useId } from 'react';
import styles from './FileInput.module.scss';

export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label: string;
}

function FileInput({ className, label, ...props }: FileInputProps, ref: Ref<HTMLInputElement>) {
	const id = useId();

	return (
		<div className={className}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>

			<input className={styles.input} id={id} ref={ref} type="file" {...props} />
		</div>
	);
}

export default forwardRef(FileInput);
