/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras', //ios
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir Pagina3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />

    </View>
  );
};

export default Pagina2Screen;
