import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function ModaoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F4E3C1', dark: '#5C4A2D' }}
      headerImage={
        <Image
          source={require('@/assets/images/modao.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Estilo: Modão</ThemedText>
      </ThemedView>

      <Collapsible title="O que é o Modão?">
        <ThemedText>
          O modão é uma vertente tradicional da música sertaneja, conhecida por suas letras profundas e emotivas.
          Surgiu no interior do Brasil e retrata histórias de amor, saudade, vida no campo e valores da cultura rural.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Duplas e artistas marcantes">
        <ThemedText>
          Alguns dos nomes mais conhecidos do modão são:
        </ThemedText>
        <ThemedText>{'\n'}• Milionário & José Rico</ThemedText>
        <ThemedText>{'\n'}• Chitãozinho & Xororó</ThemedText>
        <ThemedText>{'\n'}• Zezé Di Camargo & Luciano</ThemedText>
        <ThemedText>{'\n'}• João Mineiro & Marciano</ThemedText>
        <ThemedText>{'\n'}• Tonico & Tinoco</ThemedText>
      </Collapsible>

      <Collapsible title="Características do Modão">
        <ThemedText>
          O modão é marcado por:
        </ThemedText>
        <ThemedText>{'\n'}• Arranjos com viola e sanfona</ThemedText>
        <ThemedText>{'\n'}• Duplas com harmonias vocais</ThemedText>
        <ThemedText>{'\n'}• Letras que tocam o coração e falam da vida simples</ThemedText>
        <ThemedText>{'\n'}• Forte ligação com a cultura caipira</ThemedText>
      </Collapsible>

      <Collapsible title="Importância cultural">
        <ThemedText>
          O modão é mais do que música: é uma representação da identidade do interior do Brasil.
          Ele preserva tradições e valores que fazem parte da formação da cultura brasileira.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
    top: -10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
});
