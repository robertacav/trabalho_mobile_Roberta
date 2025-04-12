import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function PopScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FDE3F0', dark: '#3C2C3E' }}
      headerImage={
        <Image
          source={require('@/assets/images/pop.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Estilo: Pop</ThemedText>
      </ThemedView>

      <Collapsible title="O que é o Pop?">
        <ThemedText>
          A música pop, ou música popular, é um gênero que busca alcançar o maior públicos possível.
          Surgiu no final dos anos 1950 e é conhecido por suas melodias cativantes, refrões marcantes e apelo comercial.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Artistas famosos do Pop">
        <ThemedText>
          Grandes nomes que marcaram o pop ao longo das décadas:
        </ThemedText>
        <ThemedText>{'\n'}• Michael Jackson</ThemedText>
        <ThemedText>{'\n'}• Madonna</ThemedText>
        <ThemedText>{'\n'}• Britney Spears</ThemedText>
        <ThemedText>{'\n'}• Beyoncé</ThemedText>
        <ThemedText>{'\n'}• Anitta (Brasil)</ThemedText>
      </Collapsible>

      <Collapsible title="Características do Pop">
        <ThemedText>
          O pop se destaca por:
        </ThemedText>
        <ThemedText>{'\n'}• Estrutura musical simples e repetitiva</ThemedText>
        <ThemedText>{'\n'}• Grande presença nas mídias e plataformas digitais</ThemedText>
        <ThemedText>{'\n'}• Coreografias marcantes</ThemedText>
        <ThemedText>{'\n'}• Produções visuais elaboradas (videoclipes, shows)</ThemedText>
      </Collapsible>

      <Collapsible title="Por que o Pop é tão popular?">
        <ThemedText>
          Por ser acessível, dançante e acompanhar tendências culturais e tecnológicas,
          o pop se mantém como um dos gêneros mais ouvidos no mundo.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 250,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
});
