import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import Logo from "@/assets/shots_fired_logo.jpg";
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: SelectedPage ) => void;
    isTopOfPage: boolean;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
        <div
            className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${navbarBackground} ${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full w-5/6`}>
                    {/** Left Side */} 
                    <img className='w-[200px] gap-8' alt="logo" src={Logo}  />
                    {/** Right Side */} 
                    {isAboveMediumScreens ?
                        (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} pl-10 gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Product" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Other" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <ActionButton setSelectedPage={setSelectedPage}>Other other</ActionButton>
                            </div>
                        </div>
                        ) : ( 
                        <div>
                            <button
                            className='rounded-full bg-secondary-500 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className='h-6 w-6 text-white'></Bars3Icon>
                            </button>
                        </div> 
                    ) }
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                {/* CLOSE ICON */}
                <div className='flex justify-end p-12'>
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className='h-6 w-6 text-gray-400'></XMarkIcon>
                    </button>
                </div>
                {/* NAV BAR */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Product" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Other" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar