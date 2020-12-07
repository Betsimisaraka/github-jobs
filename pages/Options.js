import React from 'react'

function Options() {
    return (
        <div>
            <form>
                <fieldset>
                    <input type="checkbox" />
                    <label>Full time</label>
                </fieldset>
                <fieldset>
                    <label>Location</label>
                    <input type="text" name="" value="" placeholder="City, state, zip code or country" />
                </fieldset>
                <fieldset>
                    <input type="text" />
                    <label>London</label>
                </fieldset>
                <fieldset>
                    <input type="text" />
                    <label>Amsterdam</label>
                </fieldset>
                <fieldset>
                    <input type="text" />
                    <label>New Work</label>
                </fieldset>
                <fieldset>
                    <input type="text" />
                    <label>Belin</label>
                </fieldset>
            </form>
        </div>
    )
}

export default Options