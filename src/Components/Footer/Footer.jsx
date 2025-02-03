import React from 'react';

const Footer = () => {
  return (
    <section className='mt-[200px]'>
      <h2 className='text-center font-bold text-2xl'>Gadget Heaven</h2>
      <p className='font-medium text-xl text-center text-[rgba(9,8,15,0.6)] mt-3'>
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className='mt-8' />
      <footer className="mt-8 footer p-10 sora-font flex flex-col lg:flex-row lg:justify-center lg:space-x-40">
        <nav className="text-center lg:text-left mb-8 lg:mb-0">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>
        <nav className="text-center lg:text-left mb-8 lg:mb-0">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>
        <nav className="text-center lg:text-left mb-8 lg:mb-0">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;


// import React from 'react';
// import Gadgets from '../Gadgets/Gadgets';

// const Footer = () => {
//     return (


//         <section className='mt-[200px]'>
//             <h2 className='text-center font-bold text-2xl'>Gadget Heaven</h2>
//             <p className='font-medium text-xl text-center text-[rgba(9,8,15,0.6)] mt-3'>Leading the way in cutting-edge technology and innovation.</p>
//             <hr className='mt-8' />
//             <footer className="mt-8 justify-center space-x-40 footer p-10 sora-font">
//                 <nav>
//                     <h6 className="footer-title">Services</h6>
//                     <a className="link link-hover">Branding</a>
//                     <a className="link link-hover">Design</a>
//                     <a className="link link-hover">Marketing</a>
//                     <a className="link link-hover">Advertisement</a>
//                 </nav>
//                 <nav>
//                     <h6 className="footer-title">Company</h6>
//                     <a className="link link-hover">About us</a>
//                     <a className="link link-hover">Contact</a>
//                     <a className="link link-hover">Jobs</a>
//                     <a className="link link-hover">Press kit</a>
//                 </nav>
//                 <nav>
//                     <h6 className="footer-title">Legal</h6>
//                     <a className="link link-hover">Terms of use</a>
//                     <a className="link link-hover">Privacy policy</a>
//                     <a className="link link-hover">Cookie policy</a>
//                 </nav>
                
//             </footer>
//         </section>



//     );
// };

// export default Footer;