export interface Temperature {
	date: string
	icon: string
	description: string
	celsius: number
	fahrenheit: number
}

export default class City {
	isFavorite: boolean = false
	constructor(
		public name: string,
		public locationKey: string,
		public currentCondition: Temperature,
		public fiveDayForecast?: Temperature[]
	) {}
}
