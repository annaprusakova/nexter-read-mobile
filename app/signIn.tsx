import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Input, XStack } from 'tamagui';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';
import Container from '@/components/ui/Container';
import { colorVariables } from '@/constants/colorVariables';
import { router, Stack } from 'expo-router';

export default function SignIn() {
  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  const handleLogin = () => {
    //TODO: login
    router.push('/(tabs)/home');
  };

  return (
    <View style={styles.view}>
      <Stack.Screen options={{ headerTitle: `${i18n.t('signIn.getStarted')}` }} />
      <Container gap={'$5'} outerStyles={styles.container}>
        <Text style={styles.firstText}>{i18n.t('signIn.firstMessage')}</Text>
        <Input style={styles.input} flex={1} size="$5" placeholder={i18n.t('signIn.email')} />
        <Input style={styles.input} flex={1} size="$5" placeholder={i18n.t('signIn.password')} />
        <Button size="$3" style={styles.submitButton} onPress={handleLogin}>
          {i18n.t('signIn.getStarted')}
        </Button>
        <Pressable onPress={() => router.push('/forgetPassword')}>
          <Text>{i18n.t('signIn.forgotPassword')}</Text>
        </Pressable>
      </Container>
      <XStack>
        <Text>{i18n.t('signIn.newMember')}</Text>
        <Pressable onPress={() => router.push('/register')}>
          <Text style={styles.registerButton}>{i18n.t('signIn.register')}</Text>
        </Pressable>
      </XStack>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  firstText: {
    color: colorVariables.dark,
    marginBottom: 20,
  },
  input: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  submitButton: {
    alignSelf: 'stretch',
    backgroundColor: colorVariables.primary,
    color: colorVariables.white,
    marginBottom: 10,
  },
  registerButton: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
