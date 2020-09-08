export type AutocompleteResponse = {
	Version: number
	Key: string
	Type: string
	Rank: number
	LocalizedName: string
	Country: {
		ID: string
		LocalizedName: string
	}
	AdministrativeArea: {
		ID: string
		LocalizedName: string
	}
}

export type currentConditionResponse = {
	LocalObservationDateTime: string
	EpochTime: number
	WeatherText: string
	WeatherIcon: number
	HasPrecipitation: boolean
	PrecipitationType?: any
	IsDayTime: boolean
	Temperature: {
		Metric: {
			Value: number
			Unit: 'C' | 'F'
			UnitType: number
		}
		Imperial: {
			Value: number
			Unit: 'F' | 'C'
			UnitType: number
		}
	}
	MobileLink: string
	Link: string
}

export type FiveDayForecastResponse = {
	Headline: {
		EffectiveDate: string
		EffectiveEpochDate: number
		Severity: number
		Text: string
		Category: string
		EndDate?: any
		EndEpochDate?: any
		MobileLink: string
		Link: string
	}
	DailyForecasts: DailyForecast[]
}

export type DailyForecast = {
	Date: string
	EpochDate: number
	Temperature: {
		Minimum: {
			Value: number
			Unit: 'C' | 'F'
			UnitType: number
		}
		Maximum: {
			Value: number
			Unit: 'C' | 'F'
			UnitType: number
		}
	}
	Day: {
		Icon: number
		IconPhrase: string
		HasPrecipitation: boolean
	}
	Night: {
		Icon: number
		IconPhrase: string
		HasPrecipitation: boolean
	}
	Sources: string[]
	MobileLink: string
	Link: string
}
