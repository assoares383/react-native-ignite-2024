import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 48,
  },
  eventDate: {
    color: "#9b9b9b",
    fontSize: 14,
    fontWeight: 700,
  },
  input: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
    marginBottom: 42,
  },
});

export default styles;
