import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../../../components/title/';

const Container = styled.div`
	// min-height: 50vh;
	h1 {
		padding: 15px 15px 0 15px;
		text-align: left;
	}
`;

const UserList = styled.ul``;

const UserListItem = styled.li``;

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

const Users = () => {
	return (
		<Container>
			<Title title='Choose your user' size='1rem' weight='normal' />
			<UserList>
				<UserListItem><UserListItemText to='#'>Joyse</UserListItemText></UserListItem>
				<UserListItem><UserListItemText to='#'>Sam</UserListItemText></UserListItem>
				<UserListItem><UserListItemText to='#'>Russel</UserListItemText></UserListItem>
			</UserList>
		</Container>
	);
}

export default Users;
