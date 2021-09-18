import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
// Main div element that wrappes the entire chat message
const MessageWrapper = styled.div`
	position: relative;
	min-height: 150px;
`;
// Contains the message elements with absolute position
// and grid display. Also setup position either to the 
// left or right with some styles for small screens.
const MessageContainer = styled.div`
	position: absolute;
	display: grid;
	&.left {
		left: 0px;
		grid-template-columns: 1fr 6fr;
	}
	&.right {
		right: 0px;
		grid-template-columns: 6fr 1fr;
	}
	@media (max-width: 450px) {
		width: 100%;
	}
`;
// div element that contains user information
const User = styled.div``;
// user's avatar element. With block display
// and aligened text wiht user icon.
const Avatar = styled.span`
	display: block;
	&.right {
		text-align: right;
	}
	.fa-user {
		font-size: 50px;
	}
`;
// User name span element with block display, some
// styles for fonts.
const Name = styled.span`
	display: block;
	margin-top: 10px;
	font-size: 12px;
	color: #666666;
	&.right {
		text-align: right;
	}
`;
// Message itself with relative position.
const Message = styled.div`
	position: relative;
`;
// The arrow div element with all the syles
// that makes up an arrow.
const ArrowLeft = styled.div`
	position: absolute;
	width: 0; 
  height: 0; 
  top: 3px;
  left: -7px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent; 
  border-right: 7px solid #ffffff;
`;
// The arrow div element with all the syles
// that makes up an arrow.
const ArrowRight = styled.div`
	position: absolute;
	width: 0; 
  height: 0; 
  top: 3px;
  right: -7px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 7px solid #ffffff;
`;
// The message p element with its styles of padding
// margin and background and radius.
const MessageContent = styled.p`
	padding: 10px;
	margin: 0;
	background-color: #ffffff;
	border-radius: 5px;
`;
// The Timestamp span element that contains time of
// the message.
const TimeStamp = styled.span`
	position: absolute;
	left: 5px;
	font-size: 12px;
	color: #666666;
`;
// The sent or unsent span element positioned absolute
// and positioned to the right and set its color based
// on successful or failed message sent.
const Sent = styled.span`
	position: absolute;
	right: 5px;
	font-size: 12px;
	&.Sent {
		color: green;
	}
	&.Unsent {
		color: red;
	}
`;
/**
* Chats component that renders single chat container with data in it.
* 
* @param {string} position - It is the position either left/right of
* the message.
* @param {object} message - It is the message object that contains 
* message specific data such as message itself, username etc.
* 
* @returns {JSX} Component User Interface.
*/
const Chats = ({ position, message }) => {
	return (
		<MessageWrapper>
			<MessageContainer className={position}>
				{
					position === 'left'
					?
					<User>
						<Avatar>
							<FontAwesomeIcon icon={faUser} />
						</Avatar>
						<Name>{message.name}</Name>
					</User>
					:
					null
				}
				<Message>
					{
						position === 'right'
						?
						<ArrowRight></ArrowRight>
						:
						<ArrowLeft></ArrowLeft>
					}
					<MessageContent>
						{message.text}
					</MessageContent>
					<TimeStamp>
						{message.time}
					</TimeStamp>
					<Sent className={message.sent}>{message.sent}</Sent>
				</Message>
				{
					position === 'right'
					?
					<User>
						<Avatar className={position}>
							<FontAwesomeIcon icon={faUser} />
						</Avatar>
						<Name className={position}>{message.name}</Name>
					</User>
					:
					null
				}
			</MessageContainer>
		</MessageWrapper>
	);
}

export default Chats;
