import { useMutation, useQueryClient } from 'react-query';
import { hicardiAxios as axios } from '../../apis/axios';
import { Signup } from '../../interfaces/auth';
import { authKeys } from '../../constants/authKey';

async function userSignup(signup: Signup): Promise<void> {
  await axios.post(`/api/v1/user/sign-up`, signup);
}

interface UseSignup {
  mutate: () => void;
}

export function useUserSignup(signup: Signup): UseSignup {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => userSignup(signup), {
    onSuccess: () => {
      queryClient.invalidateQueries(authKeys.all);
    },
  });
  return { mutate };
}
