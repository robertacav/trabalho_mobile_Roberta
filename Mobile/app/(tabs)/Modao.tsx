import { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// fonte
function CustomThemedText(props: any) {
  return <ThemedText {...props} style={[props.style, { fontFamily: 'Poppins' }]} />;
}

function Collapsible({ children, title, icon }: { children: React.ReactNode; title: string; icon: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={collapsibleStyles.container}>
      <TouchableOpacity 
        style={collapsibleStyles.header} 
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.8}
      >
        <View style={collapsibleStyles.iconContainer}>
          {icon}
        </View>
        <CustomThemedText style={collapsibleStyles.title}>{title}</CustomThemedText>
        <MaterialIcons
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={collapsibleStyles.content}>
          <CustomThemedText style={collapsibleStyles.contentText}>
            {children}
          </CustomThemedText>
        </View>
      )}
    </View>
  );
}

const collapsibleStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#722f37',
  },
  iconContainer: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  content: {
    padding: 12,
    backgroundColor: 'black',
  },
  contentText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
});

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
        <CustomThemedText type="title" style={styles.titleText}>Estilo: Modão</CustomThemedText>
      </ThemedView>

      <Collapsible 
        title="O que é o Modão?"
        icon={<MaterialIcons name="info" size={24} color='white' />}
      >
        O modão é uma vertente tradicional da música sertaneja, conhecida por suas letras profundas e emotivas.
        Surgiu no interior do Brasil e retrata histórias de amor, saudade, vida no campo e valores da cultura rural.
      </Collapsible>

      <Collapsible 
        title="Duplas e artistas marcantes"
        icon={<Ionicons name="people" size={24} color='white' />}
      >
        Alguns dos nomes mais conhecidos do modão são:{'\n\n'}
        • Milionário & José Rico{'\n'}
        • Chitãozinho & Xororó{'\n'}
        • Zezé Di Camargo & Luciano{'\n'}
        • João Mineiro & Marciano{'\n'}
        • Tonico & Tinoco
      </Collapsible>

      <Collapsible 
        title="Características do Modão"
        icon={<MaterialIcons name="music-note" size={24} color='white' />}
      >
        O modão é marcado por:{'\n\n'}
        • Arranjos com viola e sanfona{'\n'}
        • Duplas com harmonias vocais{'\n'}
        • Letras que tocam o coração e falam da vida simples{'\n'}
        • Forte ligação com a cultura caipira
      </Collapsible>

      <Collapsible 
        title="Importância cultural"
        icon={<MaterialIcons name="public" size={24} color='white' />}
      >
        O modão é mais do que música: é uma representação da identidade do interior do Brasil.
        Ele preserva tradições e valores que fazem parte da formação da cultura brasileira.
      </Collapsible>
      
      <CustomThemedText style={styles.footerText}>
        Aqui embaixo está um trecho de uma música de Modão para você ouvir!
      </CustomThemedText>
      
      <View style={styles.spotifyContainer}>
        <iframe
          src="https://open.spotify.com/embed/track/0V2Q6MYSxQiSOM4WtLvJT4?utm_source=generator"
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
    height: 260,
    resizeMode: 'cover',
    top: -10,
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
  footerText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    marginVertical: 12,
    color: 'white',
    textAlign: 'center',
  },
  spotifyContainer: {
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
});