import Htext from '@/shared/Htext';
import { SelectedPage } from '@/shared/types'
import {motion } from "framer-motion"
import { useForm } from 'react-hook-form';
Htext

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function ContactUs({setSelectedPage}: Props) {
  const inputStyle = `w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();
  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  return (
    <section id={`#${SelectedPage.ContactUs}`} className='mx-auto w-5/6 pt-24 pb-42'>
      <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div className='md:w-3/5' initial='hidden' whileInView='visible' viewport={{once:true, amount: 0.5}}
                    transition={{duration: 0.5}} variants={{hidden:{opacity:0,x:-50}, visible: {opacity:1,x:0}}}
        >
           <Htext>
             <span className='text-primary-500'> CONTACT US </span> FOR YOUR SHOTS FIRED
            </Htext> 
            <p className='my-5'>
              Lorem ipsum perasdkfje fkjf  dfjofi vnksa ;lkrj oid vnlkdj
            </p>
        </motion.div>

        {/* FORM */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div className='mt-10 basis-3/5 md:mt-0'
          initial='hidden' whileInView='visible' viewport={{once:true, amount: 0.5}}
          transition={{duration: 0.5}} variants={{hidden:{opacity:0,y:50}, visible: {opacity:1,x:0}}}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/280af58f7322162d5d4a38e190008ce5"
            >
              <input className={inputStyle} type='text' placeholder='NAME' {...register("name", {required: true, maxLength:100,})}>
              </input>
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' && "This field is required"}
                  {errors.name.type === 'maxLength' && "Max Length is 100 characters"}
                </p>
              )}
              <input className={inputStyle} type='text' placeholder='EMAIL' {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}>
              </input>
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' && "This field is required"}
                  {errors.email.type === 'pattern' && "Invalid email address"}
                </p>
              )}
              <textarea className={inputStyle} rows={4} cols={50} placeholder='MESSAGE' {...register("message", {required: true, maxLength:2000,})}>
              </textarea>
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' && "This field is required"}
                  {errors.message.type === 'maxLength' && "Max Length is 100 characters"}
                </p>
              )}
              <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                Submit
              </button>
            </form>  
          </motion.div>

        </div>
      </motion.div>
    </section>
  
    )
}