import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, Ref, useId } from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

function Checkbox({ className, label, ...props }: CheckboxProps, ref: Ref<HTMLInputElement>) {
	const id = useId();

	return (
		<div className={clsx(styles.container, className)}>
			<input className={styles.input} id={id} ref={ref} type="checkbox" {...props} />

			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	);
}

export default forwardRef(Checkbox);
