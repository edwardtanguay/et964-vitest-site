import * as qstr from './qstr';
/**
 * capitalizeFirstLetter()
 * 
 * capitalizeFirstLetter('HELLO')
 * 
 * "Hello"
 */
export const capitalizeFirstLetter = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * sentencize()
 * 
 * sentencize('this is a test')
 * 
 * "This is a test."
 */
export const sentencize = (text: string) => {
	let r = text;
	
	r = text.charAt(0).toUpperCase() + text.slice(1);

	if (',:;'.includes(text.slice(-1))) {
		r = r.slice(0,-1);
	}

	if (!'.!?'.includes(text.slice(-1))) {
		r += '.'
	}

	return r;
}