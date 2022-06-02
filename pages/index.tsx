import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

    const [ persons, setPersons ] = useState<Array<Record<string, any>>>([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then((httpResponse) => httpResponse.json())
            .then((jsonResponse) => {
                setPersons(jsonResponse.results)
            })
    }, [])

    return (
        <div>
            <h1>Hello</h1>
            {
                persons.map((person, idx) => {
                    return (
                        <div key={idx + 1}>
                            <Link href={`/persons/${idx+1}`}>{person.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
