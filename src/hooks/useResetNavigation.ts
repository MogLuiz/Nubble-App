import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '@routes';

export function useResetNavigation() {
  const navigation = useNavigation();

  const resetSuccessScreen = (params: RootStackParams['SuccessScreen']) => {
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
  };

  return {resetSuccessScreen};
}
