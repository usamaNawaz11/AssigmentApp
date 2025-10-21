import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header_SectionA from "./Header_SectionA";
import Header_SectionB from "./Header_SectionB";
import Header_SectionC from "./Header_SectionC";
import Header_SectionD from "./Header_SectionD";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <Header_SectionA />
      <Header_SectionB />
      <Header_SectionC />
            <Header_SectionD/>
    </SafeAreaView>

  );
}
