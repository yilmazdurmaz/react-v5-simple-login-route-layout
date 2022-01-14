import React from 'react'

export function Article({...props}) {
    return (
        <div>
            Article {props.match.params.id}
        </div>
    )
}

export default Article
