import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {IMAGE} from '../../../../assets';

export const NewCollection = () => {
  const [collection, setCollection] = useState(true);
  const [showCollectionAddView, setShowCollectionAddView] = useState(false);
  const [collectionName, setCollectionName] = useState('');
  const [tagModal, setTagModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [descriptionText, setDescriptionText] = useState(
    '“Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web” - Wikipedia, 2021',
  );

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
          <View style={Styles().newCollectionContainer}>
            <View>
              {showCollectionAddView === false ? (
                <TouchableOpacity
                  onPress={() => {
                    setShowCollectionAddView(true);
                  }}>
                  <View style={Styles().CollectionAddView}>
                    <Text style={Styles().CollectionAddViewText}>
                      Collection Name
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={{marginTop: 20}}>
                  <View style={Styles().InputCollection}>
                    <View style={Styles().collectionNameInput}>
                      <Text style={Styles().labelText}>Collection Name</Text>
                      <TextInput
                        placeholder="Collection Name"
                        placeholderTextColor={'#fff'}
                      />
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('Modaltag');
                  setTagModal(!tagModal);
                }}>
                <View style={Styles().AddTagsView}>
                  <Text style={Styles().AddTagsViewText}>
                    Add Tags (Maximum 5)
                  </Text>
                  <Feather name="plus" size={25} color="#928CA6" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('modaldescription');
                  setDescriptionModal(!descriptionModal);
                }}>
                <View style={Styles().descriptionAddView}>
                  <Text style={Styles().descriptionAddViewText}>
                    Description
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Modal visible={tagModal}>
              <View style={Styles().taqModalContainer}>
                <View style={Styles().tagModalHeader}>
                  <TouchableOpacity
                    onPress={() => {
                      setTagModal(!tagModal);
                    }}>
                    <Image source={IMAGE.IMAGES.Minus} />
                  </TouchableOpacity>
                </View>
                <Text style={Styles().okText}>OK</Text>
                <View>
                  <View style={Styles().tagView}>
                    <Text style={Styles().tagText}>Tags</Text>
                    <View></View>
                    <Text style={Styles().tagNumber}>2/5</Text>
                  </View>
                  <View style={Styles().tagInputView}>
                    <TextInput
                      placeholder="Enter only 5 Tags"
                      placeholderTextColor={'#fff'}
                      style={Styles().tagInput}
                    />
                  </View>
                </View>
                <View style={Styles().suggestionsContainer}>
                  <Text style={Styles().suggestionText}>Suggestions</Text>
                  <View style={Styles().suggestionView}>
                    <Text>Fundamental</Text>
                  </View>
                  <View style={Styles().suggestionView}>
                    <Text style={Styles().suggestionText}>Flutter</Text>
                  </View>
                  <View style={Styles().suggestionView}>
                    <Text style={Styles().suggestionText}>Flutter</Text>
                  </View>
                  <View style={Styles().suggestionView}>
                    <Text style={Styles().suggestionText}>Flutter</Text>
                  </View>
                  <View style={Styles().suggestionView}>
                    <Text style={Styles().suggestionText}>Flutter</Text>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal visible={descriptionModal}>
              <View style={Styles().descriptionModalContainer}>
                <View style={Styles().descriptionModalHeader}>
                  <TouchableOpacity
                    onPress={() => {
                      setDescriptionModal(!descriptionModal);
                    }}>
                    <Image source={IMAGE.IMAGES.Minus} />
                  </TouchableOpacity>
                  <Text style={Styles().okText}>OK</Text>
                  <View style={Styles().descriptionContainer}>
                    <Text style={Styles().descriptionText}>Description</Text>
                    <View style={Styles()}>
                      <TextInput
                        placeholderTextColor={'#fff'}
                        placeholder="Enter Description"
                        style={Styles().descriptionInput}
                        value={descriptionText}
                        multiline={true}
                        onChangeText={text => {
                          setDescriptionText(text);
                          console.log(text);
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
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
