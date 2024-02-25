import React from 'react'

const Navlinks = ({ text, target, handleClickNav }) => {
    return (
        <>
            <li>
                <a
                    href={target}
                    className="font-bodyFont"
                    onClick={() => handleClickNav()}
                >
                    {text}
                </a>
            </li>
        </>
    )
}

export default Navlinks
