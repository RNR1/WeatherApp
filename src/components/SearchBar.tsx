/* eslint-disable no-use-before-define */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode: string) {
	return typeof String.fromCodePoint !== 'undefined'
		? isoCode
				.toUpperCase()
				.replace(/./g, (char) =>
					String.fromCodePoint(char.charCodeAt(0) + 127397)
				)
		: isoCode
}

const useStyles = makeStyles({
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18
		}
	}
})

export default function SearchBar() {
	const { searchQuery, queryResults, searching } = useSelector(
		(state: RootState) => state
	)
	const classes = useStyles()

	return (
		<Autocomplete
			autoComplete={false}
			id='country-select-demo'
			style={{ width: 300, margin: 'auto' }}
			options={queryResults}
			autoHighlight
			loading={searching}
			classes={{
				option: classes.option
			}}
			getOptionLabel={(option) => option.LocalizedName}
			renderOption={(option) => (
				<>
					<span>{countryToFlag(option.Country.ID)}</span>
					{option.LocalizedName}
				</>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					label='Choose a country'
					variant='outlined'
					inputProps={{
						...params.inputProps,
						autoComplete: 'new-password' // disable autocomplete and autofill
					}}
					value={searchQuery}
				/>
			)}
		/>
	)
}
