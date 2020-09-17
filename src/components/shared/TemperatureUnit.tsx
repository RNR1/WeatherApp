import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducer/root'
import Temperature from '../../models/Temperature'

const TempUnit: FC<Partial<Temperature>> = ({ celsius, fahrenheit }) => {
	const { tempUnit } = useSelector((state: RootState) => state)

	return (
		<p>
			{tempUnit ? `${fahrenheit?.toFixed(1)}° F` : `${celsius?.toFixed(1)}° C`}
		</p>
	)
}

export default TempUnit
