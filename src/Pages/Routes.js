import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fronend from './Frontend'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Fronend />} />
            </Routes>
        </>
    )
}
