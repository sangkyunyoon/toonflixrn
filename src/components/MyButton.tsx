/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import
{
    Text,
    View,
} from 'react-native';

interface IMyButton
{
    message: string;
    color: string;
    bgColor: string;
}

export class MyButton extends React.Component<IMyButton>
{
    constructor ( props: IMyButton )
    {
        super( props );
    }

    render ()
    {
        return (
            <View style={ [{
                flexGrow: 1,
                margin: 5,
                justifyContent: 'center',
                backgroundColor: `${ this.props.bgColor }`,
                borderRadius: 25,
                height: 50,
            }] }>
                <Text style={ {
                    textAlign: 'center',
                    fontSize: 15,
                    color: `${ this.props.color }`,
                    fontWeight: '500',
                } }>
                    { this.props.message }
                </Text>
            </View >
        );
    }
}
