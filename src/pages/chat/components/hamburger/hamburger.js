import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HamburgerMenu = styled(Link)`
	display: block;
	position: absolute;
	top: 15px;
  left: 15px;
  z-index: 1;
  width: 50px;
  padding: 10px;
  border-radius: 49%;
`;

const HamburgerMenuItem = styled.span`
	display: none;
	margin: 5px 0;
	width: 100%;
	height: 3px;
	background-color: #666666;
	border-radius: 10px;
	transition: 180ms all ease-in-out;
	@media (max-width: 450px) {
		display: block;
		&.open {
			&.item-one {
				transform: rotate(45deg) translate(1px, 2px);
			}
			&.item-three {
				// transform: rotate(-45deg) translate(3px, -4px);
				transform: rotate(-45deg) translate(9px,-10px);
			}
			&.item-two {
				opacity: 0;
			}
		}
		&.close {
			&.item-one {
				transform: rotate(0deg) translate(0, 0);
			}
			&.item-three {
				transform: rotate(0deg) translate(0, 0);
			}
			&.item-two {
				opacity: 1;
			}
		}
	}
`;

const Hamburger = ({ open, toggleOpen }) => {
	return (
		<HamburgerMenu to='#' onClick={toggleOpen}>
			<HamburgerMenuItem className={open ? ' item-one open' : 'item-one close'}></HamburgerMenuItem>
			<HamburgerMenuItem className={open ? 'item-two open' : 'item-two close'}></HamburgerMenuItem>
			<HamburgerMenuItem className={open ? 'item-three open' : 'item-three close'}></HamburgerMenuItem>
		</HamburgerMenu>
	)
};

export default Hamburger;
