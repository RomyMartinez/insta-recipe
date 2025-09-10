import { styles } from "./styles";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { categories, type Category } from "@/types/category";

interface CollectionProps {
  category: Category;
  onCategorySelect: (category: Category) => void;
}

export default function Collection({
  category,
  onCategorySelect,
}: CollectionProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Collection</Text>
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
  );
}
