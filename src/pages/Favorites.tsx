import React from 'react'
import Paper from '@material-ui/core/Paper'

import CardGrid from '../styles/Cards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import Title from '../styles/Title'
import Favorite from '../components/Favorite'

const Favorites = () => {
	const favorites = useSelector((state: RootState) => state.favoriteCities)
	return (
		<Paper style={{ padding: 20, margin: 10 }} elevation={5} square>
			<Title>Favorites</Title>
			<CardGrid>
				{favorites.length ? (
					favorites?.map((city) => <Favorite {...city} />)
				) : (
					<h3>You have no favorites yet.</h3>
				)}
			</CardGrid>
		</Paper>
	)
}

export default Favorites
