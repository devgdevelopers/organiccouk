import React from 'react';
import Image from 'next/image';
export default function Page (){

return (
<>
   <div className='md:pt-[7rem] w-full'>
      <div className='container mx-auto min-h-[60vh] my-auto flex flex-col justify-center items-center'>
         <Image src="/assets/Organicco_no_bg.png" width={100} height={100} className='mx-auto'></Image>
         <h4 className='text-2xl text-center my-10 text-green'>Admin, Please Login</h4>
         <form action="" className='flex flex-col gap-3 md:w-[50%] mx-auto'>
            <input type="email" placeholder='Your Email'
               className='border-1 p-2 placeholder:text-[#2e2e84] text-green outline-none border-[#2e2e84] rounded-md'
               required />
            <input type="password" placeholder='Your Password'
               className='border-1 p-2 placeholder:text-[#2e2e84] text-green outline-none border-[#2e2e84] rounded-md'
               required />
            <button type='submit' className='bg-green w-[250px] p-2 text-white mx-auto my-3 rounded-md'> Submit
            </button>
         </form>
      </div>
   </div>
</>
)
}