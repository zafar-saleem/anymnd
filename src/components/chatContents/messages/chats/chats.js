import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MessageWrapper = styled.div`
	position: relative;
	min-height: 150px;
`;

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

const User = styled.div`
	
`;

const Avatar = styled.span`
	display: block;
	&.right {
		text-align: right;
	}
	.fa-user {
		font-size: 50px;
	}
`;

const Name = styled.span`
	display: block;
	margin-top: 10px;
	&.right {
		text-align: right;
	}
	// text-align: center;
`;

const Message = styled.div`
	position: relative;
`;

const MessageContent = styled.p`
	padding: 10px;
	margin: 0;
	background-color: #ffffff;
	border-radius: 5px;
`;

const TimeStamp = styled.span`
	position: absolute;
	left: 5px;
	// bottom: 0px;
	font-size: 12px;
	color: #666666;
`;

const Sent = styled.span`
	position: absolute;
	right: 5px;
	// bottom: 0;
	font-size: 12px;
	&.Sent {
		color: green;
	}
	&.Unsent {
		color: red;
	}
`;

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
