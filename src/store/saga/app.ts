import { put } from 'redux-saga/effects'
import {
	autoCompleteStart,
	autoCompleteSuccess,
	autoCompleteFailed
} from '../actions/app'
import API from '../../api/client'
import { AxiosResponse } from 'axios'
import { AutocompleteResponse } from '../../models/responses'

export function* autoCompleteSaga({
	payload
}: {
	type: string
	payload: string
}) {
	try {
		yield put(autoCompleteStart())
		const results: AxiosResponse<
			AutocompleteResponse[]
		> = yield API.autocomplete(payload)
		yield put(autoCompleteSuccess(results.data))
	} catch (error) {
		yield put(autoCompleteFailed(error))
	}
}
