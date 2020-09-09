export function transformIcon(icon: number) {
	return icon < 10 ? `0${icon}` : icon
}
