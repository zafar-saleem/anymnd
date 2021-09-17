import { Link, useParams } from 'react-router-dom';
import Title from '../title/';
import styled from 'styled-components';

const Container = styled.div`
	h1 {
		padding: 15px 15px 0 15px;
		text-align: left;
	}
`;

const ChannelList = styled.ul``;

const ChannelListItem = styled.li``;

const ChannelListItemText = styled(Link)`
	display: block;
	padding: 15px;
	text-decoration: none;
	font-weight: bold;
	color: #333333;
	transition: 180ms all ease-in-out;
	&:hover {
		background-image: -webkit-linear-gradient(right, #f7f9fb, #ffffff);
	}
	&.active {
		background-image: -webkit-linear-gradient(right, #f7f9fb, #ffffff);
	}
`;

const Channels = () => {
	const { channelId } = useParams();
	return (
		<Container>
			<Title title='Choose your channel' size='1rem' weight='normal' />
			<ChannelList>
				<ChannelListItem>
					<ChannelListItemText to='1' className={channelId == 1 ? 'active' : ''}>General Channel</ChannelListItemText>
				</ChannelListItem>
				<ChannelListItem>
					<ChannelListItemText to='2' className={channelId == 2 ? 'active' : ''}>Technology Channel</ChannelListItemText>
				</ChannelListItem>
				<ChannelListItem>
					<ChannelListItemText to='3' className={channelId == 3 ? 'active' : ''}>LGTM Channel</ChannelListItemText>
				</ChannelListItem>
			</ChannelList>
		</Container>
	);
}

export default Channels;
