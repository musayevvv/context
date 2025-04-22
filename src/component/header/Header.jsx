import React from 'react'
import { useTheme } from '../context/Context'



const Header = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <div style={{
                background: theme === 'light' ? 'black' : 'white',
                color: theme === 'light' ? 'white' : 'black'
            }}>

                <p>alma</p>
                <p>armud</p>
                <p>banan</p>
                <p>heyva</p>
                <p>nar</p>
                <p>portagal</p>

            </div>

            <button onClick={toggleTheme}>change</button>

        </>

    )
}

export default Header