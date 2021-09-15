import styled from 'styled-components';

const TitleContainer = styled.header``;

const TitleText = styled.h1`
	font-size: 1.25rem;
	@media (max-width: 450px) {
		text-align: center;
	}
`;

const Notice = styled.p`
	@media (max-width: 450px) {
		text-align: center;
	}
`;

const Title = ({ title, notice }) => {
	return (
		<TitleContainer>
			<TitleText>{title}</TitleText>
			<Notice>{notice}</Notice>
		</TitleContainer>
	);
}

export default Title;
