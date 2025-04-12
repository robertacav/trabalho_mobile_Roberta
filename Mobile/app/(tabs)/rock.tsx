import { StyleSheet, Image, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function RockScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/rock.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Estilo: Rock</ThemedText>
      </ThemedView>

      <Collapsible title="O que é o Rock?">
        <ThemedText>
          O rock é um estilo musical que surgiu nos anos 1950, nos Estados Unidos, e rapidamente conquistou o mundo.
          Com riffs marcantes de guitarra, baterias intensas e vocais poderosos, o rock influenciou comportamentos,
          estilos de vida e outras vertentes musicais.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Bandas e artistas famosos">
        <ThemedText>
          Algumas bandas e artistas que marcaram o rock são:
        </ThemedText>
        <ThemedText>{'\n'}• The Beatles</ThemedText>
        <ThemedText>{'\n'}• Queen</ThemedText>
        <ThemedText>{'\n'}• Nirvana</ThemedText>
        <ThemedText>{'\n'}• AC/DC</ThemedText>
        <ThemedText>{'\n'}• Legião Urbana (Brasil)</ThemedText>
      </Collapsible>

      <Collapsible title="Subgêneros do Rock">
        <ThemedText>
          O rock possui diversos subgêneros, como:
        </ThemedText>
        <ThemedText>{'\n'}• Hard Rock</ThemedText>
        <ThemedText>{'\n'}• Punk Rock</ThemedText>
        <ThemedText>{'\n'}• Rock Alternativo</ThemedText>
        <ThemedText>{'\n'}• Heavy Metal</ThemedText>
        <ThemedText>{'\n'}• Indie Rock</ThemedText>
      </Collapsible>

      <Collapsible title="Por que o Rock é importante?">
        <ThemedText>
          O rock não é apenas música, é expressão, atitude e cultura. Ele foi a trilha sonora de
          movimentos sociais, revoluções culturais e transformações geracionais.
        </ThemedText>
      </Collapsible>
      <ThemedText>
        Aqui embaixo está um trecho de uma música de Rock para você ouvir!
      </ThemedText>

      <View>
        <iframe
          src="https://open.spotify.com/embed/track/4veeNpXDK1YRHMTJ1Cppsg?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </View>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  musicContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  musicPlayer: {
    width: '100%',
    height: 166,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
