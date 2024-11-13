import { Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/Product";

interface ProductModalProps {
  visible: boolean;
  onClose: (() => void);
  product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Text>ProductModal</Text>
    </Modal>
  );
}
