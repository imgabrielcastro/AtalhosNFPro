import { Text } from "react-native-paper";
import VStack from "../../components/Stacks/VStack";
import CarouselNfp from "./components/CarouselNfp";

const NextFitPay = () => {
    return (
       <VStack style={{alignItems: "center", justifyContent: "center", flex: 1 }}>
            <CarouselNfp />
        </VStack>
    )
};

export default NextFitPay;