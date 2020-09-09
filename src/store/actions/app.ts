import * as Types from './types'
import { AutocompleteResponse } from '../../models/responses'
import City from '../../models/City'

export const autoComplete = (payload: string) => ({
	type: Types.AUTOCOMPLETE,
	payload
})

export const autoCompleteStart = () => ({
	type: Types.AUTOCOMPLETE_START
})

export const autoCompleteSuccess = (payload: AutocompleteResponse[]) => ({
	type: Types.AUTOCOMPLETE_SUCCESS,
	payload
})

export const autoCompleteFailed = (payload: Error) => ({
	type: Types.AUTOCOMPLETE_FAILED,
	payload: payload.message
})

export const search = (payload: string) => ({
	type: Types.SEARCH,
	payload
})

export const searchStart = () => ({
	type: Types.SEARCH_START
})

export const searchSuccess = (payload: City) => ({
	type: Types.SEARCH_SUCCESS,
	payload
})

export const searchFailed = (payload: Error) => ({
	type: Types.SEARCH_FAILED,
	payload: payload.message
})
