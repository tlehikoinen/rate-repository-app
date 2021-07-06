import React from 'react';
import { useParams } from 'react-router';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryList/RepositoryItem';


const Repository = () => {

    const params = useParams();

    const { repository, loading } = useRepository(params.id);

    if (loading) {
        return null;
    }
    
    return (
        <RepositoryItem item={repository} singleView={true} />
    );
    
};

export default Repository;
