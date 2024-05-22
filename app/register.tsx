import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Form, Input, XStack } from 'tamagui';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';
import Container from '@/components/ui/Container';
import { colorVariables } from '@/constants/colorVariables';
import { Link, Stack } from 'expo-router';

export default function Register() {
  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  const handleRegister = () => {
    //TODO: register
  };

  return (
    <View style={styles.view}>
      <Stack.Screen options={{ headerTitle: `${i18n.t('register.register')}` }} />
      <Container gap={'$5'} outerStyles={styles.container}>
        <Form
          alignItems="center"
          minWidth={300}
          gap="$2"
          onSubmit={handleRegister}
          backgroundColor="$background"
          padding="$8">
          <Text style={styles.firstText}>{i18n.t('register.firstMessage')}</Text>
          <Input style={styles.input} flex={1} size="$5" placeholder={i18n.t('register.email')} />
          <Input
            style={styles.input}
            flex={1}
            size="$5"
            placeholder={i18n.t('register.username')}
          />
          <Input
            style={styles.input}
            flex={1}
            size="$5"
            placeholder={i18n.t('register.password')}
          />
          <Input
            style={styles.input}
            flex={1}
            size="$5"
            placeholder={i18n.t('register.confirmPassword')}
          />
          <Button size="$3" style={styles.submitButton}>
            {i18n.t('register.register')}
          </Button>
        </Form>
      </Container>
      <XStack>
        <Text>{i18n.t('register.already')}</Text>
        <Link href="/signIn" asChild>
          <Pressable>
            <Text style={styles.registerButton}>{i18n.t('register.signIn')}</Text>
          </Pressable>
        </Link>
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
