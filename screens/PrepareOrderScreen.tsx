import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PrepareOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Basket");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#00ccbb]">
      {/* TODO: change the gif */}
      {/* <Animatable.Image
        source={require("../assets/orderloading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      /> */}

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-center text-lg font-bold text-white"
      >
        Waiting for the restaurant to accept your order
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
