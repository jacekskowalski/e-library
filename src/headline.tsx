import React from 'react';


type CustomedTitle={
title:string
}
const Headline = ({title}:CustomedTitle) => {
    return (
        <p className="headline--large text--center margin--small">{title}</p>
    )


}
export default Headline;