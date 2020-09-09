/* eslint-disable no-use-before-define */
import React, { ChangeEventHandler } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/root/reducer'
import { autoComplete, search, clearResults } from '../store/actions/app'
import { Button } from '@material-ui/core'

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
		justifyItems: 'center'
	}
})

export default function SearchBar() {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { queryResults, searching } = useSelector((state: RootState) => state)

	const resultsAvailable = () => queryResults?.length > 0

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
		target.value
			? dispatch(autoComplete(target.value))
			: dispatch(clearResults())
	const submit = () =>
		resultsAvailable() ? dispatch(search(queryResults[0])) : null

	return (
		<div className={classes.container}>
			<Autocomplete
				style={{ width: 300, margin: 'auto' }}
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
						label='Choose a country'
						onChange={handleChange}
						onKeyPress={({ key }) => key === 'Enter' && submit()}
						variant='outlined'
						inputProps={{
							...params.inputProps,
							autoComplete: 'new-password' // disable autocomplete and autofill
						}}
					/>
				)}
			/>
			<Button
				disabled={!resultsAvailable() || searching}
				onClick={submit}
				type='button'>
				{searching ? 'Searching...' : 'Search'}
			</Button>
		</div>
	)
}
