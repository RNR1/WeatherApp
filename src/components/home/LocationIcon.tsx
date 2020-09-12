import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import MyLocationIcon from '@material-ui/icons/MyLocation'
import { geoPosition } from '../../store/actions/app'

const LocationIcon = () => {
	const [color, setColor] = useState<'primary' | 'error'>('error')
	const dispatch = useDispatch()

	const enableLocation = () => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setColor('primary')
				const coords = { lat: latitude.toString(), lon: longitude.toString() }
				dispatch(geoPosition(coords))
			},
			() => {
				setColor('error')
			},
			{ enableHighAccuracy: true }
		)
	}

	return (
		<span>
			<MyLocationIcon
				aria-label='Search by location'
				color={color}
				onClick={enableLocation}
			/>
		</span>
	)
}

export default LocationIcon
