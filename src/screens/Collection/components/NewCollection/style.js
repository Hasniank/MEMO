import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../../../constant';

export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    text: {
      color: '#fff',
    },
    header: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.1,
    },
    newCollectionText: {
      color: '#fff',
      fontSize: 16,
    },
    buttonContainer: {
      width: ScreenLayouts.screenWidth * 1,
      flexDirection: 'row',
    },
    DetailsButton: {
      borderBottomWidth: 3,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#1F1D28',
      borderColor: '#9C81EA',
    },
    DetailsButtonSelect: {
      borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#9C81EA',
      borderColor: '#1F1D28',
    },
    CollectionButton: {
      //   borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#1F1D28',
      //   borderColor: '#9C81EA',
    },
    DetailsButtonText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
    CollectionButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
    },
    newCollectionContainer: {
      justifyContent: 'center',
      width: ScreenLayouts.screenWidth * 1,
      alignItems: 'center',
    },
    CollectionAddView: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#343141',
      borderRadius: 5,
      backgroundColor: '#343141',
      margin: 10,
      color: '#fff',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.07,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },

    CollectionAddViewText: {
      color: '#fff',
      fontSize: 16,
    },
    AddTagsView: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#343141',
      borderRadius: 5,
      backgroundColor: '#343141',
      margin: 10,
      color: '#fff',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.07,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    AddTagsViewText: {
      color: '#fff',
      fontSize: 16,
    },
    descriptionAddView: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#343141',
      borderRadius: 5,
      backgroundColor: '#343141',
      margin: 10,
      color: '#fff',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.07,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    descriptionAddViewText: {
      color: '#fff',
      fontSize: 16,
    },
    InputCollection: {
      width: ScreenLayouts.screenWidth * 0.9,
      backgroundColor: '#4A465B',
      height: ScreenLayouts.screenHeight * 0.075,
      color: '#fff',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    collectionNameInput: {
      width: ScreenLayouts.screenWidth * 0.8,
      marginTop: 10,
      // height: ScreenLayouts.screenHeight * 0.05,

      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    labelText: {
      color: '#fff',
    },
    taqModalContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#1F1D28',
    },
    tagModalHeader: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tagView: {
      width: ScreenLayouts.screenWidth * 0.9,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 15,
    },
    tagText: {
      color: '#ADA7C1',
      fontSize: 16,
    },
    tagNumber: {
      color: '#ADA7C1',
      fontSize: 16,
    },
    tagInputView: {
      width: ScreenLayouts.screenWidth * 0.9,
    },
    tagInput: {
      color: '#fff',
    },
    suggestionsContainer: {
      width: ScreenLayouts.screenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    suggestionText: {
      color: '#ADA7C1',
      marginLeft: 10,
    },
    suggestionView: {
      width: ScreenLayouts.screenWidth * 0.85,
      alignItems: 'flex-start',
      borderWidth: 3,
      borderColor: '#343141',
      backgroundColor: '#343141',
      margin: 5,
      height: ScreenLayouts.screenHeight * 0.07,
      justifyContent: 'center',
      borderRadius: 5,
    },
    okText: {
      color: '#60D88B',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 20,
    },
    descriptionModalContainer: {
      flex: 1,
      backgroundColor: '#1F1D28',
      alignItems: 'center',
    },
    descriptionModalHeader: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    descriptionContainer: {
      width: ScreenLayouts.screenWidth * 0.9,
    },
    descriptionText:{
      color:'#ADA7C1'
    },
    descriptioninputContainer:{},
    descriptionInput:{
      color:'#fff',
      height: ScreenLayouts.screenHeight * 0.2,
      width:ScreenLayouts.screenWidth*0.9
    }
  });
