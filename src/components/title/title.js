import styled from 'styled-components';

const TitleContainer = styled.header``;

const TitleText = styled.h1`
	font-size: 1.25rem;
`;

const Notice = styled.p``;

export default function Title({ title, notice }) {
	return (
		<TitleContainer>
			<TitleText>{title}</TitleText>
			<Notice>{notice}</Notice>
		</TitleContainer>
	);
}