import React, { FC } from 'react'
import { Card } from '../styles/Cards'
import City from '../models/City'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { search } from '../store/actions/app'

const Favorite: FC<City> = ({ currentCondition, name, locationKey }) => {
	const history = useHistory()
	const dispatch = useDispatch()

	const onClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		dispatch(search({ name, locationKey }))
		history.push('/')
	}
	return (
		<ClickableCard onClick={onClick}>
			<p>{name}</p>
			{currentCondition && (
				<>
					<div>
						{currentCondition?.icon ? (
							<img
								src={`https://developer.accuweather.com/sites/default/files/${currentCondition?.icon}-s.png`}
								alt={currentCondition?.description}
							/>
						) : null}
					</div>

					{currentCondition?.celsius && (
						<p>{currentCondition.celsius}&deg; C</p>
					)}
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
