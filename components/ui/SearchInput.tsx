import { StyleSheet, TextInput } from 'react-native';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { XStack } from 'tamagui';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';
import { useRef } from 'react';
import { useFocus } from 'react-native-web-hooks';
import { colorVariables } from '@/constants/colorVariables';

export default function SearchInput() {
  const ref = useRef(null);
  const isFocus = useFocus(ref);

  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  return (
    <XStack style={styles.searchSection}>
      <MagnifyingGlassIcon style={styles.searchIcon} />
      <TextInput
        ref={ref}
        style={[styles.input, isFocus && { borderColor: colorVariables.accent }]}
        placeholder={i18n.t('general.findTheBook')}
      />
    </XStack>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchIcon: {
    width: 10,
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
