//injects styles into
export function Injection() {

	return new Promise( resolve => {
		const colorMode = 'dark';
		const root = document.documentElement;

		/*
		root.style.setProperty(
		'--color-text',
		colorMode === 'light'
		  ? '${COLORS.light.text}'
		  : '${COLORS.dark.text}'
		);
		root.style.setProperty(
		'--color-background',
		colorMode === 'light'
		  ? '${COLORS.light.background}'
		  : '${COLORS.dark.background}'
		);
		root.style.setProperty(
		'--color-primary',
		colorMode === 'light'
		  ? '${COLORS.light.primary}'
		  : '${COLORS.dark.primary}'
		);
		*/

		root.style.setProperty('--initial-color-mode', colorMode);
		resolve();
	})


}