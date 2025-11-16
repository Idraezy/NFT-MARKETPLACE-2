import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={'/'} className="flex items-center cursor-pointer">
        <div className="flex-shrink-0">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-sm text-white">NFT</span>
            </div>
            <span className="text-xl font-bold text-main max-sm:hidden">
            NFT MarketPlace
            </span>
        </div>
        </div>
    </Link>
  )
}

export default Logo
