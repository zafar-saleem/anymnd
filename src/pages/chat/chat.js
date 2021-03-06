import styled from 'styled-components';
import Title from '../../components/title/';
import Sidebar from '../../components/sidebar/';
import ChatContents from '../../components/chatContents/';
import MessagesProvider from '../..//contexts/messages/';

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
	@media (max-width: 450px) {
		display: block;
	}
`;

/**
* Chat component that renders Title, SideBar and ChatContents components.
* 
* @returns {JSX} Component User Interface.
*/
const Chat = () => {
	return (
		<Wrapper>
			<Title
				title='1 day chat App'
				notice='All messages will be deleted at every 00:00 UTC'
			/>
			<MessagesProvider>
				<Grid>
					<Sidebar />
					<ChatContents />
				</Grid>
			</MessagesProvider>
		</Wrapper>
	);
}

export default Chat;
