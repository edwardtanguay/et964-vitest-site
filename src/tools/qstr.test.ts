import { capitalizeFirstLetter, sentencize } from "./qstr";

test('capitalizeFirstLetter', () => {
	it('uppercases and lowercases correct letters', () => {
		expect(capitalizeFirstLetter('test')).toBe('Test');
		expect(capitalizeFirstLetter('Test')).toBe('Test');
		expect(capitalizeFirstLetter('TEST222')).toBe('Test');
		expect(capitalizeFirstLetter('two words')).toBe('Two words');
	});
	it('handles all edge cases', () => {
		expect(capitalizeFirstLetter('')).toBe('');
		expect(capitalizeFirstLetter('  ')).toBe('  ');
		expect(capitalizeFirstLetter('!@#$%^&*()')).toBe('!@#$%^&*()');
	});
	it('handles German characters', () => {
		expect(capitalizeFirstLetter('äpfel')).toBe('Äpfel');
		expect(capitalizeFirstLetter('öfter')).toBe('Öfter');
		expect(capitalizeFirstLetter('über')).toBe('Über');
		expect(capitalizeFirstLetter('ÄÄÄÄ')).toBe('Ääää');
		expect(capitalizeFirstLetter('ÖÖÖÖ')).toBe('Öööö');
		expect(capitalizeFirstLetter('ÜÜÜÜ')).toBe('Üüüü');
	});
});

test('sentencize', () => {
	it('capitalizes first character', () => {
		expect(sentencize('test')).toBe('Test2');
	});
});