import Image from "next/image"
import Link from "next/link"

const Hero=()=>{
    return (
        <div className="text-center  bg-white pb-10">
            <div className="w-60 mx-auto">
                <Image alt="" src={"/undraw_home_cinema_l7yl.png"} 
                style="width:200px; height:200px;"
                width={10} height={10} 
                layout="responsive" />
            </div>
            
            <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to WatchMe</h1>
            <p className="bg-gray-500">TV AND GAME</p>
            <Link href="/contact" passHref>
                <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">CONTACT US</button>
            </Link>
        </div>
    )
}

export default Hero