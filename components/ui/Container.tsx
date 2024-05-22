import { YStack } from 'tamagui';
import { StyleSheet } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  gap: string;
  outerStyles?: object;
};
export default function Container({ children, gap, outerStyles }: ContainerProps) {
  return (
    <YStack style={{ ...styles.container, ...outerStyles }} gap={gap}>
      {children}
    </YStack>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    maxWidth: 960,
  },
});
