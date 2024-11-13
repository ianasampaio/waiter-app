import { FlatList } from "react-native";
import { products } from "../../mocks/products";
import { ProductImage, ProductContainer, ProductDetails, Separator, AddToCartButton } from "./styles";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../types/Product";

export function Menu() {
  const [isModalVisible, setIsModalVisible  ] = useState(false);
  const [selectedProduct, setSelectedProduct  ] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
      />

      <FlatList
        data={products}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={handleOpenModal(product)}>
            <ProductImage
              source={{
                // uri: `http://192.168.5.107:3001/uploads/${product.imagePath}`,
                uri: `https://images.pexels.com/photos/29053375/pexels-photo-29053375/free-photo-of-scenic-icelandic-highlands-landscape.jpeg`,
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical:8 }}>{product.description}</Text>
              {/* <Text>{product.imagePath}</Text> */}
              <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton >
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
