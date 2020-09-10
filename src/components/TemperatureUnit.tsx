import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import { Temperature } from '../models/City'

const TempUnit: FC<Partial<Temperature>> = ({ celsius, fahrenheit }) => {
	const { tempUnit } = useSelector((state: RootState) => state)

	return <p>{tempUnit ? `${fahrenheit}° F` : `${celsius}° C`}</p>
}

export default TempUnit
