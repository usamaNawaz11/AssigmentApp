import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Body_SectionB from "./Body_SectionB";
import Body_SectionC from "./Body_SectionC";
import Footer_SectionD from "./Footer_SectionD";
import Header_SectionA from "./Header_SectionA";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <Header_SectionA />
      <Body_SectionB />
      <Body_SectionC />
      <Footer_SectionD />
    </SafeAreaView>

  );
}
