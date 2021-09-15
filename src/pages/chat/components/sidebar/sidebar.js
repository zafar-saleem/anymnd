import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from 'pages/chat/components/hamburger/';
import Users from 'pages/chat/components/users/';
import Channels from 'pages/chat/components/channels/';

const Container = styled.section`
	// padding: 20px;
	border-right: 1px solid #e6ecf3;
	@media (max-width: 450px) {
		position: absolute;
		top: 0;
		left: 0;
		padding: 0;
	}
`;

const List = styled.div`
	// min-height: 100vh;
	@media (max-width: 450px) {
		position: absolute;
		width: 230px;
		height: 100vh;
		padding: 80px 20px 20px;
		transition: 180ms all ease-in-out;
		background: lightblue;
		box-shadow: 0 5px 10px #999999;
	}
	&.open {
		left: 0;
	}
	&.close {
		left: -100vw;
	}
`;

const Sidebar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	
	const toggleOpen = () => {
		if (!openMenu) {
			return setOpenMenu(true);
		}
		return setOpenMenu(false);
	};

	return (
		<Container>
			<List className={openMenu ? 'open' : 'close'}>
				<Users />
				<Channels />
			</List>
			<Hamburger open={openMenu} toggleOpen={toggleOpen} />
		</Container>
	);
}

export default Sidebar;
