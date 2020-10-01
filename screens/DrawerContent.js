import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from 'react-native-reanimated';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View stye={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/d8/16/c1/d816c15eff532201652b4e60e837dfa0.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Joko Widodo</Title>
                <Caption style={styles.caption}>jokowi@sertifikasiku.com</Caption>
              </View>
            </View>
            <View style={styles.row}>
              {/* <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View> */}
            </View>
          </View>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="columns" color={color} size={size} />
              )}
              label=" Dashboard"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="  My Course"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="user-edit" color={color} size={size} />
              )}
              label="Edit Account"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="edit" color={color} size={size} />
              )}
              label=" Edit Address"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="list-alt" color={color} size={size} />
              )}
              label=" My Orders"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="heart" color={color} size={size} />
              )}
              label=" My Wishlist"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="certificate" color={color} size={size} />
              )}
              label=" My Certificates"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section stye={styles.drawerContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wallet" color={color} size={size} />
              )}
              label=" My Wallet"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="sign-out-alt" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
