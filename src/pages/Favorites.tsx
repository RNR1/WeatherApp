import React from 'react'
import Paper from '@material-ui/core/Paper'

import CardGrid, { Card } from '../styles/Cards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import Title from '../styles/Title'

const Favorites = () => {
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	return (
		<Paper style={{ padding: 20, margin: 10 }} elevation={5} square>
			<Title>Favorites</Title>
			<CardGrid>
				{favorites?.map(({ name, currentCondition }) => (
					<Card key={name}>
						<p>{name}</p>
						<div>
							<img
								src={`https://developer.accuweather.com/sites/default/files/${currentCondition.icon}-s.png`}
								alt={currentCondition.description}
							/>
						</div>
						<p>{currentCondition.celsius}&deg; C</p>
						<p>{currentCondition.description}</p>
					</Card>
				))}
			</CardGrid>
		</Paper>
	)
}

export default Favorites
