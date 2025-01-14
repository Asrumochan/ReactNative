import FlatCards from './components/FlatCards';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatCards />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


