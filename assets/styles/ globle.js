import { StyleSheet, Dimensions, PermissionsAndroid } from 'react-native';


export const globleStyles = StyleSheet.create({
  constainer: {
      flex: 1,
      backgroundColor: '#222',
  },
  card: {
    margin: 15,
    width: (Dimensions.get('window').width-30),
    backgroundColor: '#333',
    borderRadius: 40
  },
  cardImage: {
    width: '100%',
    height: (Dimensions.get('window').width-10)/2
  },
  cardText: {
    color: '#fff',
    fontSize: 20,
    margin: 16,
    alignSelf: 'center',
  },
  detailsCard: {
    flexDirection: 'row',
    position: 'absolute',
  }
})