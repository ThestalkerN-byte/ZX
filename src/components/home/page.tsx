import Link from 'next/link'
import React from 'react'

const HomePage = () => {

    return (
        <>
            <h5>Hello word! , the machine is coming </h5>
            <Link href={'/about'}>
                <button>To about test</button>
            </Link>

        </>
    )
}

export default HomePage