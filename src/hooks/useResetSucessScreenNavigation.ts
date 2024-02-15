import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '@routes';

export function useResetSucessScreenNavigation() {
  const navigation = useNavigation();

  function reset(params: RootStackParams['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
