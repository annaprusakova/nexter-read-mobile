import { Pressable, StyleSheet } from 'react-native';
import { H4, SizableText } from 'tamagui';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';
import Container from '@/components/ui/Container';
import { colorVariables } from '@/constants/colorVariables';
import { router } from 'expo-router';
import CustomButton from '@/components/ui/customButton/CustomButton';

export default function Start() {
  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  const handlePressSignin = () => {
    router.push('/signIn');
  };
  return (
    <Container gap={'$5'} outerStyles={styles.container}>
      <SizableText size="$5" style={styles.text}>
        {i18n.t('start.firstText')}
      </SizableText>
      <CustomButton type={'big'} onClick={handlePressSignin} text={i18n.t('start.getStarted')} />
      <Pressable onPress={() => router.push('/register')}>
        <H4 style={styles.text}>{i18n.t('start.register')}</H4>
      </Pressable>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: colorVariables.dark,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: colorVariables.primary,
    color: colorVariables.white,
    borderRadius: 20,
  },
});
