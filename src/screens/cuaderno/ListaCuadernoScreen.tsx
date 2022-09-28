import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';
import Icon from 'react-native-vector-icons/Feather';


import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaCuadernoScreen =({ navigation }:Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>cuadernosx</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerMaterias}>
            


              
    </SafeAreaView>
    </View>
  )
}

export default ListaCuadernoScreen;