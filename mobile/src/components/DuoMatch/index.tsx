import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord Copiado!', 'Usuário copiado para sua área de transferência.');
    setIsCopping(false);
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      {...rest}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={onClose}
        >
          <MaterialIcons
            name="close"
            size={20}
            color={THEME.COLORS.CAPTION_500}
          />
        </TouchableOpacity>

        <CheckCircle
          size={24}
          color={THEME.COLORS.SUCCESS}
          weight="bold"
        />

        <Heading
          title="Let´s play"
          subTitle="Agora é só começar a jogar!"
          style={{ alignItems: 'center', marginTop: 24 }}
        />

        <Text style={styles.label}>
          Adicione no discord
        </Text>

        <TouchableOpacity
          style={styles.discordButton}
          onPress={handleCopyDiscordToClipboard}
          disabled={isCopping}
        >
          <View style={styles.container}>
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}