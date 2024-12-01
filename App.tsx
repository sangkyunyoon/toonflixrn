/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import
{
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import
{
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { MyButton } from './src/components/MyButton';


const styles = StyleSheet.create( {
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  box: {
    flex: 1,
    margin: 5,
  },
} );

function App (): React.JSX.Element
{
  const isDarkMode = useColorScheme() === 'dark' ? true : false;
  return (
    <SafeAreaView style={ { backgroundColor: Colors.black, flex: 1 } }>
      <StatusBar
        barStyle={ isDarkMode ? 'light-content' : 'dark-content' }
        backgroundColor={ Colors.black }
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={ [Colors.darker, {
        }] }>
        <View
          style={ [
            styles.container,
          ] }>
          <View style={ [
            styles.container,
            {
              flexDirection: 'column',
              justifyContent: 'flex-start',
            },
          ] }>
            <Text
              style={ {
                textAlign: 'right',
                fontSize: 20,
                fontWeight: '600',
                color: Colors.white,
              } }>
              Hey, Selena
            </Text>
            <Text
              style={ {
                textAlign: 'right',
                fontSize: 15,
                color: Colors.white,
                fontWeight: '100',
              } }>
              Welcom back
            </Text>
          </View>
          <View style={ [
            styles.container,
            {
              flexDirection: 'column',
              justifyContent: 'flex-start',
            },
          ] }>
            <Text
              style={ {
                fontSize: 20,
                fontWeight: '200',
                color: Colors.white,
              } }>
              Total Balance
            </Text>
            <Text
              style={ {
                fontSize: 37,
                fontWeight: '800',
                color: Colors.white,
              } }>
              $5 194 382
            </Text>
          </View>

          <View
            style={ [
              styles.box,
              {
                flexDirection: 'row',
              },
            ] }>
            <MyButton message={ 'Transfer' } color={ Colors.black } bgColor={ '#ffa500' } />
            <MyButton message={ 'Request' } color={ Colors.white } bgColor={ '#1F2123' } />
          </View>
          <View style={ [
            styles.box,
            {
              height: 100,
            },
          ] } />
          <View style={ [
            styles.box,
            {
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            },
          ] }>
            <Text style={ { fontSize: 36, fontWeight: 600, color: Colors.white } }>Wallets</Text>
            <Text style={ { fontSize: 18, color: Colors.light } }>View All</Text>
          </View>
          {/* SizedBox */ }
          <View style={ [
            styles.box,
            {
              height: 10,
            },
          ] } />
          {/* Container */ }
          <View style={ [
            // decoration: BoxDecoration
            styles.container,
            {
              backgroundColor: Colors.darker,
              borderRadius: 10,
              overflow: 'hidden',
            },
          ] }>
            {/* child: Padding */ }
            <View style={ [
              // BoxDecoration
              {
                padding: 10,
              },
            ] }>
              {/* child: Row */ }
              <View style={ [
                styles.box,
                {
                  flexDirection: 'row',
                  borderRadius: 10,
                  alignItems: 'flex-end',
                },
              ] }>
                {/* children */ }
                <View style={ [
                  styles.box,
                  {
                    flexDirection: 'column',
                  },
                ] }>
                  <Text style={ { fontSize: 36, fontWeight: 600, color: Colors.white } }>Euro</Text>
                  {/* Columns */ }
                  <View style={ [
                    styles.box,
                    {
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    },
                  ] }>
                    <Text style={ { fontSize: 20, color: Colors.white } }>6 428</Text>
                    <Text style={ { fontSize: 18, color: Colors.light, paddingLeft: 10 } }>EUR</Text>
                  </View>
                </View>
                <MaterialIcons style={ [{ transform: [{ scale: 2.2 }], transformOrigin: '20px 25px' }, { position: 'relative' }, { right: 50 }] } size={ 88 } name="euro" color={ Colors.white } />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

export default App;
