import {
	AutocompleteResponse,
	currentConditionResponse
} from '../models/responses'
import { AxiosResponse } from 'axios'

export const transformAutocomplete = ({
	data
}: AxiosResponse<AutocompleteResponse[]>): AutocompleteDto[] =>
	data.map((city) => ({
		name: city.LocalizedName,
		locationKey: city.Key,
		countryISO: city.Country.ID
	}))

export type AutocompleteDto = {
	name: string
	locationKey: string
	countryISO: string
}
