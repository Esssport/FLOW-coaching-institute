import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/"><a><img src="/logo.svg" alt="Flow Coaching Institute Logo" className="logo" /></a></Link>
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
                        <a><img src="/shoppingCart.svg" alt="Shopping cart" className="logo" /></a>
                    </Link>
                </div>
            </nav>
        </>
    )
}