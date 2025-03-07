import { forwardRef, Ref, TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholder: string;
}

function Textarea({ className, placeholder, ...props }: TextareaProps, ref: Ref<HTMLTextAreaElement>) {
	return (
		<div className={className}>
			<textarea className={styles.textarea} placeholder={placeholder} ref={ref} {...props} />
		</div>
	);
}

export default forwardRef(Textarea);
