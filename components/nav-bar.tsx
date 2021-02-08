import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <nav>
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
                <a>My cart</a>
            </Link>
        </nav>
        </>
    )
}