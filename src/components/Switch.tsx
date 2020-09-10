import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	checked: boolean
	icons: string[]
	onChange: () => void
}

const Switch: FC<Props> = ({ checked, onChange, icons: [L, R] }) => (
	<Container>
		<span>{L}</span>
		<Toggle>
			<input
				checked={checked}
				onChange={onChange}
				type='checkbox'
				name='checkbox'
				id='checkbox'
			/>
			<label htmlFor='checkbox' />
		</Toggle>
		<span>{R}</span>
	</Container>
)

export default Switch

const Container = styled.div`
	display: flex;

	& > span {
		font-size: 1.2em;
		background: none;
		border: none;
		cursor: pointer;
		transition: color 0.3s ease;
		margin-top: 4px;
		margin-right: 2px;
	}

	& > span:last-child {
		margin-top: 5px;
	}
`

const Toggle = styled.span`
	position: relative;
	padding: 0 4px;
	display: flex;
	align-items: center;

	& input {
		width: 40px;
		height: 10px;
		background: #555;
		position: relative;
		border-radius: 5px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		cursor: pointer;
		vertical-align: 2px;
		outline: none;
	}

	& input:checked + label {
		left: 30px;
	}

	& input + label {
		left: 30px;
	}

	& input:focus-visible {
		outline: solid 2px white;
	}

	& input + label {
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		transition: all 0.3s ease;
		cursor: pointer;
		position: absolute;
		left: 2px;
		background: #fff;
		opacity: 0.9;
		background-color: cyan;
	}
`
