import { capitalizeFirstLetter } from "./qstr";

describe('capitalizeFirstLetter', () => {
	it('uppercases and lowercases correct letters', () => {
		expect(capitalizeFirstLetter('test')).toBe('Test');
	})
});