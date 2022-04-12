import React, { Component } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Colors, Fonts, Images } from '../../theme';
import { Actions } from 'react-native-router-flux';

const Header = ({
    header,
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor:'green',
                width: '100%',
                paddingHorizontal: 16,
                paddingVertical: 8,
            }}>

            <Pressable style={{padding:5 }} onPress={() => Actions.pop()}>
           
                    <Image
                        style={{ height: 20, width: 20, tintColor:'white' }}
                        source={ Images.back}

                    />
                
            </Pressable>

      

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        marginLeft:5,
                        textAlign: 'center',
                        color: 'white',
                    }}>
                    {header}
                </Text>

        






        </View>
    );
};

export { Header };
