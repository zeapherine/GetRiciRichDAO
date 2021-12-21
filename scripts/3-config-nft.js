import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';
import { bundleAddress } from './0-addresses.js';

const bundleDrop = sdk.getBundleDropModule(bundleAddress);

(async () => {
	try {
		await bundleDrop.createBatch([
			{
				name: 'GetRiciRichDAO Membership',
				description: 'This NFT will give you access to GetRiciRichDAO!',
				image: readFileSync('scripts/assets/image.jpg'),
			},
		]);
		console.log('✅ Successfully created a new NFT in the drop!');
	} catch (error) {
		console.error('failed to create the new NFT', error);
	}
})();
