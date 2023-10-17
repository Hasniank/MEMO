import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './style';
import {IMAGE} from '../../assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export const Setting = ({navigation}) => {
  const [accountCreated, setAccountCreated] = useState(false);

  return (
    <View style={Styles().container}>
      <View style={Styles().header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Collection');
          }}>
          <Ionicons name="close-outline" size={35} color="#fff" />
        </TouchableOpacity>
        <Text style={Styles().settingText}>Settings</Text>
        <View></View>
      </View>
      {accountCreated === false ? (
        <ScrollView>
          <View style={Styles().mainContainer}>
            <View style={Styles().accountContainer}>
              <MaterialCommunityIcons
                name="cloud-upload"
                size={80}
                color="#846BCD"
              />
              <Text style={Styles().syncText}>Sync your progress</Text>
              <Text style={Styles().createText}>
                Create a free account and always have your performance history
                synced on our servers
              </Text>
              <TouchableOpacity
                style={Styles().createButton}
                onPress={() => {
                  console.log('Create Account');
                }}>
                <Text style={Styles().createButtonText}>CREATE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
            {/* button Container */}
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>Legal</Text>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Privacy Policy</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}> Term of use</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Licenses</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>Sponsors</Text>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Rocket Seat</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Silva Lopes</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Pingback</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>Organizers</Text>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Lucas Montano</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Olympus</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>My Account</Text>
              <TouchableOpacity
                style={Styles().logOutButton}
                onPress={() => {
                  console.log('Log out');
                }}>
                <Text style={Styles().logOutText}>LOG OUT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles().deleteButton}
                onPress={() => {
                  console.log('Delete Account');
                }}>
                <Text style={Styles().deleteText}>DELETE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 50}}>
              <View></View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View style={Styles().mainContainer2}>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>Legal</Text>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Privacy Policy</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}> Term of use</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Licenses</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>Sponsors</Text>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Rocket Seat</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Silva Lopes</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Pingback</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>Organizers</Text>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Lucas Montano</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
              <View style={Styles().button}>
                <Text style={Styles().buttonText}>Olympus</Text>
                <View></View>
                <TouchableOpacity>
                  <Feather name="arrow-up-right" size={40} color="#928CA6" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles().buttonContainer}>
              <Text style={Styles().buttonContainerText}>My Account</Text>
              <TouchableOpacity
                style={Styles().logOutButton}
                onPress={() => {
                  console.log('Log out');
                }}>
                <Text style={Styles().logOutText}>LOG OUT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles().deleteButton}
                onPress={() => {
                  console.log('Delete Account');
                }}>
                <Text style={Styles().deleteText}>DELETE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 50}}>
              <View></View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
