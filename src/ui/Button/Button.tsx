import clsx from 'clsx';
import Link from 'next/link';
import { Children, MouseEventHandler, ReactNode } from 'react';
import Loading from '../Loading';
import styles from './Button.module.scss';

export interface ButtonProps {
	background?: boolean;
	children?: ReactNode;
	className?: string;
	href?: string;
	loading?: boolean;
	onClick?: MouseEventHandler;
	type?: 'button' | 'reset' | 'submit';
}

export default function Button({
	background,
	children,
	className,
	href,
	loading,
	onClick,
	type = 'button',
}: ButtonProps) {
	const Tag: any = href ? Link : 'button';

	return (
		<Tag
			className={clsx(
				styles.button,
				background && styles.button_background,
				loading && styles.button_loading,
				className,
			)}
			href={href}
			onClick={!loading ? onClick : undefined}
			type={Tag === 'button' ? (!loading ? type : 'button') : undefined}
		>
			{loading && <Loading className={styles.loading} />}

			{!!Children.count(children) && <p className={styles.text}>{children}</p>}
		</Tag>
	);
}
