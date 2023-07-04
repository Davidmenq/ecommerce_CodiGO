import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { cartState } from '@/atoms/cartState'
import { useRecoilState } from 'recoil'

const Navbar = () => {
    const [cartItem] = useRecoilState(cartState)

    return (
        <section className='shadow-xl bg-white sticky top-0 '>
            <div className='container mx-auto px-3 py-2 text-[24px] flex justify-between items-center'>
                <Link href="/">Logo</Link>
                <div className='relative cursor-pointer'>
                    <Link href="/cart">
                        <div>
                            <FiShoppingCart className='' />
                            <span className='absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white'>{cartItem.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar