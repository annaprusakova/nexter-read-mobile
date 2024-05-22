import { Button } from 'tamagui';
import { colorVariables } from '@/constants/colorVariables';
import { StyleSheet } from 'react-native';
import { useRef } from 'react';
import { useActive, useFocus } from 'react-native-web-hooks';

type ButtonProps = {
  type: 'generalEmpty' | 'generalFull' | 'big' | 'plus';
  text: string;
  onClick: () => void;
};
export default function CustomButton({ type, onClick, text }: ButtonProps) {
  const ref = useRef(null);
  const isFocus = useFocus(ref);
  const isActive = useActive(ref);

  const buttonByType = () => {
    switch (type) {
      case 'generalEmpty':
        return (
          <Button
            ref={ref}
            size={'$3'}
            color={colorVariables.white}
            onPress={onClick}
            style={[
              styles.generalEmpty,
              (isFocus || isActive) && {
                backgroundColor: colorVariables.darkAccent,
                color: colorVariables.white,
              },
            ]}>
            {text}
          </Button>
        );
      case 'generalFull':
        return (
          <Button
            size={'$3'}
            color={colorVariables.darkAccent}
            onPress={onClick}
            style={styles.generalFull}>
            {text}
          </Button>
        );
      case 'big':
        return (
          <Button
            size={'$6'}
            color={colorVariables.darkAccent}
            style={styles.bigButton}
            onPress={onClick}>
            {text}
          </Button>
        );
      default:
        return (
          <Button size={'$6'} color={colorVariables.darkAccent} onPress={onClick}>
            {text}
          </Button>
        );
    }
  };
  return buttonByType();
}

const styles = StyleSheet.create({
  generalEmpty: {
    backgroundColor: colorVariables.white,
    color: colorVariables.darkAccent,
    borderColor: colorVariables.darkAccent,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
  },
  generalFull: {
    backgroundColor: colorVariables.darkAccent,
    color: colorVariables.white,
    borderRadius: 20,
  },
  bigButton: {
    alignSelf: 'stretch',
    backgroundColor: colorVariables.primary,
    color: colorVariables.white,
    borderRadius: 20,
  },
});
