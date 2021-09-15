import styled from 'styled-components';

const TitleContainer = styled.header``;

const TitleText = styled.h1`
	font-size: ${props => props.size || `1.25rem`}; // 1.25rem;
	font-weight: ${props => props.weight || 'bold'};
	@media (max-width: 450px) {
		text-align: center;
	}
`;

const Notice = styled.p`
	@media (max-width: 450px) {
		text-align: center;
	}
`;

const Title = ({ title, notice, size, weight }) => {
	return (
		<TitleContainer>
			<TitleText size={size} weight={weight}>{title}</TitleText>
			<Notice>{notice}</Notice>
		</TitleContainer>
	);
}

export default Title;
