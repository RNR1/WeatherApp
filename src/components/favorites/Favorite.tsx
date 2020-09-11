import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import City from '../../models/City'
import { TempUnit, TempIcon, Card } from '../shared'
import { search } from '../../store/actions/app'

const Favorite: FC<City> = ({ currentCondition, name, locationKey }) => {
	const history = useHistory()
	const dispatch = useDispatch()

	const onClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		dispatch(search({ name, locationKey }))
		history.push('/')
	}

	return (
		<ClickableCard onClick={onClick}>
			<h3>{name}</h3>
			{currentCondition && (
				<>
					{currentCondition?.icon ? (
						<TempIcon
							icon={currentCondition?.icon}
							description={currentCondition?.description}
						/>
					) : null}

					<TempUnit
						celsius={currentCondition.celsius}
						fahrenheit={currentCondition.fahrenheit}
					/>
					{currentCondition?.description && (
						<p>{currentCondition.description}</p>
					)}
				</>
			)}
		</ClickableCard>
	)
}

export default Favorite

const ClickableCard = styled(Card)`
	cursor: pointer;
`
