import { useApolloClient, useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(LOGIN_USER);
  
    const signIn = async ({ username, password }) => {
      const { data } = await mutate( { variables: { credentials: { username, password } } });
      await authStorage.setAccessToken(data.authorize.accessToken);

      apolloClient.resetStore();
    };
  
    return [signIn, result];
  };

export default useSignIn;