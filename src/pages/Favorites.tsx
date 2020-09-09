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
				{favorites.length ? (
					favorites?.map(({ name, currentCondition }) => (
						<Card key={name}>
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
						</Card>
					))
				) : (
					<h3>You have no favorites yet.</h3>
				)}
			</CardGrid>
		</Paper>
	)
}

export default Favorites
