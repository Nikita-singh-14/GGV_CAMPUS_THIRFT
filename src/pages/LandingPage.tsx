import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/ItemCard'
import Overveiw from '../components/Overveiw'

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
            <Overveiw/>
            <main className="flex grow flex-col items-center justify-center gap-5">
                <h1 className="text-center mt-10 text-3xl font-bold">
                    Two flows. Zero confusion.
                </h1>
                <p>Whether you're buying or selling, the process is straightforward.</p>
                
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1>For Buyers</h1>
                    <Card logo='/logo.jpeg' title='Browse verified items' description='Every item is quality-checked by us before it goes live.'/>
                    <Card logo='/logo.jpeg' title='Add to cart & pay' description='Secure checkout. Pay once, get it delivered to your hostel.'/>
                    <Card logo='/logo.jpeg' title='Receive on campus' description='Campus-only delivery. No courier fees, no waiting weeks.'/>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1>For Sellers</h1>
                    <Card logo='/logo.jpeg' title='Browse verified items' description='Every item is quality-checked by us before it goes live.'/>
                    <Card logo='/logo.jpeg' title='Add to cart & pay' description='Secure checkout. Pay once, get it delivered to your hostel.'/>
                    <Card logo='/logo.jpeg' title='Receive on campus' description='Campus-only delivery. No courier fees, no waiting weeks.'/>
                    </div>
                    </div>
                    

                
            </main>
            <Footer />
        </div>

    )
}

export default LandingPage