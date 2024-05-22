import { Card, H2, Paragraph, XStack } from 'tamagui';
import { I18n } from 'i18n-js';
import { translations } from '@/localization';

type ShelfProps = {
  shelfName: string;
  booksAmount: number;
  lastCovers: string[];
};
export default function Shelf({ shelfName, booksAmount, lastCovers }: ShelfProps) {
  const i18n = new I18n(translations);
  i18n.locale = 'uk';
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';
  return (
    <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$4" gap>
      <Card elevate size="$4" bordered>
        <Card.Header padded>
          <H2>{i18n.t(`myBooks.${shelfName}`)}</H2>
          <Paragraph theme="alt2">
            {i18n.t('myBooks.booksAmount', { books: booksAmount })}
          </Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
        </Card.Footer>
      </Card>
    </XStack>
  );
}
