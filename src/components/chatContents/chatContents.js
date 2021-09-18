import styled from 'styled-components';
import ChatBox from './chatBox/';
import Messages from './messages/';
import Title from '../title/';
// Main container which has a relative position
// with some padding and sets up styles for 
// smaller screens.
const Container = styled.div`
	position: relative;
	padding: 20px;
	// overflow-y: scroll;
 //  height: 69vh;
	@media (max-width: 450px) {
		height: 100vh;
		padding: 10px;
	}

	.title {
		border-bottom: 1px solid #e6ecf3;
	}
`;
/**
* ChatContents component that renders title, Messages list
* and chatBox.
* 
* @returns {JSX} Component User Interface.
*/
const ChatContents = () => {
	return (
		<Container>
			<Title title='LGTM Channel' weight='normal' />
			<Messages />
			<ChatBox />
		</Container>
	);
}

export default ChatContents;
