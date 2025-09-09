import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { categories, type Category } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/theme";

type SearchProps = {
  onSearch: (search: string) => void;
  onCategorySelect: (category: Category) => void;
  category: Category;
  search: string;
};

export default function Search({
  onSearch,
  onCategorySelect,
  category,
  search,
}: SearchProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for a recipe</Text>
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color={colors.primary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a recipe"
            value={search}
            onChangeText={onSearch}
            placeholderTextColor={colors.textSecondary}
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.categoryContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((categoryItem) => (
            <TouchableOpacity
              activeOpacity={1}
              key={categoryItem.id}
              style={[
                styles.categoryItem,
                category.id === categoryItem.id && styles.activeCategoryItem,
              ]}
              onPress={() => onCategorySelect(categoryItem)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category.id === categoryItem.id && styles.activeCategoryText,
                ]}
              >
                {categoryItem.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
