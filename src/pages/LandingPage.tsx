import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/ItemCard'

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex grow flex-col items-center justify-center gap-5">
                <h1 className="text-center mt-10 text-3xl font-bold">
                    Buy & sell college
                    essentials the smart way
                </h1>
                <p>Quality-checked secondhand textbooks, electronics, dorm items and more - all verified by us before they reach you.</p>
                <div className='flex gap-5'>
                    <Button text='Browse-Items' />
                    <Button text='Sell Your Stuff' />
                </div>
                <div className='flex gap-5'>
                    <Card logo='/logo.jpeg' title='Electronics' description='Verified & tested'/>
                    <Card logo='/logo.jpeg' title='Textbooks' description='Saved up to 70%'/>
                    <Card logo='/logo.jpeg' title='Dorm items' description='Ready on day one'/>
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default LandingPage