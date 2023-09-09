import Button from '@/components/UI/Button';
import { logOutUser } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/hooks/hooks';

const UserNavActions = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button
        variant='transparent'
        onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>
    </div>
  );
};

export default UserNavActions;
