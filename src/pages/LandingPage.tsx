import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/ItemCard'
import Overveiw from '../components/Overveiw'
import ProductCard from '../components/ProductCards'

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
                    <Card logo='/logo.jpeg' title='Electronics' description='Verified & tested' />
                    <Card logo='/logo.jpeg' title='Textbooks' description='Saved up to 70%' />
                    <Card logo='/logo.jpeg' title='Dorm items' description='Ready on day one' />
                </div>


            </main>
            <Overveiw />
            <main className="flex grow flex-col items-center justify-center gap-5">
                <h1 className="text-center mt-10 text-3xl font-bold">
                    Two flows. Zero confusion.
                </h1>
                <p>Whether you're buying or selling, the process is straightforward.</p>

                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1>For Buyers</h1>
                        <Card logo='/logo.jpeg' title='Browse verified items' description='Every item is quality-checked by us before it goes live.' />
                        <Card logo='/logo.jpeg' title='Add to cart & pay' description='Secure checkout. Pay once, get it delivered to your hostel.' />
                        <Card logo='/logo.jpeg' title='Receive on campus' description='Campus-only delivery. No courier fees, no waiting weeks.' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1>For Sellers</h1>
                        <Card logo='/logo.jpeg' title='Browse verified items' description='Every item is quality-checked by us before it goes live.' />
                        <Card logo='/logo.jpeg' title='Add to cart & pay' description='Secure checkout. Pay once, get it delivered to your hostel.' />
                        <Card logo='/logo.jpeg' title='Receive on campus' description='Campus-only delivery. No courier fees, no waiting weeks.' />
                    </div>
                </div>
            </main>
            <main className="flex flex-col items-center justify-center gap-5 m-10">
                <h1 className="text-center mt-10 text-3xl font-bold">
                    Live Items
                </h1>
                <p>Fresh on the shelf</p>

                <div className='flex flex-wrap gap-6 justify-center '>

                    <ProductCard icon="📚"
                        title="Calculus Vol. 2"
                        category="Textbooks"
                        price="480"
                        condition="Good"
                    />
                    <ProductCard
                        icon="💻"
                        title="Dell Inspiron 15"
                        category="Electronics"
                        price="19,500"
                        condition="Good"
                    />
                    <ProductCard
                        icon="💻"
                        title="Dell Inspiron 15"
                        category="Electronics"
                        price="19,500"
                        condition="Good"
                    />
                    <ProductCard
                        icon="💻"
                        title="Dell Inspiron 15"
                        category="Electronics"
                        price="19,500"
                        condition="Good"
                    />
                    <ProductCard
                        icon="💻"
                        title="Dell Inspiron 15"
                        category="Electronics"
                        price="19,500"
                        condition="Good"
                    />
                    <ProductCard
                        icon="💻"
                        title="Dell Inspiron 15"
                        category="Electronics"
                        price="19,500"
                        condition="Good"
                    />

                </div>

                <Button text='Veiw all items' />
            </main>

            <main className="flex grow flex-col items-center justify-center gap-5">
                <h1 className="text-center mt-10 text-3xl font-bold">
                    WHY US
                </h1>
                <p>Built on trust</p>

                <div className='flex gap-5'>
                    <Card logo='/logo.jpeg' title='Every item verified' description='We physically check every item before listing. No surprises.' />
                    <Card logo='/logo.jpeg' title='Sellers paid instantly' description='UPI transfer the same day we accept your item. No waiting.' />
                    <Card logo='/logo.jpeg' title='Campus-only' description='Built for your college. Delivery within campus. No strangers.' />
                </div>
            </main>
            <div className="flex items-center justify-center gap-5 pt-5">
                <div className="flex flex-col items-center justify-center gap-5 px-4 w-124 py-2 border border-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
                    <h1>Ready to buy or sell?</h1>
                    <p>Join hundreds of students already saving money on campus essentials.</p>
                    <div className='flex gap-5'>
                        <Button text='Browse-Items' />
                        <Button text='Sells an items' />
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default LandingPage