import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
	'0x83c4f61C455A8CeCF850c15349D9410dc7c3d840'
);

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
