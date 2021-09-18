import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../title/';
// Main div element with title's styles.
const Container = styled.div`
	h1 {
		padding: 15px 15px 0 15px;
		text-align: left;
	}
`;
// List element
const UserList = styled.ul``;
// list items
const UserListItem = styled.li``;
// List items text with display block, font styles
// animation on hover.
const UserListItemText = styled(Link)`
	display: block;
	padding: 15px;
	text-decoration: none;
	font-weight: bold;
	color: #333333;
	transition: 180ms all ease-in-out;
	&:hover {
		background-image: -webkit-linear-gradient(right, #f7f9fb, #ffffff);
	}
`;
/**
* User component that renders list of users.
* 
*	@param {function} toggleOpen - It is a function to update the
* parent state to open and close the menu.
* 
* @returns {JSX} Component User Interface.
*/
const Users = ({ toggleOpen }) => {
	return (
		<Container>
			<Title title='Choose your user' size='1rem' weight='normal' />
			<UserList>
				<UserListItem>
					<UserListItemText
						to='#'
						onClick={toggleOpen}
					>
						Joyse
					</UserListItemText>
				</UserListItem>
				<UserListItem>
					<UserListItemText
						to='#'
						onClick={toggleOpen}
					>
						Sam
					</UserListItemText>
				</UserListItem>
				<UserListItem>
					<UserListItemText
						to='#'
						onClick={toggleOpen}
					>
						Russel
					</UserListItemText>
				</UserListItem>
			</UserList>
		</Container>
	);
}

export default Users;
