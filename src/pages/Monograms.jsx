import React from 'react'
import MonogramCard from '../components/MonogramCard'
import { useSelector } from 'react-redux'

export default function Monograms() {
    const { monograms } = useSelector(state => state.monograms)

    return (
        <main className='p-3'>
            {monograms.length === 0 ? (
                <p className='bg-warning p-3 mb-0'>No monograms here, go create some.</p>
            ) : (
                <div className='row my-0'>
                    {monograms.map(monogram => (
                        <MonogramCard key={monogram.id} monogram={monogram}/>
                    ))}
                </div>
            )}
        </main>
    )
}
