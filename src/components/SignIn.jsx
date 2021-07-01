import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import SignInForm from './SignInForm';

const SignIn = () => {

    const initialValues = {
        username: "",
        password: ""
    };

    const onSubmit = (values) => {
        console.log(`username: ${values.username}`);
        console.log(`password: ${values.password}`);
    };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;