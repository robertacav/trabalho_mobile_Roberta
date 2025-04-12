import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function VaneiraScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F7E1C1', dark: '#4A392E' }}
      headerImage={
        <Image
          source={require('@/assets/images/vaneira.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Estilo: Vaneira</ThemedText>
      </ThemedView>

      <Collapsible title="O que é a Vaneira?">
        <ThemedText>
          A vaneira é um ritmo tradicional do sul do Brasil, principalmente no Rio Grande do Sul,
          que mistura elementos da música gaúcha com influências da vaneira paraguaia.
          É muito dançada em bailes e festas, com batida envolvente e dançante.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Artistas que representam a Vaneira">
        <ThemedText>
          Alguns artistas e grupos que se destacam nesse estilo:
        </ThemedText>
        <ThemedText>{'\n'}• Tchê Garotos</ThemedText>
        <ThemedText>{'\n'}• Grupo Rodeio</ThemedText>
        <ThemedText>{'\n'}• Os Monarcas</ThemedText>
        <ThemedText>{'\n'}• Garotos de Ouro</ThemedText>
        <ThemedText>{'\n'}• Baitaca</ThemedText>
      </Collapsible>

      <Collapsible title="Características da Vaneira">
        <ThemedText>
          A vaneira é marcada por:
        </ThemedText>
        <ThemedText>{'\n'}• Ritmo animado e rápido</ThemedText>
        <ThemedText>{'\n'}• Uso de instrumentos como acordeão, bateria e baixo</ThemedText>
        <ThemedText>{'\n'}• Fortes raízes na cultura gaúcha</ThemedText>
        <ThemedText>{'\n'}• Letras que falam do campo, festas e amor</ThemedText>
      </Collapsible>

      <Collapsible title="A importância da Vaneira">
        <ThemedText>
          Além de entretenimento, a vaneira carrega a identidade cultural do sul do Brasil.
          É uma forma de manter viva a tradição e os costumes de uma região rica em história.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 380,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
});
