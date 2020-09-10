export function getPreferredColorTheme(): boolean {
	return window.matchMedia('(prefers-color-scheme: dark)')?.matches
}
