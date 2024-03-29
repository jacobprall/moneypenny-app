import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenheight: width < height ? height : width
};

export default metrics;