import { Dimensions, Easing } from "react-native";

const SlideFromRight = {
  transitionSpec: {
    open: {
      // animation: "spring",
      // config: {
      //   stiffness: 1000,
      //   damping: 500,
      //   mass: 3,
      //   overshootClamping: true,
      //   restDisplacementThreshold: 0.01,
      //   restSpeedThreshold: 0.01,
      // },

      animation: "timing", // Use timing-based animation
      config: {
        duration: 10000, // Animation duration in milliseconds
        easing: Easing.out(Easing.ease), // Easing function for smooth transition
      },
    },
    close: {
      // animation: "spring",
      // config: {
      //   stiffness: 1000,
      //   damping: 500,
      //   mass: 3,
      //   overshootClamping: true,
      //   restDisplacementThreshold: 0.01,
      //   restSpeedThreshold: 0.01,
      // },

      animation: "timing", // Use timing-based animation
      config: {
        duration: 10000, // Animation duration in milliseconds
        easing: Easing.out(Easing.ease), // Easing function for smooth transition
      },
    },
  },
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [Dimensions.get("window").width, 0],
          }),
        },
      ],
    },
  }),
};

export default SlideFromRight;
