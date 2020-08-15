import React from 'react'

const lang = localStorage.getItem("lang") || "en"

export class Language extends React.Component {
    constructor (props) {
        super(prosp);
        this.state = {
            langs: ["en", "fr"]
        }
    }
    render () {
        return (
            <select>
                {
                    this.state.langs.map(l => {
                        l == lang ? "<option selected>" + l + "</option>"
                                        : "<option>" + l + "</option>"
                    })
                }
            </select>
        )
    }
}