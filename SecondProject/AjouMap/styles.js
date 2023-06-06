import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //fontSize: 16,
    //fontWeight: 'bold',
  },
   container: {
      flex: 1,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      //alignItems: 'center',
      //fontSize: 16,
      //fontWeight: 'bold',
    },
    logoContainer: {
        flex: 1,
        backgroundColor: 'lightblue', //'rgb(255, 127, 25)'
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    titleContainer: {

    },
   text: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'white',
    },
    button: {
       backgroundColor: 'rgb(4, 85, 191)',
          padding: 20,
          borderRadius: 5,
          marginBottom: 20,
          width: '80%', // 버튼의 너비를 화면의 100%로 설정
          alignSelf: 'center', // 버튼을 가운데 정렬
          borderRadius: 15,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: 'bold',

    },
    title: {
    color: 'rgb(4, 85, 191)',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    },
    description: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
  });

export default styles;