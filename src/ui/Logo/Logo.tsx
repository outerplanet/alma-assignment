import Image from 'next/image';

export interface LogoProps {
	height: number;
	width: number;
}

export default function Logo(props: LogoProps) {
	return <Image alt="Alma Logo" src="/logo.svg" {...props} />;
}
