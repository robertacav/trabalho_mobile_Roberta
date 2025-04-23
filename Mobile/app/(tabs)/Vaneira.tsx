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

export default function VaneiraScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#722f37', dark: '#3C2C3E' }}
      headerImage={
        <Image
          source={require('@/assets/images/vaneira.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Estilo: Vaneira</ThemedText>
      </ThemedView>

      <Collapsible title="O que é a Vaneira?">
        A vaneira é um ritmo tradicional do sul do Brasil, principalmente no Rio Grande do Sul,
        que mistura elementos da música gaúcha com influências da vaneira paraguaia.
        É muito dançada em bailes e festas, com batida envolvente e dançante.
      </Collapsible>

      <Collapsible title="Artistas que representam a Vaneira">
        Alguns artistas e grupos que se destacam nesse estilo:{'\n\n'}
        • Tchê Garotos{'\n'}
        • Grupo Rodeio{'\n'}
        • Os Monarcas{'\n'}
        • Garotos de Ouro{'\n'}
        • Baitaca
      </Collapsible>

      <Collapsible title="Características da Vaneira">
        A vaneira é marcada por:{'\n\n'}
        • Ritmo animado e rápido{'\n'}
        • Uso de instrumentos como acordeão, bateria e baixo{'\n'}
        • Fortes raízes na cultura gaúcha{'\n'}
        • Letras que falam do campo, festas e amor
      </Collapsible>

      <Collapsible title="A importância da Vaneira">
        Além de entretenimento, a vaneira carrega a identidade cultural do sul do Brasil.
        É uma forma de manter viva a tradição e os costumes de uma região rica em história.
      </Collapsible>

      <ThemedText style={styles.footerText}>
        Aqui embaixo está um trecho de uma música de Vaneira para você ouvir!
      </ThemedText>

      <View style={styles.musicContainer}>
        <iframe
          src="https://open.spotify.com/embed/track/3hH6CrVUDaThjtN384W0Xk?utm_source=generator"
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
    height: 380,
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