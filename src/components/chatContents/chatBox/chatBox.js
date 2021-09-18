import Button from '../../button/';
import styled from 'styled-components';
import { useMessages } from '../../../contexts/messages/';
// Main container div element with absolute position
// and styles for smaller screen.
const Container = styled.div`
	position: absolute;
	width: 94%;
	bottom: 0;
	@media (max-width: 450px) {
		width: 96%;
	}
`;
// Textarea with block display and width, height and padding
// properties setup. With some font styles and border.
const ChatBoxText = styled.textarea`
	display: block;
	width: 100%;
	height: 100px;
	padding: 10px;
	margin-bottom: 10px;
	font-family: Sans-serif;
	font-size: 1rem;
	border: 1px solid #ced4da;
	border-radius: .25rem;
`;
/**
* ChatBox component that renders textarea for entering
* message and a button to send a message.
* 
* @returns {JSX} Component User Interface.
*/
const ChatBox = () => {
	const { error, postMessageHere } = useMessages();

	return (
		<Container>
			{
				error || !error
				?
				<form onSubmit={postMessageHere}>
					<ChatBoxText name='message' placeholder='Type you message here...'></ChatBoxText>
					<Button text='Send Message' />
				</form>
				:
				<div>ERROR</div>
			}
		</Container>
	);
}

export default ChatBox;
