import React from "react";

const Modal = ({isvisible,onClose,children}) => {
 
 if(!isvisible) return null

 const handleClose=(e)=>{
    if(e.target.id === 'wrapper')
    onClose()
 }

  return (
    <div className="fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" 
    onClick={handleClose}>    
      <div className="w-[500px] bg-[#131313]/100 h-[600px] lg:h-[400px] md:h-[400px] md:mt-3 lg:mt-3 px-2 mt-40 text-white rounded-[20px] border border-[#3A3C43] focus:outline-none overflow-y-scroll md-h-[400px]  lg-h-[400px]">
       <div className="p-2 sticky top-0 z-10 flex justify-between rounded-xl "> 
       Select a Token
       <button
          type="button"
          className=" bg-black rounded"
          onClick={()=>onClose()}
        >
          <svg
            className="w-5 h-5 ml-2 mr-1 cursor-pointer text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>
        <div className="">
           {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
