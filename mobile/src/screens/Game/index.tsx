import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';

import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string){
    fetch(`http://10.0.0.106:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://10.0.0.106:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  });

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}>

            </Entypo>
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subTitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              onConnect={() => getDiscordUser(item.id)}
              data={item}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length === 0 ? styles.emptyListContent : styles.contentList]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios públicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}