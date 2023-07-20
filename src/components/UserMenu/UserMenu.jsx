import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import defaultAvatar from './avatar.png';
import { Container, Name, Avatar, Button } from './UserMenu.styles';
import { ReactComponent as AddIcon } from '../icons/logout.svg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Name>Welcome {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <AddIcon />
      </Button>
    </Container>
  );
}