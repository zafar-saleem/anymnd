import styled from 'styled-components';
import ChatBox from './chatBox/';
import Messages from './messages/';
import Title from '../../../../components/title/';
import MessagesProvider from './context/messages/';

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

const ChatContents = () => {
	return (
		<Container>
			<Title title='LGTM Channel' weight='normal' />
			<MessagesProvider>
				<Messages />
				<ChatBox />
			</MessagesProvider>
		</Container>
	);
}

export default ChatContents;
