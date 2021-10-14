import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';


import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { loading, signIn } = useAuth();

  const handleSignIn = useCallback(async() => {
    // navigation.navigate('Home')
    try {
      await signIn();
    } catch(e) {
      Alert.alert(e)
    }
  }, [])

  return (
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

         { 
          loading ? <ActivityIndicator color={theme.colors.primary} /> :
          <ButtonIcon 
              title='Entrar com o Discord'
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  )
}
