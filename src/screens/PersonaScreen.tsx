/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface RouterParams {
  id: number,
  nombre: string
}


interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

const PersonaScreen = ({ route, navigation }: Props) => {

  const params = route.params as RouterParams;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }

      </Text>
    </View>
  );
};

export default PersonaScreen;
