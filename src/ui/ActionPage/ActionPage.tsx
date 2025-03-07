import Button from '../Button';
import PageWidth from '../PageWidth';
import styles from './ActionPage.module.scss';

export interface ActionPageProps {
	buttonText: string;
	description: string;
	title: string;
}

export default function ActionPage({ buttonText, description, title }: ActionPageProps) {
	return (
		<section>
			<PageWidth className={styles.container}>
				<h1>{title}</h1>

				<p className={styles.description}>{description}</p>

				<Button background className={styles.button} href="/">
					{buttonText}
				</Button>
			</PageWidth>
		</section>
	);
}
