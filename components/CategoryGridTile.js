import { View, Pressable } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
};

export default CategoryGridTile;