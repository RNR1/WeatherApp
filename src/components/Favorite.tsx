import React, { FC } from 'react'
import { Card } from '../styles/Cards'
import City from '../models/City'

const Favorite: FC<City> = ({ currentCondition, name }) => {
	return (
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
	)
}

export default Favorite
