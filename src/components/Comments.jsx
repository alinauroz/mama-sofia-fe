import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

export default function Comments (props) {
    return (
        <div className = "comments" style={{width: "100%"}}>
            <DiscussionEmbed
                shortname="mamasofia"
                config={
                    {
                        url: window.location.href,
                        identifier: props.id,
                        title: props.name,
                        language: 'en-US' //e.g. for Traditional Chinese (Taiwan)	
                    }
                }
            />
        </div>
    )
}