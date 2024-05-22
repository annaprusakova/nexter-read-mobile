import { StyleSheet, View } from 'react-native';
import { Avatar, H5, XStack, YStack, Text } from 'tamagui';
import CustomButton from '@/components/ui/customButton/CustomButton';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';
import { userMockData } from '@/userMockData';

export default function ReadingChallenge() {
  //TODO: buttons

  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  return (
    <View style={styles.container}>
      <XStack gap={'$5'}>
        <Avatar circular size="$10">
          <Avatar.Image accessibilityLabel="Cam" src={userMockData.avatar} />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        {userMockData.isReadingChallengeActive ? (
          <YStack gap={'$2'}>
            <H5>{i18n.t('myBooks.readingChallenge')}</H5>
            <Text>{i18n.t('myBooks.youHaveRead', { books: 4, allBooks: 25 })}</Text>
            <CustomButton
              type={'generalEmpty'}
              text={i18n.t('myBooks.update')}
              onClick={() => null}
            />
          </YStack>
        ) : (
          <YStack>
            <H5>{i18n.t('myBooks.noActiveChallenge')}</H5>
            <CustomButton
              type={'generalEmpty'}
              text={i18n.t('myBooks.createChallenge')}
              onClick={() => null}
            />
          </YStack>
        )}
      </XStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
