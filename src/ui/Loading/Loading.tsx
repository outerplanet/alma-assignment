import clsx from 'clsx';
import styles from './Loading.module.scss';

export interface LoadingProps {
	className?: string;
}

export default function Loading({ className }: LoadingProps) {
	return (
		<div className={clsx(styles.container, className)}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
}
