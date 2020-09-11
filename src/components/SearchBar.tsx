/* eslint-disable no-use-before-define */
import React, { ChangeEventHandler } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/root/reducer'
import { autoComplete, search, clearResults } from '../store/actions/app'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

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
	},
	container: {
		display: 'flex',
		justifyContent: 'center'
	}
})

export default function SearchBar() {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { queryResults, searching, loading, error } = useSelector(
		(state: RootState) => state
	)

	const resultsAvailable = () => queryResults?.length > 0

	const submit = () =>
		resultsAvailable() ? dispatch(search(queryResults[0])) : null

	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') return submit()
		if (!isAlphabetic(e.key)) return e.preventDefault()
	}

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		if (!target.value) return dispatch(clearResults())
		dispatch(autoComplete(target.value))
	}

	if (error) return null

	return (
		<div className={classes.container}>
			<Autocomplete
				style={{ width: 300 }}
				options={queryResults}
				autoHighlight
				loading={searching}
				classes={{
					option: classes.option
				}}
				getOptionLabel={(option) => option?.name}
				renderOption={(option) => (
					<>
						<span>{countryToFlag(option?.countryISO)}</span>
						{option?.name}
					</>
				)}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Search location'
						onChange={handleChange}
						onKeyPress={handleKeyPress}
						variant='outlined'
						inputProps={{
							...params.inputProps,
							autoComplete: 'new-password' // disable autocomplete and autofill
						}}
					/>
				)}
			/>
			<CustomButton
				disabled={!resultsAvailable() || searching}
				onClick={submit}
				type='button'>
				{loading ? 'Searching...' : 'Search'}
			</CustomButton>
		</div>
	)
}

function isAlphabetic(key: string) {
	return /^[a-zA-Z ]*$/.test(key)
}

const CustomButton = styled(Button)`
	@media (max-width: 500px) {
		display: none;
	}
`
