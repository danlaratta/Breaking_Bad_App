import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    // state for value of input field
    const [text, setText] = useState('')

    // function that will be passed to input's onChange and called when the value of the input field is changed
    const onChange = (q) => {
        // sets the text state to the value of q (query)
        setText(q)
        //
        getQuery(q)
    }

    return (
        <section className='search'>
            {/* a form with a single input field used to search for specific breaking bad characters */}
            <form>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search Characters'
                    value={text} 
                    // onChange on right side of arrow function is a call to the onChange function above/outside of return()
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus 
                />
            </form>
        </section>
    )
}

export default Search
