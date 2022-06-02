import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage<{persons: Array<Record<string, any>>}> = ({persons}) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
    const httpResponse = await fetch(`https://swapi.dev/api/people`)
    const jsonResponse = await httpResponse.json()
    return {
        props: {
            persons: jsonResponse.results
        }
    }
}

export default Home
