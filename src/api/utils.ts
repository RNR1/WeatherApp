import client from './client'
import Axios, { CancelTokenSource } from 'axios'
import { AutocompleteDto } from './transform'
const resources: { [query: string]: AutocompleteDto[] } = {}

const makeRequestCreator = () => {
	let cancel: CancelTokenSource

	return async (query: string) => {
		if (cancel) {
			// Cancel the previous request before making a new request
			cancel.cancel()
		}
		// Create a new CancelToken
		cancel = Axios.CancelToken.source()
		try {
			if (resources[query]) {
				// Return result if it exists
				return resources[query]
			}
			const result = await client.autocomplete(query, {
				cancelToken: cancel.token
			})
			// Store response
			resources[query] = result

			return result
		} catch (error) {
			if (Axios.isCancel(error)) {
				// Handle if request was cancelled
				console.log('Request canceled', error.message)
			} else {
				// Handle usual errors
				console.log('Something went wrong: ', error.message)
			}
		}
	}
}

export const autocomplete = makeRequestCreator()
