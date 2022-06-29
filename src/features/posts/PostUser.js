import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostUser = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const user = users.find((user) => user.id === userId);

  return <span>by {user ? user.name : 'Unknown user'}</span>;
};

export default PostUser;
