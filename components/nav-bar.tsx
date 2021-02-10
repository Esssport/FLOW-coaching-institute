import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/"><img src="/logo.svg" className="logo" alt="Flow Coaching Institute Logo"/></Link>
                <div className="menuLinks">
                    <Link href="/">
                        <a>Become a Coach Now</a>
                    </Link>
                    <Link href="/">
                        <a>Online Certifications</a>
                    </Link>
                    <Link href="/">
                        <a>About Us</a>
                    </Link>
                    <Link href="/">
                        <a>Resources</a>
                    </Link>
                    <Link href="/">
                        <a>Flowsity</a>
                    </Link>
                    <Link href="/">
                        <a><img src="/shoppingCart.svg" className='shopping-cart' alt="Shopping cart"/></a>
                    </Link>
                </div>
            </nav>
        </>
    )
}