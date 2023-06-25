import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

type MenuOptionsProps = {
  name: string;
  iconName: string;
  href: string;
};

export const MenuOption = (props: MenuOptionsProps) => {
  const { name, iconName, href } = props;

  return (
    <Link href={href ?? ""} asChild>
      <Pressable style={styles.optionRow}>
        <MaterialCommunityIcons name={iconName} size={26} color="gray" />

        <Text style={styles.optionText}>{name}</Text>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
