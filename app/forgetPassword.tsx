import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';

export default function ForgetPassword() {
  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  return (
    <View style={styles.view}>
      <Stack.Screen options={{ headerTitle: `${i18n.t('forgetPassword.forgetPassword')}` }} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
