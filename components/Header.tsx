import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-red-50 h-25 border-b-10 border-stone-400">
            <h2 className= " text-stone-600 text-4xl font-semibold p-4"> CS391 | MP-6 OAuth </h2>
            <nav className="p-2 m-4">
                <ul>
                    <li><Link href={'/'}/></li>
                    <li><Link href={'/redirect'}/></li>
                </ul>
            </nav>
        </header>
    );
}