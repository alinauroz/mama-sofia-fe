import React from 'react'

const lang = localStorage.getItem("lang") || "en"

export default class Language extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            langs: ["en", "fr"]
        }
    }

    onChange_ = (e) => {
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
    }

    render () {
        return (
            <select 
                style={{marginTop: 10}}
                onChange = {this.onChange_}
            >
                {
                    this.state.langs.map(l => {
                        return l == lang ? <option selected> {l} </option>
                                        : <option> {l} </option>
                    })
                }
            </select>
        )
    }
}