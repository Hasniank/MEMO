import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './style';
// Ionicons
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const NewCollection = () => {
  const [collection, setCollection] = useState(false);

  return (
    <View style={Styles().container}>
      <View style={Styles().header}>
        <Ionicons name={'close-sharp'} size={30} color={'#fff'} />
        <Text style={Styles().newCollectionText}>New Collection</Text>
        <View></View>
      </View>
      <View style={Styles().buttonContainer}>
        <TouchableOpacity
          style={[
            collection === false
              ? Styles().DetailsButton
              : Styles().DetailsButtonSelect,
          ]}
          onPress={() => {
            setCollection(false);
            console.log('False');
          }}>
          <Text style={Styles().DetailsButtonText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles().CollectionButton}
          onPress={() => {
            setCollection(true);
            console.log('True');
          }}>
          <Text style={Styles().CollectionButtonText}>Memos</Text>
        </TouchableOpacity>
      </View>
      <View>
        {collection == false ? (
          <View style={Styles()}>
          <View>
            
          </View>
          </View>
        ) : (
          <View>
            <Text style={{color: '#fff'}}>Memos</Text>
          </View>
        )}
      </View>
    </View>
  );
};
