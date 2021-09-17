import styled from 'styled-components';

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

const Button = ({ text }) => {
	return (
		<ButtonContainer>{text}</ButtonContainer>
	);
}

export default Button;
