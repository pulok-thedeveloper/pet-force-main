import React from 'react';
import useTitle from '../../Hook/useTitle';
import Blogs from '../Home/Blogs/Blogs';

const AllBlogs = () => {
    useTitle('Blog');

    return (
        <div className='mt-20'>
            <Blogs></Blogs>
        </div>
    );
};

export default AllBlogs;