import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center">
                <h2 className="text-3xl font-bold">
                    Home
                </h2>
            </main>

            <Footer />
        </div>
    )
}

export default Home