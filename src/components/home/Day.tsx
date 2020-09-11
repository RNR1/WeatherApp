import React, { FC } from 'react'
import dayjs from 'dayjs'

import { Temperature } from '../../models/City'
import { TempIcon, TempUnit, Card } from '../shared'

const Day: FC<Temperature> = ({
	date,
	icon,
	description,
	celsius,
	fahrenheit
}) => {
	return (
		<Card>
			<h3>{dayjs(date).format('ddd')}</h3>
			<TempIcon icon={icon} description={description} />
			<TempUnit celsius={celsius} fahrenheit={fahrenheit} />
			<p>{description}</p>
		</Card>
	)
}

export default Day
