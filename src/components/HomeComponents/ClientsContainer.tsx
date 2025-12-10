import { StyleSheet, View, FlatList } from "react-native";
import { useTheme, Text, Card, Avatar } from "react-native-paper";
import VStack from "../Stacks/VStack";
import HStack from "../Stacks/HStack";


export default function ClientsContainer() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: '#616161' }]}>
      <VStack>
          <View>
            <Text variant="titleLarge">Clientes Ativos</Text>
          </View>

          <View>
            <Text variant="titleLarge" style={{ textAlign: 'center', color: '#000' }}>Consultas Hoje</Text>
          </View>
      </VStack>''
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});