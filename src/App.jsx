import Home from './Home/Home.jsx'
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

    // .then((data) => {
    //     console.log(data[0])
    //     const border = data[0].borders[0]

    //     return getJsons(
    //         `https://restcountries.com/v3.1/alpha/${border}`
    //     )
    // })
    // .then((borderData) => {
    //     console.log(borderData[0])

    //     const border2 = borderData[0].borders[0]

    //     return getJsons(
    //         `https://restcountries.com/v3.1/alpha/${border2}`,
    //         `Sorry can't get data from ${border2}`
    //     )
    // })
    // .then((border2Data) => {
    //     console.log(border2Data[0])
    // })

    // .catch((err) => {
    //     console.error(`There's an error somewhere:  ${err.message}😪`)
    // })

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    getLocation().then((pos) => console.log(pos))

    // const getCountries = async (country) => {
    //     try {
    //         const getUrl = await fetch(
    //             `https://restcountries.com/v3.1/name/${country}`
    //         )

    //         if (!getUrl.ok)
    //             throw new Error(`Sorry can't get countries at this point`)
    //         // console.log(getUrl)
    //         const newUrl = await getUrl.json()
    //         console.log(newUrl[0])

    //         const border = newUrl[0].borders[0]

    //         const border1URl = await fetch(
    //             `https://restcountries.com/v3.1/alpha/${border}`
    //         )
    //         if (!border1URl.ok)
    //             throw new Error(`Sorry can't get this border at this point`)

    //         console.log(border1URl)
    //         const newBorder1URl = await border1URl.json()
    //         console.log(newBorder1URl[0])
    //     } catch (err) {
    //         console.error(`${err}💀💀💀`)
    //     }
    // }
    // getCountries('nigeria')
    const getJson = (url, errMsg = `This can't be found`) => {
        return fetch(url).then((res) => {
            if (!res.ok) throw new Error(errMsg)
            console.log(res)

            return res.json()
        })
    }

    const get3Countries = async (c1, c2, c3, c4) => {
        try {
            // const [data1] = await getJson(
            //     `https://restcountries.com/v3.1/name/${c1}`
            // )
            // const [data2] = await getJson(
            //     `https://restcountries.com/v3.1/name/${c2}`
            // )
            // const [data3] = await getJson(
            //     `https://restcountries.com/v3.1/name/${c3}`
            // )
            // const [data4] = await getJson(
            //     `https://restcountries.com/v3.1/name/${c4}`
            // )

            const data = await Promise.all([
                getJson(`https://restcountries.com/v3.1/name/${c1}`),
                getJson(`https://restcountries.com/v3.1/name/${c2}`),
                getJson(`https://restcountries.com/v3.1/name/${c3}`),
                getJson(`https://restcountries.com/v3.1/name/${c4}`),
            ])

            console.log([data])
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }
    get3Countries('nigeria', 'benin', 'niger', 'togo')
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
