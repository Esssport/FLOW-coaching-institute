import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/"><img src="/logo.svg" className="logo" alt="Flow Coaching Institute Logo"/></Link>
                <div className="menuLinks">
                    <Link href="/become-a-coach">
                        <a>Become a Coach Now</a>
                    </Link>
                    <Link href="/course">
                        <a>Online Certifications <img src="/arrow-down.svg" className='arrow-down' alt="arrow-down"/></a>
                    </Link>
                    {/* <Link href="/">
                        <a>Corporate</a>
                    </Link> */}
                    <Link href="/about-us">
                        <a>About Us</a>
                    </Link>
                    <Link href="/">
                        <a>Resources</a>
                    </Link>
                    <Link href="/Calendar">
                        <a>Calendar</a>
                    </Link>
                    <Link href="/checkout">
                        <a><img src="/shoppingCart.svg" className='shopping-cart' alt="Shopping cart"/></a>
                    </Link>
                </div>
            </nav>
        </>
    )
}