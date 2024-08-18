import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { CircleButton, ETHPrice, NFTTitle, RectButton, SubInfo } from ".";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 350 }}>
        <Image
          source={data?.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View
        style={{
          width: "100%",
          padding: SIZES.font,
        }}
      >
        <NFTTitle
          title={data?.name}
          subTitle={data?.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ETHPrice price={data?.price} />
          <RectButton
            minWidth={120}
            fontSize={FONTS.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
