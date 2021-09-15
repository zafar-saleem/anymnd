import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from 'components/title/';

const Container = styled.div`
	h1 {
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
		background-color: #cccccc;
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
