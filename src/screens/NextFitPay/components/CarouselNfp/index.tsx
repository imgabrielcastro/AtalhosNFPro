import React, { useRef } from "react";
import { View, Dimensions, Animated, Image } from "react-native";
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const SPACING = 20;
const cards = [
  require("../../../../assets/images/nfp1.png"),
  require("../../../../assets/images/nfp2.png"),
  require("../../../../assets/images/nfp3.png"),
];
export default function CarouselNfp() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
    >
      <Animated.FlatList
        data={cards}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2,
          alignItems: "center",
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (CARD_WIDTH + SPACING) * (index - 1),
            (CARD_WIDTH + SPACING) * index,
            (CARD_WIDTH + SPACING) * (index + 1),
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={{
                width: CARD_WIDTH,
                marginHorizontal: SPACING / 2,
                transform: [{ scale }],
                opacity,
              }}
            >
              <View
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  backgroundColor: "#000",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.25,
                  shadowRadius: 20,
                  elevation: 10,
                }}
              >
                <Image
                  source={item}
                  style={{ width: "100%", height: 550 }}
                  resizeMode="cover"
                />
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
