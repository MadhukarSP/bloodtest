import {StyleSheet} from 'react-native';

const container = StyleSheet.create({
  outer: {
    flex: 1,
    top: 24,
    backgroundColor: "#F5FCFF"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f57859",
		color: "#ffffff",
		fontSize: 24
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default container;
