import {MailIcon, PhoneIcon, LinkedinIcon} from 'lucide-react' 
const ContactPage = () => {
    return(
        <div id="contact" className="flex flex-col items-center font-poppins">
            <span>Get In Touch</span>
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <div className="md:hidden mt-8 py-6 px-6 flex flex-col items-start mt-6 mx-5 bg-gray-100 rounded-lg bg-white text-black font-semibold border-black border-2">
                <div className='hover:underline underline-offset-8 flex flex-row items-center justify-center'>
                    <MailIcon  color="white" size={40} className='mt-4 ml-2 bg-gray-700 rounded-full p-[8px]'/>
                    <span className=" ml-2 mb-[1px]">tzujuic2@illinois.edu</span>
                </div>
                <div className='hover:underline underline-offset-8 flex flex-row items-center justify-center'>
                    <PhoneIcon color="white" size={40} className='mt-4 ml-2 bg-gray-700 rounded-full p-[8px]'/>
                    <span className="ml-2 hover:underline underline-offset-8">+1 (447) 9020163</span>
                </div>
                <div className='hover:underline underline-offset-8 flex flex-row items-center justify-center'>
                    <LinkedinIcon color="white" size={40} className='mt-4 ml-2 bg-gray-700 rounded-full p-[6px]'/>
                    <a href="https://www.linkedin.com/in/chentzj" className="ml-2 hover:underline underline-offset-8">www.linkedin.com/in/chentzj</a>
                </div>
            </div>
            <div className="hidden mt-8 py-6 px-6 md:flex flex-row mt-6 ml-16 mx-5 bg-gray-100 rounded-full bg-white text-black font-semibold border-black border-2">
                <div className='hover:underline underline-offset-8 flex flex-row items-center justify-center'>
                    <MailIcon  color="white" size={40} className='bg-gray-700 rounded-full p-[8px]'/>
                    <span className=" ml-2 mb-[1px]">tzujuic2@illinois.edu</span>
                </div>
                <div className='hover:underline underline-offset-8 flex flex-row items-center justify-center'>
                    <PhoneIcon color="white" size={40} className='ml-10 bg-gray-700 rounded-full p-[8px]'/>
                    <span className="ml-2 hover:underline underline-offset-8">+1 (447) 9020163</span>
                </div>
                <div className='hover:underline underline-offset-8 flex flex-row items-center justify-center'>
                    <LinkedinIcon color="white" size={40} className='ml-10 bg-gray-700 rounded-full p-[6px]'/>
                    <a href="https://www.linkedin.com/in/chentzj" className="ml-2 hover:underline underline-offset-8">www.linkedin.com/in/chentzj</a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;