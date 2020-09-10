export function getInitialMode(): boolean {
	const isReturningUser = 'dark' in localStorage
	if (isReturningUser) return JSON.parse(localStorage.getItem('dark')!) || false
	return getPreferredColorTheme()
}
function getPreferredColorTheme(): boolean {
	return window.matchMedia('(prefers-color-scheme: dark)')?.matches
}
