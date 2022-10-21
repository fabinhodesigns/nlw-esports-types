import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);
  
  useEffect(() => {
    fetch('http://192.168.0.115:3333/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <Image
          source={logoImg}
          style={styles.logo}

        />

        <Heading
          title="Encontre seu duo!"
          subTitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
        />

      </SafeAreaView>
    </Background>

  );
}