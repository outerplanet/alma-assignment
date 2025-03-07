import { SUPPORT_EMAIL } from '../../common/constants';
import { ActionPage } from '../../ui';

export default function ThankYou() {
	return (
		<ActionPage
			buttonText="Go Back to Homepage"
			description={`Your information was submitted to our team of immigration attorneys.
			Expect an email from ${SUPPORT_EMAIL}.`}
			title="Thank you"
		/>
	);
}
