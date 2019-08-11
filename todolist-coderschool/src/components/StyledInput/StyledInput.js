import React from 'react';
import {
  TextInput,
  Text,
  View,
} from 'react-native';

const StyledInput = ({ label, formikProps, formikKey, onChangeText, value, ...rest }) => {
    const inputStyles = {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginBottom: 3,
    };
  
    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
      inputStyles.borderColor = 'red';
    }
  
    return (
      <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
        <Text style={{ marginBottom: 3 }}>{label}</Text>
        <TextInput
          style={inputStyles}
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          onChangeText={onChangeText}
          {...rest}
        />
        <Text style={{ color: 'red' }}>
          {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
      </View>
    );
  };
  
export default StyledInput