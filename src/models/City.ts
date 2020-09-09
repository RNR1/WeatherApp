interface Temperature {
	iconNumber: number
	description: string
	Celsius: 30.5
	Fahrenheit: 87
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
