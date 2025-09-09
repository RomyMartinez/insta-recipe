import {
  FlatList,
  FlatListProps,
  type StyleProp,
  type ViewStyle,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
type Props<T> = FlatListProps<T> & {
  title?: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function List<T>({
  title,
  emptyMessage,
  containerStyle,
  data,
  renderItem,
  ...props
}: Props<T>) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={[styles.listContent, containerStyle]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>{emptyMessage}</Text>
        )}
        {...props}
      />
    </View>
  );
}
