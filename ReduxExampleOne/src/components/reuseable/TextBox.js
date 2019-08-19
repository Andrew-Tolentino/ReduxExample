import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { createUsernameAction, createUsernameActionTypes } from '../../actions/CreateUsernameAction'

 class TextBox extends React.Component {

    onChangeTextCallback(text) {
        const { createUsernameAction } = this.props;
        createUsernameAction(text)
    }

    render() {
        return(
            <View style={{paddingBottom: this.props.paddingBottom || 0}}>
                <Text style={{textAlign: 'center'}}>
                    {this.props.value}
                </Text>


                <TextInput 
                 style={{height: this.props.height, width: this.props.width,  borderColor: 'gray', borderWidth: 1}}
                 defaultValue={this.props.hint || ''}
                 onChangeText={(text) => this.onChangeTextCallback(text)}
                />
            </View>
        );
    }

}

// Feeding the component an object with values from the State
const mapToState = (state, ownProps) => {
    const { username } = state.username

    return {
        value: username 
    }
};

// Feeding the component dispatch methods 
const mapDispatchToProps = dispatch => ({
    createUsernameAction: text => dispatch(createUsernameAction(text))
});

export default connect(mapToState, mapDispatchToProps)(TextBox);