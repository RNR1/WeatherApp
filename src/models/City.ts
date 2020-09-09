export interface Temperature {
	date: string
	icon: number
	description: string
	celsius: number
	fahrenheit: number
}

export default class City {
	isFavorite: boolean = false
	constructor(
		public name: string,
		public locationKey: number,
		public currentCondition: Temperature,
		public fiveDayForecast?: Temperature[]
	) {}
}
