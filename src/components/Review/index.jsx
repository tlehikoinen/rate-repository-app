import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { useMutation } from '@apollo/client';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';
import { CREATE_REVIEW } from '../../graphql/mutations';

export const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: "",
};

export const validationSchema = yup.object().shape({
  repositoryName: yup.string().required('Repository owner name is required'),
  ownerName: yup.string().required('Repository name is required'),
  rating: yup
    .number('Rating should be a number between 0 and 100')
    .required('Rating is required')
    .min(0)
    .max(100),
  text: yup.string(),
  });

export const CreateReviewContainer = ({ onSubmit, validationSchema, initialValues }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const Review = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    rating = parseInt(rating);
    try {
      const { data } = await mutate( { variables: { review: { repositoryName, ownerName, rating, text } } });
      history.push(`${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer onSubmit={createReview} validationSchema={validationSchema} initialValues={initialValues} />
  );
};



export default Review;