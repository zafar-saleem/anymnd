import { useState } from 'react';
import styled from 'styled-components';
import Hamburger from '../hamburger/';
import Users from '../users/';
import Channels from '../channels/';

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
		background: #ffffff;
		box-shadow: 0 5px 10px #999999;
		z-index: 10;
	}
	&.open {
		left: 0;
	}
	&.close {
		left: -100vw;
	}
`;
/**
* Sidebar component that renders list of users and channels.
* 
* @returns {JSX} Component User Interface.
*/
const Sidebar = () => {
	/**
	 * Declare 'openMenu' state variable. This shows and hides menu.
	 * 
	 * @type {boolean, function}
	 */
	const [openMenu, setOpenMenu] = useState(false);
	/**
  * toggleOpen function updates the state.
  */
	const toggleOpen = () => {
		/**
	  * Checks if openMenu is false, if it is then...
	  */
		if (!openMenu) {
			// set overflow to hidden on body tag so that user cannot scroll
			// up and down.
			document.querySelector('body').style.overflow = 'hidden';
			// update the local state.
			return setOpenMenu(true);
		}
		// set up overflow to inherit on body tag and users can scroll now.
		document.querySelector('body').style.overflow = 'inherit';
		// update local state.
		return setOpenMenu(false);
	};

	return (
		<Container>
			<List className={openMenu ? 'open' : 'close'}>
				<Users toggleOpen={toggleOpen} />
				<Channels toggleOpen={toggleOpen} />
			</List>
			<Hamburger open={openMenu} toggleOpen={toggleOpen} />
		</Container>
	);
}

export default Sidebar;
