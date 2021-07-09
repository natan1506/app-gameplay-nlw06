import React, { ReactNode } from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { Background } from '../Background';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export const ModalView: React.FC<Props> = ({ children, closeModal, ...rest }) => {

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}