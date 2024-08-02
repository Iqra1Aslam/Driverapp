import { StyleSheet } from "react-native-web";
const styles=StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
      },
      textSign: {
        fontSize: 18,
        fontWeight: 'italic',
        color: 'white',
      },
      smallIcon: {
        marginRight: 10,
        fontSize: 24,
      },
      logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        height: 260,
        width: 260,
        marginTop: 30,
      },
      text_footer: {
        color: '#05375a',
        fontSize: 18,
      },
      action: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 3,
        marginTop: 15,
    
        paddingHorizontal: 15,
    
        borderWidth: 1,
        borderColor: '#420475',
        borderRadius: 50,
      },
      textInput: {
        flex: 1,
        marginTop: -12,
        height:40,
        color: '#05375a',
      },
      loginContainer: {
        
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 150,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
      },
      Container: {
            ...StyleSheet.absoluteFillObject,
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
      header: {
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      text_header: {
        color: '#48d1cc',
        fontWeight: 'italic',
        fontSize: 30,
      },
      button: {
       
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
        margin: 20,
      },
      inBut: {
        width: '70%',
        backgroundColor: '#48d1cc',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
        marginBottom:10,
      },
      inBut2: {
        backgroundColor: '#48d1cc',
        marginTop:10,
        justifyContent: 'flex-end',
        height: 65,
        width: '70',
        borderRadius:50,

        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      smallIcon2: {
        fontSize: 40,
        // marginRight: 10,
      },
      bottomText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 5,
      },
    });
      export default styles;