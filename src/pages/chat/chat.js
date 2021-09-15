import styled from 'styled-components';
import Title from 'components/title/';
import Sidebar from 'pages/chat/components/sidebar/';

const Wrapper = styled.div`
	padding: 20px;
	// background: red;
	@media (max=max-width: 450px) {
		overflow: hidden;
	}
`;

const Chat = () => {
	return (
		<Wrapper>
			<Title
				title='1 day chat App'
				notice='All messages will be deleted at every 00:00 UTC'
			/>
			<Sidebar />
		</Wrapper>
	);
}

export default Chat;
