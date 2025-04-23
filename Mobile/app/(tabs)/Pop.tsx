import { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

function Collapsible({ children, title }: { children: React.ReactNode; title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = () => {
    if (title.includes("O que é")) return <MaterialIcons name="info" size={24} color="white" />;
    if (title.includes("Artistas")) return <Ionicons name="people" size={24} color="white" />;
    if (title.includes("Características")) return <MaterialIcons name="music-note" size={24} color="white" />;
    return <MaterialIcons name="star" size={24} color="white" />;
  };

  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader} 
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <ThemedText style={styles.collapsibleTitle}>{title}</ThemedText>
        <MaterialIcons
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.collapsibleContent}>
          <ThemedText style={styles.collapsibleText}>{children}</ThemedText>
        </View>
      )}
    </View>
  );
}

export default function PopScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#722f37', dark: '#3C2C3E' }}
      headerImage={
        <Image
          source={require('@/assets/images/pop.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Estilo: Pop</ThemedText>
      </ThemedView>

      <Collapsible title="O que é o Pop?">
        A música pop, ou música popular, é um gênero que busca alcançar o maior públicos possível.
        Surgiu no final dos anos 1950 e é conhecido por suas melodias cativantes, refrões marcantes e apelo comercial.
      </Collapsible>

      <Collapsible title="Artistas famosos do Pop">
        Grandes nomes que marcaram o pop ao longo das décadas:{'\n\n'}
        • Michael Jackson{'\n'}
        • Madonna{'\n'}
        • Britney Spears{'\n'}
        • Beyoncé{'\n'}
        • Anitta (Brasil)
      </Collapsible>

      <Collapsible title="Características do Pop">
        O pop se destaca por:{'\n\n'}
        • Estrutura musical simples e repetitiva{'\n'}
        • Grande presença nas mídias e plataformas digitais{'\n'}
        • Coreografias marcantes{'\n'}
        • Produções visuais elaboradas (videoclipes, shows)
      </Collapsible>

      <Collapsible title="Por que o Pop é tão popular?">
        Por ser acessível, dançante e acompanhar tendências culturais e tecnológicas,
        o pop se mantém como um dos gêneros mais ouvidos no mundo.
      </Collapsible>

      <ThemedText style={styles.footerText}>
        Aqui embaixo está um trecho de uma música pop para você ouvir!
      </ThemedText>

      <View style={styles.musicContainer}>
        <iframe
          src="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator"
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
    height: 250,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  titleText: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  collapsibleContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  collapsibleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    backgroundColor: '#722f37',
  },
  iconContainer: {
    marginRight: 12,
  },
  collapsibleTitle: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  collapsibleContent: {
    padding: 16,
    backgroundColor: 'black',
  },
  collapsibleText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  footerText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    marginVertical: 12,
    color: 'white',
    textAlign: 'center',
  },
  musicContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
});