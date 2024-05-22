import { StyleSheet, View } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { colorVariables } from '@/constants/colorVariables';
import Shelf from '@/components/Shelf';

export default function Shelves() {
  return (
    <View>
      <SlidingUpPanel containerStyle={styles.sliding}>
        <View style={styles.container}>
          <Shelf shelfName={'currentlyReading'} booksAmount={3} lastCovers={[]} />
        </View>
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliding: {
    backgroundColor: colorVariables.white,
    borderRadius: 50,
  },
});
