import Link from 'next/link';
import { calculateLogoSize } from '../../common/utils';
import Button from '../Button';
import Logo from '../Logo';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Link className={styles.logo} href="/">
				<Logo {...calculateLogoSize(100)} />
			</Link>

			<div className={styles.content}>
				<Button className={styles.button} href="/leads">
					Leads
				</Button>
				<Button className={styles.button} href="/settings">
					Settings
				</Button>
			</div>

			<div className={styles.user}>Admin</div>
		</div>
	);
}
