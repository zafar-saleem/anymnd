import { useEffect } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../../loader/';
import Chats from './chats/';
import { useMessages } from '../../../contexts/messages/';

const Wrapper = styled.div`
	overflow-y: scroll;
  height: 69vh;
`;

const Container = styled.div``;

const Messages = () => {
	const { loading, error, data } = useMessages();
	return (
		<Wrapper>
			<Loader loading={loading} error={error}>
			{
				data?.fetchLatestMessages?.length === 0
				?
				<p>There are no messages</p>
				:
					error || !error
					?
					<Container>
						{/* map through data.fetchLatestMessages */}
						<Chats
							position='left'
							message={{
								text: 'Hello, I\'m Russell. How can I help you today?',
								time: '08:56',
								sent: 'Sent',
								name: 'Russell',
							}}
						/>
						<Chats
							position='right'
							message={{
								text: 'Hi, Russell. I need more information about Developer Plan.',
								time: '08:55',
								sent: 'Sent',
								name: 'Joyse',
							}}
						/>
						<Chats
							position='right'
							message={{
								text: 'Well I am not sure. I have results to show you.',
								time: '08:55',
								sent: 'Unsent',
								name: 'Sam',
							}}
						/>
						<Chats
							position='left'
							message={{
								text: 'Well I am not sure. I have results to show you. Well I am not sure. Well I am not sure. Well I am not sure. ',
								time: '08:55',
								sent: 'Unsent',
								name: 'Sam',
							}}
						/>
						<Chats
							position='left'
							message={{
								text: 'Well I am not sure. I have results to show you.',
								time: '08:55',
								sent: 'Unsent',
								name: 'Sam',
							}}
						/>
						<Chats
							position='right'
							message={{
								text: 'Well I am not sure. I have results to show you.',
								time: '08:55',
								sent: 'Unsent',
								name: 'Sam',
							}}
						/>
					</Container>
					:
					null
			}
			</Loader>
		</Wrapper>
	);
}

export default Messages;
