import React from 'react'
import Paper from '@material-ui/core/Paper'

import CardGrid, { Card } from '../styles/Cards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'

const Favorites = () => {
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	return (
		<Paper
			style={{ padding: 20, margin: 10, textAlign: 'center' }}
			elevation={5}
			square>
			<h2>Favorites</h2>
			<CardGrid>
				{favorites?.map((city) => (
					<Card key={city.name}>
						<p>{city.name}</p>
						<div>
							<img
								src={`https://developer.accuweather.com/sites/default/files/0${city.currentCondition.icon}-s.png`}
								alt={city.currentCondition.description}
							/>
						</div>
						<p>{city.currentCondition.celsius}&deg; C</p>
						<p>{city.currentCondition.description}</p>
					</Card>
				))}
			</CardGrid>
		</Paper>
	)
}

export default Favorites
