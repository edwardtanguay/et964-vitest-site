import { capitalizeFirstLetter, sentencize } from "./qstr";

describe('capitalizeFirstLetter', () => {
	it('uppercases and lowercases correct letters', () => {
		expect(capitalizeFirstLetter('test')).toBe('Test');
		expect(capitalizeFirstLetter('Test')).toBe('Test');
		expect(capitalizeFirstLetter('TEST')).toBe('Test');
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

describe('sentencize', () => {
	it('handles no capital and no punctuation mark', () => {
		expect(sentencize('this is a text')).toBe('This is a text.');
		expect(sentencize('hello')).toBe('Hello.');
	});
	it('handles no capital and punctuation mark', () => {
		expect(sentencize('hello!')).toBe('Hello!');
		expect(sentencize('hello?')).toBe('Hello?');
	});
	it('handles no capital and bad punctuation mark', () => {
		expect(sentencize('hello,')).toBe('Hello.');
		expect(sentencize('hello:')).toBe('Hello.');
		expect(sentencize('hello;')).toBe('Hello.');
		expect(sentencize('hello/')).toBe('Hello/.');
	});
	it('handles capital', () => {
		expect(sentencize('Hello')).toBe('Hello.');
		expect(sentencize('Hello///')).toBe('Hello///.');
		expect(sentencize('This is a test.')).toBe('This is a test.');
		expect(sentencize('AAA')).toBe('AAA.');
	});
	it('handles task examples', () => {
		expect(sentencize('who was it?')).toBe('Who was it?');
		expect(sentencize('i')).toBe('I.');
		expect(sentencize('how many?')).toBe('How many?');
		expect(sentencize('23')).toBe('23.');
	});
});