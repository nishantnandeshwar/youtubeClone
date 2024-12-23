import youtubeLogo from '../../assets/images/youtube.png'
import hamburgerMenu from '../../assets/images/menu.png'
import searchLogo from '../../assets/images/search.png'
import mic from '../../assets/images/mic.png'
import plus from '../../assets/images/plus.png'
import bell from '../../assets/images/bell.png'

const Header = () => {
    return (
        <header className="flex items-center justify-between text-white px-4 py-2">
            <div className="flex items-center space-x-2 min-w-[160px]">
                <button className="text-2xl">
                    <img src={hamburgerMenu} alt="menu" className='h-6 object-contain' />
                </button>
                <div className="flex items-center space-x-1">
                    <img
                        src={youtubeLogo}
                        alt="YouTube"
                        className="h-6"
                    />
                    <span className="text-sm font-semibold">YouTube</span>
                    <span className="text-xs">IN</span>
                </div>
            </div>

            <div className="flex flex-grow mx-4 max-w-[600px]">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow bg-gray-900 text-white px-4 py-2 rounded-l-full focus:outline-none"
                />
                <button className="bg-gray-700 px-4 py-2 rounded-r-full min-w-[50px] flex items-center justify-center">
                    <img src={searchLogo} alt="search" className='h-5 object-contain ' />
                </button>
                <div className="flex mx-2 min-w-[50px] bg-slate-200 content-center justify-center rounded-full p-2">
                    <img src={mic} alt="search" className='h-5 object-contain ' />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="flex items-center bg-gray-700 px-4 py-2 rounded-full max-w-[fit-content]">
                    <img src={plus} alt="create" className='h-5 object-contain ' />
                    <span className="ml-2 pr-4">Create</span>
                </button>
                <button className="min-w-[fit-content] flex relative">
                    <img src={bell} alt="notification" className='h-7 object-contain ' />
                    <span className='bg-red-600 text-xs rounded-full w-5 h-5 absolute left-5 text-center'>9+</span>
                </button>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center min-w-[35px] ml-4">
                    <span className="text-xs text-black text-center">A</span>
                </div>
            </div>
        </header>
    )
};

export default Header;
