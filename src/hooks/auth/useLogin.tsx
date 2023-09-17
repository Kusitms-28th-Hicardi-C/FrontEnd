import { useMutation, useQueryClient } from 'react-query';
import { hicardiAxios as axios } from '../../apis/axios';
import { Login } from '../../interfaces/auth';
import { authKeys } from '../../constants/authKey';

async function userLogin(login: Login): Promise<void> {
  await axios.post(`/api/v1/user/sign-in`, login);
}

interface UseLogin {
  mutate: () => void;
}

export function useUserLogin(login: Login): UseLogin {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => userLogin(login), {
    onSuccess: () => {
      queryClient.invalidateQueries(authKeys.all);
    },
  });
  return { mutate };
}
