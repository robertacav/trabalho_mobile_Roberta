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
    if (title.includes("Bandas")) return <Ionicons name="people" size={24} color="white" />;
    if (title.includes("Subgêneros")) return <MaterialIcons name="library-music" size={24} color="white" />;
    return <MaterialIcons name="public" size={24} color="white" />;
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

export default function RockScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#722f37', dark: '#3C2C3E' }}
      headerImage={
        <Image
          source={require('@/assets/images/rock.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Estilo: Rock</ThemedText>
      </ThemedView>

      <Collapsible title="O que é o Rock?">
        O rock é um estilo musical que surgiu nos anos 1950, nos Estados Unidos, e rapidamente conquistou o mundo.
        Com riffs marcantes de guitarra, baterias intensas e vocais poderosos, o rock influenciou comportamentos,
        estilos de vida e outras vertentes musicais.
      </Collapsible>

      <Collapsible title="Bandas e artistas famosos">
        Algumas bandas e artistas que marcaram o rock são:{'\n\n'}
        • The Beatles{'\n'}
        • Queen{'\n'}
        • Nirvana{'\n'}
        • AC/DC{'\n'}
        • Legião Urbana (Brasil)
      </Collapsible>

      <Collapsible title="Subgêneros do Rock">
        O rock possui diversos subgêneros, como:{'\n\n'}
        • Hard Rock{'\n'}
        • Punk Rock{'\n'}
        • Rock Alternativo{'\n'}
        • Heavy Metal{'\n'}
        • Indie Rock
      </Collapsible>

      <Collapsible title="Por que o Rock é importante?">
        O rock não é apenas música, é expressão, atitude e cultura. Ele foi a trilha sonora de
        movimentos sociais, revoluções culturais e transformações geracionais.
      </Collapsible>

      <ThemedText style={styles.footerText}>
        Aqui embaixo está um trecho de uma música de Rock para você ouvir!
      </ThemedText>

      <View style={styles.musicContainer}>
        <iframe
          src="https://open.spotify.com/embed/track/4veeNpXDK1YRHMTJ1Cppsg?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={styles.musicPlayer}
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
    padding: 12,
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
  musicPlayer: {
    borderRadius: 12,
  },
});