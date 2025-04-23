import { Image, StyleSheet, Platform, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#722f37', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner.jpg')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.mainTitle}>Bem-vindo ao Mundo da Música!</ThemedText>
          <HelloWave />
        </ThemedView>

        {/* Card de Introdução */}
        <ThemedView style={styles.card}>
          <MaterialIcons name="music-note" size={24} color="#722f37" style={styles.icon} />
          <ThemedText style={styles.cardText}>
            A música está presente em todos os momentos da nossa vida. Ela pode animar, emocionar, 
            trazer lembranças e até mudar o nosso humor. Neste trabalho, vamos explorar quatro estilos 
            musicais que marcaram gerações: Rock, Pop, Vaneira e Modão.
          </ThemedText>
        </ThemedView>

        {/* Card de Objetivo */}
        <ThemedView style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="emoji-events" size={24} color="#722f37" />
            <ThemedText style={styles.cardTitle}>Objetivo</ThemedText>
          </View>
          <ThemedText style={styles.cardText}>
            Explorar e apresentar diferentes estilos musicais, mostrando a diversidade e riqueza 
            da música que faz parte do nosso cotidiano.
          </ThemedText>
        </ThemedView>

        {/* Card de Conteúdo */}
        <ThemedView style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="explore" size={24} color="#722f37" />
            <ThemedText style={styles.cardTitle}>Conteúdo</ThemedText>
          </View>
          <ThemedText style={styles.cardText}>
            Cada aba deste aplicativo é dedicada a um estilo musical diferente, com informações 
            detalhadas sobre suas características, artistas e importância cultural.
          </ThemedText>
        </ThemedView>

        {/* Card de Origem */}
        <ThemedView style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="history" size={24} color="#722f37" />
            <ThemedText style={styles.cardTitle}>Origem</ThemedText>
          </View>
          <ThemedText style={styles.cardText}>
            Cada estilo surgiu em um contexto único, com influências culturais, sociais e políticas. 
            Eles evoluíram com o tempo e hoje formam parte essencial da identidade musical de muitas pessoas.
          </ThemedText>
        </ThemedView>

        {/* Rodapé */}
        <ThemedView style={styles.footerCard}>
          <ThemedText style={styles.footerText}>
            Toque nos ícones do menu abaixo para explorar cada estilo musical!
          </ThemedText>
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#722f37',
    fontFamily: 'Poppins',
    marginLeft: 10,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    fontFamily: 'Poppins',
  },
  icon: {
    marginBottom: 15,
    alignSelf: 'center',
  },
  footerCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Poppins',
  },
});