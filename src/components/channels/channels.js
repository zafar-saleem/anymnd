import { Link, useParams } from 'react-router-dom';
import Title from '../title/';
import styled from 'styled-components';

// Main container and I set title's padding
// and text alignment.
const Container = styled.div`
	h1 {
		padding: 15px 15px 0 15px;
		text-align: left;
	}
`;
// Channel list container
const ChannelList = styled.ul``;
// channel item contianer
const ChannelListItem = styled.li``;
// Text of the channel item. I setup it as display
// block with padding and some font styles and
// transitions on hover and sets it's background
// when it is active.
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
/**
* Channels list component that renders list of channels.
* 
* @param {function} function - It is the function when an item
* is clicked it changes the state of open to false to close
* the menu.
* 
* @returns {JSX} Component User Interface.
*/
const Channels = ({ toggleOpen }) => {
	const { channelId } = useParams();
	return (
		<Container>
			<Title title='Choose your channel' size='1rem' weight='normal' />
			<ChannelList>
				<ChannelListItem>
					<ChannelListItemText
						to='1'
						className={channelId === '1' ? 'active' : ''}
						onClick={toggleOpen}
					>
					General Channel
				</ChannelListItemText>
				</ChannelListItem>
				<ChannelListItem>
					<ChannelListItemText
						to='2'
						className={channelId === '2' ? 'active' : ''}
						onClick={toggleOpen}
					>
					Technology Channel
				</ChannelListItemText>
				</ChannelListItem>
				<ChannelListItem>
					<ChannelListItemText
						to='3'
						className={channelId === '3' ? 'active' : ''}
						onClick={toggleOpen}
					>
					LGTM Channel
				</ChannelListItemText>
				</ChannelListItem>
			</ChannelList>
		</Container>
	);
}

export default Channels;
