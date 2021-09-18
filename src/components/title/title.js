import styled from 'styled-components';
// header element
const TitleContainer = styled.header``;
// Title text with h1 element.
const TitleText = styled.h1`
	font-size: ${props => props.size || `1.25rem`}; // 1.25rem;
	font-weight: ${props => props.weight || 'bold'};
	@media (max-width: 450px) {
		text-align: center;
	}
`;
// p element that contains the notice.
const Notice = styled.p`
	@media (max-width: 450px) {
		text-align: center;
	}
`;
/**
* Title component that renders title.
* 
*	@param {string} title - It is the test title.
* @param {string} notice - It is the text notice.
* @param {number} size - It is the size of the fonts.
* @param {string} weight - bold or normal font.
* 
* @returns {JSX} Component User Interface.
*/
const Title = ({ title, notice, size, weight }) => {
	return (
		<TitleContainer className='title'>
			<TitleText size={size} weight={weight}>{title}</TitleText>
			<Notice>{notice}</Notice>
		</TitleContainer>
	);
}

export default Title;
