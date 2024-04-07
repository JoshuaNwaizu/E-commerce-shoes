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

    const getJson = (url, errMsg = `This can't be found`) => {
        return fetch(url).then((res) => {
            if (!res.ok) throw new Error(errMsg)
            console.log(res)

            return res.json()
        })
    }

    const getCountries = (country) => {
        getJson(`https://restcountries.com/v3.1/name/${country}`)
            .then((data) => {
                console.log(data[0])
                const border = data[0].borders[0]

                if (!border) throw new Error('No border 1')

                return getJson(`https://restcountries.com/v3.1/alpha/${border}`)
            })
            .then((borderData) => {
                console.log(borderData[0])

                const border2 = borderData[0].borders[0]
                if (!border2) throw new Error('No border 2')

                return getJson(
                    `https://restcountries.com/v3.1/alpha/${border2}`,
                    `Sorry can't get data from ${border2}`
                )
            })
            .then((border2Data) => {
                console.log(border2Data[0])
            })

            .catch((err) => {
                console.error(`There's an error somewhere:  ${err.message}😪`)
            })
    }
    getCountries('usa')

    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
