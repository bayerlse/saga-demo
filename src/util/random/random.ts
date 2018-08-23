export const generateName = (length: number = 10): string => {
	let name = '';
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		name += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}
	return name;
};
