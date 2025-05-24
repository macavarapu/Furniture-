import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const promoData = new Array(5).fill({
  title: '25% Discount',
  subtitle: 'For a cozy yellow set.',
  image: require('../assets/images/discount.png'), // replace with your image
});

const PromoCard = ({ title, subtitle, image }) => (
  <ImageBackground source={image} style={styles.card} imageStyle={styles.cardImage}>
    <View style={styles.overlay}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

const Specialcard = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}
    >
      {promoData.map((item, index) => (
        <PromoCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      ))}
    </ScrollView>
  );
};

export default Specialcard;

const styles = StyleSheet.create({
  carousel: {
    paddingHorizontal: 16,
  },
  card: {
    width: width * 0.8,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    justifyContent: 'flex-end',
  },
  cardImage: {
    resizeMode: 'cover',
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#f1f1f1',
    fontSize: 14,
    marginVertical: 4,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#1EAE98',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
