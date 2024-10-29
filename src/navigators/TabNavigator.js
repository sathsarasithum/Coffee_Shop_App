import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../theme/theme'
import { BlurView } from '@react-native-community/blur';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:styles.tabBarStyle,
        tabBarBackground:() => { (
          <BlurView 
            overlayColor=''
             blurAmount={15} 
             style={styles.BlurViewStyles}
          />
          )
        }
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused,color,size}) => (
            // <CustomIcon  name='home' size={25} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            <Entypo name="home" size={24} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}></Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: ({focused,color,size}) => (
            // <CustomIcon  name='home' size={25} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            <FontAwesome name="shopping-cart" size={24}  color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}></Tab.Screen>
        <Tab.Screen name="Favourite" component={FavouriteScreen} options={{
          tabBarIcon: ({focused,color,size}) => (
            // <CustomIcon  name='home' size={25} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            <AntDesign name="like1" size={24} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}></Tab.Screen>
        <Tab.Screen name="History" component={OrderHistoryScreen} options={{
          tabBarIcon: ({focused,color,size}) => (
            // <CustomIcon  name='home' size={25} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
            <Entypo name="bell" size={24} color={focused? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle:{
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth:0,
        elevation:0,
        borderTopColor: 'transparent'
    },
    BlurViewStyles:{
      position: 'absolute',
      top: 0,
      bottom :0,
      left: 0,
      right: 0,
    }
})
export default TabNavigator

