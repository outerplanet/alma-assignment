import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './PageWidth.module.scss';

export interface PageWidthProps {
	children: ReactNode;
	className?: string;
}

export default function PageWidth({ children, className }: PageWidthProps) {
	return <div className={clsx(styles.container, className)}>{children}</div>;
}
