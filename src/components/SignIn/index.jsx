import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
  });

export const SignInContainer = ({ onSubmit, validationSchema, initialValues }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

    const onSubmit = async (values) => {
      const { username, password } = values;
        console.log(username, password);

        try {
          await signIn({ username, password });
          history.push('/');
        } catch (e) {
          console.log(e);
        }
    };

  return (
    <SignInContainer onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues} />
  );
};



export default SignIn;