import Temperature from './Temperature'

export default class City {
	isFavorite: boolean = false
	constructor(
		public name: string,
		public locationKey: string,
		public currentCondition: Temperature,
		public fiveDayForecast?: Temperature[]
	) {}
}
