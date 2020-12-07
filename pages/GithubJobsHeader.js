import React from 'react'

function GithubJobsHeader() {
    return (
        <div className="header_container">
            <form className="header_form">
                <fieldset className="header_fieldset">
                    <input className="header_input" type="text" placeholder="Title, companies, expertise or benefits" />
                    <button className="header_button">Search</button> 
                </fieldset>
            </form>
        </div>
    )
}

export default GithubJobsHeader
