import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';
import { appAddress } from './0-addresses.js';

const app = sdk.getAppModule(appAddress);

(async () => {
	try {
		const bundleDropModule = await app.deployBundleDropModule({
			name: 'GetRiciRichDAO Membership',
			description: 'A DAO for getting rich quick scam.',
			// The image for the collection that will show up on OpenSea.
			image: readFileSync('scripts/assets/image.jpg'),
			primarySaleRecipientAddress: ethers.constants.AddressZero,
		});

		console.log(
			'✅ Successfully deployed bundleDrop module, address:',
			bundleDropModule.address
		);
		console.log(
			'✅ bundleDrop metadata:',
			await bundleDropModule.getMetadata()
		);
	} catch (error) {
		console.log('failed to deploy bundleDrop module', error);
	}
})();
