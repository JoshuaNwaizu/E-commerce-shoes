import Home from './Home/Home.jsx'
import HomeSwipers from './Home/HomeSwipers.jsx'
import Navbar from './Navbar/Navbar.jsx'

function App() {
    //practicing javascript//

    //created first function
    function lowerOneWord(str) {
        return str.toLowerCase()
    }
    // created second function
    function firstUpper(str) {
        const [firstWord, ...otherWords] = str.split(' ')
        return [firstWord.toUpperCase(), ...otherWords].join(' ')
    }
    //Function that calls other functions
    function changedArrays(str, fn) {
        console.log(`Transfromed string: ${fn(str)}`)
        console.log(`Transformes by: ${fn.name}`)
    }
    const mulNum = (str) => {
        return str.split(' ').join(' /') + ' ' + 5
    }

    changedArrays('Joshua is a good dev', firstUpper)
    changedArrays('Joshua is a good dev', lowerOneWord)
    changedArrays('Joshua is a good dev', mulNum)

    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
