import React from 'react'
import { useSelector } from 'react-redux'

import { Cards, Container, Title } from '../components/shared'
import { Favorite } from '../components/favorites'
import { RootState } from '../store/root/reducer'

const Favorites = () => {
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	return (
		<Container elevation={5} square>
			<Title>Favorites</Title>
			<Cards>
				{favorites.length ? (
					favorites?.map((city) => (
						<Favorite key={city.locationKey} {...city} />
					))
				) : (
					<h3>You have no favorites yet.</h3>
				)}
			</Cards>
		</Container>
	)
}

export default Favorites
