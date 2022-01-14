import React from 'react';

export const WithLayout =({layout:Layout,component,...props}) =>{
    return(
        <>
        <Layout {...props} component={component}>{component}</Layout>
        </>
    )
}
