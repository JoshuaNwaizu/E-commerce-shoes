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
        // console.log(`Transfromed string: ${fn(str)}`)
        // console.log(`Transformes by: ${fn.name}`)
    }
    const mulNum = (str) => {
        return str.split(' ').join(' /') + ' ' + 5
    }

    changedArrays('Joshua is a good dev', firstUpper)
    changedArrays('Joshua is a good dev', lowerOneWord)
    changedArrays('Joshua is a good dev', mulNum)

    // function scope
    let f

    const g = () => {
        let a = 34

        f = () => {
            // console.log(a * 2)
        }
    }
    g()
    f()

    fetch(`https://restcountries.com/v3.1/name/nigeria`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0])
            const border = data[0].borders[0]

            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        })
        .then((res) => res.json())
        .then((borderData) => {
            console.log(borderData[0])

            const border2 = borderData[0].borders[3]
            return fetch(`https://restcountries.com/v3.1/alpha/${border2}`)
        })
        .then((res) => res.json())
        .then((border2Data) => {
            console.log(border2Data[0])

            const border3 = border2Data[0].borders[2]
            return fetch(`https://restcountries.com/v3.1/alpha/${border3}`)
        })
        .then((res) => res.json())
        .then((border3Data) => {
            console.log(border3Data[0])
        })
        .catch((err) => {
            console.error(`Hey Joshua this page ${err.message}😪`)
        })
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
