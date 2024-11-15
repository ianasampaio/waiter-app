import { Modal, StatusBar } from "react-native";
import { Container, OKButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType="fade">
      {/* <StatusBar backgroundColor="#d73035" barStyle="light-content" /> */}
      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12 }}>Pedido confirmado</Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>O pedido já entrou na fila de produção!</Text>

        <OKButton onPress={onOk}>
          <Text color="#d73035" weight="600">OK</Text>
        </OKButton>
      </Container>
    </Modal>
  );
}
