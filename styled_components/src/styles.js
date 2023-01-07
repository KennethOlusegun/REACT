import styled from 'styled-components'

export const Title = styled.h1`
	color: #f00;
	fontSize: ${props => `${props.fontSize}px`}

	span{
		font-size: 12px;
	}
`;

export const TitleSmall = styled(Title)`
color: #00f
font-size: 16px;
`