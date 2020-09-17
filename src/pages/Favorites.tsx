import React from 'react'
import { useSelector } from 'react-redux'

import { Cards, Container, Title } from '../components/shared'
import { Favorite, NoFavorites } from '../components/favorites'
import { RootState } from '../store/reducer/root'

const Favorites = () => {
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	return (
		<Container elevation={5} square>
			<Title>Favorites</Title>
			{favorites.length ? (
				<Cards>
					{favorites?.map((city) => (
						<Favorite key={city.locationKey} {...city} />
					))}
				</Cards>
			) : (
				<NoFavorites />
			)}
		</Container>
	)
}

export default Favorites
