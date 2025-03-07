import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Error.module.scss';

export interface ErrorProps {
	children: ReactNode;
	className?: string;
}

export default function Error({ children, className }: ErrorProps) {
	return <p className={clsx(styles.error, className)}>{children}</p>;
}
