import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'
import MainPic from "@/assets/shots_fired_artsy.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-wdith:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'> 
        {/* IMAGE and MAIN HEADER */}
        <div>
             {/* MAIN HEADER */}
            
             {/* IMAGE */}
             <img className='pt-[80px]' alt="logo" src= {MainPic}  />
        </div>
       
    </section>
  )
}

export default Home