import { Modal, Platform } from "react-native";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";
import { TouchableOpacity } from "react-native";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onCLose: () => void;
  onSave: (table:string) => void;
}

export function TableModal({ visible, onCLose, onSave }: TableModalProps){
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onCLose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding' }>
        <ModalBody>
          <Header>
            <Text weight="600">Informe uma mesa</Text>

            <TouchableOpacity onPress={onCLose}>
              <Close color="600" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da Mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );

}
