import { Link } from 'react-router-dom';
import Title from 'components/title/';
import styled from 'styled-components';

const Container = styled.div`
	h1 {
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
		background-color: #cccccc;
	}
`;

const Channels = () => {
	return (
		<Container>
			<Title title='Choose your channel' size='1rem' weight='normal' />
			<ChannelList>
				<ChannelListItem>
					<ChannelListItemText to=''>General Channel</ChannelListItemText>
				</ChannelListItem>
				<ChannelListItem>
					<ChannelListItemText to=''>Technology Channel</ChannelListItemText>
				</ChannelListItem>
				<ChannelListItem>
					<ChannelListItemText to=''>LGTM Channel</ChannelListItemText>
				</ChannelListItem>
			</ChannelList>
		</Container>
	);
}

export default Channels;
