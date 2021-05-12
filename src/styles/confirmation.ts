import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },

  form: {
    flex: 1,
  },

  emoji: {
    fontSize: 70,
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 38,
    marginTop: 15,
  },

  subTitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    color: colors.heading,
    paddingVertical: 10,
  },

  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 30,
  },
});

export default styles;
