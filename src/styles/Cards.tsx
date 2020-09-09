import styled from 'styled-components'

const CardGrid = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

export const Card = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 12rem;
	width: 9rem;
	border: 3px solid rgba(27, 38, 44, 0.5);
	border-radius: 0.5rem;
	box-shadow: 2px 2px 2px rgba(27, 38, 44, 0.5);
	margin: 10px;
	background: linear-gradient(rgba(0, 183, 194, 0.4), rgba(15, 76, 117, 0.1));
`

export default CardGrid
