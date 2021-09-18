import styled from 'styled-components';

// Main container of the button with specific styles
// for this button. I setup padding and some font styles
// with some animation over hover, setup radius
// and background color.
const ButtonContainer = styled.button`
	padding: 10px;
	color: #FFFFFF;
	font-size: 1rem;
	font-weight: 400;
	cursor: pointer;
	transition: 180ms all ease-in-out;
	background-color: #17a2b8;
	border: 1px solid #17a2b8;
	border-radius: 5px;
	&:hover {
		opacity: .6;
	}
`;
/**
* Button component that renders button with a text.
* 
* @param {string} label - It is the label of the button.
* 
* @returns {JSX} Component User Interface.
*/
const Button = ({ text }) => {
	return (
		<ButtonContainer>{text}</ButtonContainer>
	);
}

export default Button;
