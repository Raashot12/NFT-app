import { View, Text, Image, TextInput, Animated } from "react-native";
import { COLORS, SIZES, assets, FONTS } from "../constants";
import { useEffect, useState } from "react";

const HomeHeader = ({ onSearch }) => {
  const [waveAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Define the animation sequence
    const waveAnimationSequence = Animated.sequence([
      Animated.timing(waveAnimation, {
        toValue: -1.5,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(waveAnimation, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(waveAnimation, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: false,
      }),
    ]);

    // Start the animation loop
    Animated.loop(waveAnimationSequence).start();
  }, []);

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white,
              marginTop: 2,
            }}
          >
            Hello, Victoria
          </Text>
          <Animated.Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,
              color: COLORS.white,
              transform: [{ translateY: waveAnimation }],
            }}
          >
            👋
          </Animated.Text>
        </View>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFts"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
