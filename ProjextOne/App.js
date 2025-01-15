import { ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCard/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


