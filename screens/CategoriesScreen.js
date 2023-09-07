import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"

const CategoriesScreen = () => {
  const renderCategoryItem = itemData => (
    <CategoriesScreen
      title={itemData.title}
      color={itemData.color}
    />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
    />
  )
}

export default CategoriesScreen;
