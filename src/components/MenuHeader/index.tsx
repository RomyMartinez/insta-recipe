import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/theme";

export default function MenuHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={32} color={colors.white} />
        </View>
        <Text style={styles.name}>John Doe</Text>
      </View>
      <View style={styles.notification}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={colors.gray800}
        />
      </View>
    </View>
  );
}
