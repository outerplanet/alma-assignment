import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import Error from '../Error';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	placeholder: string;
}

function Input({ className, error, placeholder, ...props }: InputProps, ref: Ref<HTMLInputElement>) {
	return (
		<div className={className}>
			<input className={styles.input} placeholder={placeholder} ref={ref} type="text" {...props} />

			{error && <Error className={styles.error}>{error}</Error>}
		</div>
	);
}

export default forwardRef(Input);
