import styled from 'styled-components';
// Main div element.
const Container = styled.div``;
// The main loader div element with rotation animation.
const LoaderWrapper = styled.div`
	position: fixed;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  &:after {
	  content: " ";
	  display: block;
	  width: 64px;
	  height: 64px;
	  margin: 8px;
	  border-radius: 50%;
	  border: 6px solid #39211e;
	  border-color: #39211e transparent #39211e transparent;
	  animation: dual-ring 1.2s linear infinite;
	}
	@media (max-width: 450px) {
		left: 50%;
	}
	@keyframes dual-ring {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
`;
/**
* Loader component that renders the preloader component.
* 
* @param {boolean} loading - It shows while the request is in progress
* or not.
* @param {object} error - It contains the error information.
* @param {DOM} children - It contains the children DOM/JSX elements
* for rendering.
* 
* @returns {JSX} Component User Interface.
*/
const Loader = ({ loading, error, children }) => {
	return (
		<Container>
		{
			loading
			?
			<LoaderWrapper></LoaderWrapper>
			:
			children
		}
		</Container>
	);
}

export default Loader;
