import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title,description,keyword}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta content={description} name='description' />
            <meta content={keyword} name='keyword' />
        </Helmet>
    )
}
Meta.defaultProp={
    title:'profile',
    description:'full-stack developer',
    keyword:'Hiring for developer'
}

export default Meta
