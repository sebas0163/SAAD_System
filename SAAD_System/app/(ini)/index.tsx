import { Image, StyleSheet, Platform } from 'react-native';
import { Index } from '@/components/templates';

/**
 * The `IndexScreen` function returns the `Index` component in a TypeScript React application.
 * @returns The `Index` component is being returned from the `IndexScreen` function.
 */
export default function IndexScreen() {
  return (
    <Index />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
