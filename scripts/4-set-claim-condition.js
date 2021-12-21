import sdk from './1-initialize-sdk.js';
import { bundleAddress } from './0-addresses.js';

const bundleDrop = sdk.getBundleDropModule(bundleAddress);

(async () => {
	try {
		const claimConditionFactory = bundleDrop.getClaimConditionFactory();
		// Specify conditions.
		claimConditionFactory.newClaimPhase({
			startTime: new Date(),
			maxQuantity: 50_000,
			maxQuantityPerTransaction: 1,
		});

		await bundleDrop.setClaimCondition(0, claimConditionFactory);
		console.log('✅ Sucessfully set claim condition!');
	} catch (error) {
		console.error('Failed to set claim condition', error);
	}
})();
