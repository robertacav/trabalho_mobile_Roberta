import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem vindo(a) ao nosso site</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText> A música está presente em todos os momentos da nossa vida. Ela pode animar, emocionar, trazer lembranças e até mudar o nosso humor.
        {'\n'}  Neste trabalho, vamos conhecer um pouco mais sobre quatro estilos musicais que marcaram e continuam marcando gerações: o Rock, o Pop, a Vaneira e o Modão.
        {'\n'}   Vamos entender e nos aprofundar um pouco nos estilos musicais! </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Qual o objetivo deste trabalho? </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText> Nosso objetivo é explorar e apresentar diferentes estilos musicais, mostrando a diversidade e riqueza da música que faz parte do nosso dia a dia.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Vamos entender e nos aprofundar um pouco nos estilos musicais! </ThemedText>
        <ThemedText> Esse trabalho terá abas diferentes para cada estilo musical falado e apresentado aqui!</ThemedText>
      </ThemedView>
      <ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Como surgiu? </ThemedText>
        <ThemedText> Cada estilo surgiu em um contexto diferente, com influências culturais, sociais e até políticas.
          {'\n'}  Eles foram evoluindo com o tempo e hoje fazem parte da identidade musical de muitas pessoas.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 2,
  },
  reactLogo: {
    width: '100%',
    height: '100%',
  },

});