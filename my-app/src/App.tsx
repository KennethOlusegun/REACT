import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Button = styled.button`
	background: red;
	padding: 16px;
	color: black;
`
export const Text = styled.p`
	font-size: 20px
`

export default function App() {
  return (
	<Container>
		  <Header>
			<Text>Hello World</Text>
			<Button/>
		</Header>
	</Container>
  );
}


