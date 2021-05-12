import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 5,
  },

  buttoActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

export default styles;
