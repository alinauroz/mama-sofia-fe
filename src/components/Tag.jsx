import React from 'react'

export default function Tag (props) {
    return <span data-testid = 'tag' className="tag-unit">{props.value}</span>;
}