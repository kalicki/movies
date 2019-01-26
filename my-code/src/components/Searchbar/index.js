import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'

const Wrapper = styled.label`
	background: ${p => p.theme.colors.white};
	color: ${p => p.theme.colors.lightGrey};
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border-radius: 0.25rem;
`

const Loupe = () => (
	<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
		<g fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M14.5 14.5l-3.72-3.72"/>
			<circle cx="6.67" cy="6.67" r="5.33"/>
		</g>
	</svg>
)

const Input = styled.input`
	color: ${p => p.theme.colors.dark};
	border: none;
	background: none;
	margin-left: 0.75rem;
	outline: none;
	flex: 1;
	${p => p.theme.typography[0]};
	&::placeholder{
		color: ${p => p.theme.colors.lightGrey};
	}
	&::selection{
		background: ${p => p.theme.colors.lightGrey};
		color: ${p => p.theme.colors.white};
	}
`

const Searchbar = ({className, style, ...props}) => (
	<Container>
		<Wrapper className={className} style={style}>
			<Loupe/>
			<Input placeholder='Search movies...' {...props}/>
		</Wrapper>
	</Container>
)

export default Searchbar