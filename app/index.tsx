import { View, StyleSheet } from 'react-native';
import { Image, useTheme } from 'tamagui';
import { useEffect, useState } from 'react';
import Start from '@/components/Start';
import { colorVariables } from '@/constants/colorVariables';

export default function Index() {
  const theme = useTheme();
  //TODO: theme
  console.log(theme.color1?.val);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo2.png')} style={styles.logo} />
      {flag && <Start />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorVariables.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 200,
  },
});
