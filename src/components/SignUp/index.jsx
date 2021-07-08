import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';

export const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: ""
};

export const validationSchema = yup.object().shape({
  username: yup.string()
  .max(30, "Username must be shorter than 30 characters")
  .required('Username is required'),
  password: yup.string()
  .min(5, "Password must have atleast 5 characters")
  .max(50, "Password must be shorter than 50 characters")
  .required('Password is required'),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null],'Passwords dont match')
  .required('Password confirm is required')
  });

export const SignInContainer = ({ onSubmit, validationSchema, initialValues }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

    const onSubmit = async (values) => {
      const { username, password } = values;
        console.log(username, password );

        try {
          await signUp({ username, password });
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



export default SignUp;