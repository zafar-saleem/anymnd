import styled from 'styled-components';
import Title from 'components/title/';
import Sidebar from 'pages/chat/components/sidebar/';
import ChatContents from 'pages/chat/components/chatContents/';

const Wrapper = styled.div`
	padding: 20px;
	max-width: 1300px;
	height: 100%;
	margin: auto;
	@media (max-width: 450px) {
		padding: 0;
		// overflow: hidden;

		& > .title {
			padding: 30px 0;
		}
	}
`;

const Grid = styled.div`
	display: grid;
	height: 100%;
	grid-template-columns: 1fr 2fr;
	background-color: #f4f5fb;
`;

const Chat = () => {
	return (
		<Wrapper>
			<Title
				title='1 day chat App'
				notice='All messages will be deleted at every 00:00 UTC'
			/>
			<Grid>
				<Sidebar />
				<ChatContents />
			</Grid>
		</Wrapper>
	);
}

export default Chat;
