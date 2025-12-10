import { View } from "react-native"
import { Text } from "react-native-paper";
import VStack from "../../components/Stacks/VStack";

const Clients = () => {
    return (
        <VStack style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text variant="titleMedium">Clientes</Text>
        </VStack>
    )
};

export default Clients;