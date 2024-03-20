// Import necessary libraries and components
"use client";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScaleLoader } from "react-spinners";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import { fadeIn } from "../Components/Varient";
import { TypeAnimation } from "react-type-animation";
import { FaArrowCircleDown } from "react-icons/fa";
import Modal from "../Components/Modal";

// Main component
export default function Swap() {
  // State variables
  const [cryptoList, setCryptoList] = useState([]);
  const [amount, setAmount] = useState(0);
  console.log('amt45',amount)
  const [crypto1, setCrypto1] = useState("");
  const [crypto2, setCrypto2] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cryptoSearchQuery, setCryptoSearchQuery] = useState("");
  const [estimatedAmount, setEstimatedAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [selectedCryptoName1, setSelectedCryptoName1] = useState("");
  const [selectedCryptoName2, setSelectedCryptoName2] = useState("");
  const [animatedDropdown1, setAnimatedDropdown1] = useState(false);
  const [animatedDropdown2, setAnimatedDropdown2] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const [price, setPrice] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [getstore,setStore] = useState('')
  const [getcryptoval,setCryptoVal] = useState('')
  const [getcrytoval1,setCryptoVal1] = useState('')

  const validationSchema = yup.object().shape({
    amount: yup
      .string()
      .matches(/^-?\d*\.?\d*$/, "Please enter a valid number")
      .required("Field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Fetch cryptocurrency list on component mount
  useEffect(() => {
    const fetchCryptoList = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        const data = await response.json();
        const slicedData = data.slice(0, 100);
        console.log("slicedata", slicedData);
        setCryptoList(slicedData);
      } catch (error) {
        console.error("Error fetching cryptocurrency list:", error);
      }
    };

    fetchCryptoList();
  }, []);

  // Filtered cryptocurrency list based on search query
  const filteredCryptoList = cryptoList.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtered cryptocurrency list for the first input
  const filteredCrypto1List = cryptoList.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(cryptoSearchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(cryptoSearchQuery.toLowerCase())
  );

  // Animation configurations
  const dropdown1Animation = useSpring({
    opacity: animatedDropdown1 ? 4 : 0,
    height: animatedDropdown1 ? 200 : 0,
  });

  const dropdown2Animation = useSpring({
    opacity: animatedDropdown2 ? 4 : 0,
    height: animatedDropdown2 ? 200 : 0,
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle crypto search input change
  const handleCryptoSearchChange = (e) => {
    setCryptoSearchQuery(e.target.value);
  };

  // Toggle dropdown visibility for the first cryptocurrency
  const toggleDropdown1 = () => {
    setDropdown1(!dropdown1);
    setAnimatedDropdown1(!animatedDropdown1);
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle dropdown visibility for the second cryptocurrency
  const toggleDropdown2 = () => {
    setDropdown2(!dropdown2);
    setAnimatedDropdown2(!animatedDropdown2);
  };

  const handleSelectCrypto1 = async(crypto) => {
    setCrypto1(crypto.id);
    setSelectedCryptoName1(`${crypto.name} (${crypto.symbol.toUpperCase()})`);
    localStorage.setItem('selectedCryptoName1',`${crypto.name} (${crypto.symbol.toUpperCase()})`)
    localStorage.setItem('selectcrypto2',crypto.id)
    setDropdown1(false);
    setAnimatedDropdown1(false);
    setShowModal(false);
    if(crypto1){
    await handleSwap({ amount: amount });
    }
  };

  useEffect(()=>{
     
    const cryptoval = localStorage.getItem('selectcrypto2')
    const cryptoval1 = localStorage.getItem('selectcrypto2')
     console.log('cryptoval: ', cryptoval);
     setCryptoVal(cryptoval)
     setCryptoVal1(cryptoval1)


  },[crypto1,crypto2,getcryptoval,getcrytoval1])

  // Handle selection of the second cryptocurrency
  const handleSelectCrypto2 = async(crypto) => {
    setCrypto2(crypto.id);
    setSelectedCryptoName2(`${crypto.name} (${crypto.symbol.toUpperCase()})`);
    localStorage.setItem('selectcrypto2',crypto.id)
    setDropdown2(false);
    setAnimatedDropdown2(false);
    setShowModal1(false);
    console.log("crypto2",crypto2)
      await handleSwap({ amount: amount });
  };

  // Handle swapping logic
  const handleSwap = async (formData) => {
    const { amount } = formData;
    console.log('amount',amount)

    setLoading(true);

    try {
      // Your API call using the extracted data...
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${getcrytoval1},${getcryptoval}&vs_currencies=usd`
      );

      const rate = response.data[getcryptoval].usd;
      setEstimatedAmount(amount * rate);
      setError(""); // Reset the error state on success
    } catch (error) {
      setError("Error fetching exchange rate");
    } finally {
      setLoading(false);
    }
  };
  const [button1Color, setButton1Color] = useState('#131313');
const [button2Color, setButton2Color] = useState('#FC72FF');

  const handleRow = () => {
    // Swap amount and price values
    const tempAmount = amount;
    setAmount(estimatedAmount);
    setEstimatedAmount(tempAmount);

    // Swap selected cryptocurrency names
    const tempSelectedCryptoName1 = selectedCryptoName1 === '' ? 'select a token' : selectedCryptoName1;
    setSelectedCryptoName1(selectedCryptoName2);
    setSelectedCryptoName2(tempSelectedCryptoName1);

    setButton1Color(button2Color)
    setButton2Color(button1Color)
  };

  useEffect(() => {
    // Retrieve the selected value from localStorage when the component mounts
    const storedValue = localStorage.getItem('selectedCryptoName1');
    console.log('storedValue', storedValue);

    if (storedValue) {
      setSelectedCryptoName1(storedValue);
    }
  },);



  const handlebutton=()=>{
    setShowModal(true)
  }

  // JSX structure
  return (
    <Fragment>
      <main
        className="maxcontainer bg-[#171617] flex w-full  flex-col items-center  p-4 md:p-2  md:h-[600px] shadow-xl"
      >
        <div className="blur-lg absolute left-[30%] rounded-3xl  animate-pulse hover:blur-none cursor-pointer focus:ring-inset">
        <svg className="rounded-full borde hover:border-purple-600" width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#F7F9FB"/>
<path d="M32.6877 6.6665L22.0555 14.5632L24.0216 9.90427L32.6877 6.6665Z" fill="#E2761B" stroke="#E2761B" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.1433 6.6665L18.6901 14.638L16.8201 9.90427L8.1433 6.6665ZM28.8628 24.9711L26.0311 29.3095L32.0899 30.9764L33.8317 25.0672L28.8628 24.9711ZM7.0213 25.0672L8.75238 30.9764L14.8112 29.3095L11.9795 24.9711L7.0213 25.0672Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4697 17.641L12.7814 20.1949L18.7974 20.462L18.5837 13.9972L14.4697 17.641ZM26.3629 17.641L22.1955 13.9224L22.0565 20.462L28.0619 20.1949L26.3629 17.641ZM14.8117 29.3097L18.4234 27.5466L15.3032 25.1103L14.8117 29.3097ZM22.4092 27.5466L26.0316 29.3097L25.5294 25.1103L22.4092 27.5466Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.0316 29.3095L22.4091 27.5464L22.6976 29.9079L22.6656 30.9017L26.0316 29.3095ZM14.8116 29.3095L18.1776 30.9017L18.1562 29.9079L18.4233 27.5464L14.8116 29.3095Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2319 23.5497L15.2185 22.6628L17.345 21.6904L18.2319 23.5497ZM22.6023 23.5497L23.4892 21.6904L25.6264 22.6628L22.6023 23.5497Z" fill="#233447" stroke="#233447" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8106 29.3092L15.3236 24.9708L11.9789 25.067L14.8106 29.3092ZM25.5177 24.9708L26.0306 29.3092L28.8623 25.067L25.5177 24.9708ZM28.0609 20.1943L22.0555 20.4615L22.6112 23.5496L23.4981 21.6903L25.6352 22.6627L28.0609 20.1943ZM15.2167 22.6627L17.3538 21.6903L18.2301 23.5496L18.7964 20.4615L12.7804 20.1943L15.2167 22.6627Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7814 20.1943L15.3032 25.1097L15.2177 22.6627L12.7814 20.1943ZM25.6362 22.6627L25.5294 25.1097L28.0619 20.1943L25.6362 22.6627ZM18.7974 20.4615L18.2311 23.5496L18.9363 27.1935L19.0966 22.3956L18.7974 20.4615ZM22.0565 20.4615L21.768 22.3849L21.8963 27.1935L22.6122 23.5496L22.0565 20.4615Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.613 23.5495L21.8971 27.1933L22.41 27.546L25.5302 25.1096L25.637 22.6626L22.613 23.5495ZM15.2185 22.6626L15.304 25.1096L18.4242 27.546L18.9371 27.1933L18.2319 23.5495L15.2185 22.6626Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6656 30.9022L22.6976 29.9085L22.4305 29.6734H18.402L18.1562 29.9085L18.1776 30.9022L14.8116 29.3101L15.987 30.2718L18.3699 31.9281H22.4625L24.8561 30.2718L26.0316 29.3101L22.6656 30.9022Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.409 27.5465L21.8961 27.1938H18.9362L18.4233 27.5465L18.1561 29.908L18.4019 29.6729H22.4304L22.6975 29.908L22.409 27.5465Z" fill="#161616" stroke="#161616" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.1371 15.0761L34.0454 10.7164L32.6883 6.6665L22.4087 14.2961L26.3624 17.6407L31.951 19.2756L33.1905 17.833L32.6562 17.4484L33.5111 16.6683L32.8486 16.1554L33.7034 15.5036L33.1371 15.0761ZM6.79688 10.7164L7.70516 15.0761L7.12813 15.5036L7.98299 16.1554L7.33116 16.6683L8.18601 17.4484L7.65173 17.833L8.88058 19.2756L14.4692 17.6407L18.4229 14.2961L8.14327 6.6665L6.79688 10.7164Z" fill="#763D16" stroke="#763D16" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.951 19.2761L26.3624 17.6412L28.0614 20.1951L25.5289 25.1105L28.8628 25.0678H33.8317L31.951 19.2761ZM14.4692 17.6412L8.88061 19.2761L7.0213 25.0678H11.9795L15.3027 25.1105L12.7809 20.1951L14.4692 17.6412ZM22.0561 20.4622L22.4087 14.2966L24.0329 9.90479H16.8201L18.4229 14.2966L18.7969 20.4622L18.9252 22.407L18.9358 27.1942H21.8958L21.9171 22.407L22.0561 20.4622Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.106857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className="blur-lg absolute right-[40%] top-[5%] rounded-3xl  animate-pulse hover:blur-0 cursor-pointer focus:ring-inset">
<svg className="rounded-full borde" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_13571_129878)">
<rect width="40" height="40" fill="#0052FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.3312 0H31.6672C36.2704 0 40 4.0128 40 8.9632V31.0368C40 35.9872 36.2704 40 31.6688 40H8.3312C3.7296 40 0 35.9872 0 31.0368V8.9632C0 4.0128 3.7296 0 8.3312 0Z" fill="#0052FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9989 5.79443C27.8453 5.79443 34.2053 12.1544 34.2053 20.0008C34.2053 27.8472 27.8453 34.2072 19.9989 34.2072C12.1525 34.2072 5.79254 27.8472 5.79254 20.0008C5.79254 12.1544 12.1525 5.79443 19.9989 5.79443Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5005 15.459H23.4973C24.0733 15.459 24.5389 15.9614 24.5389 16.579V23.419C24.5389 24.0382 24.0717 24.539 23.4973 24.539H16.5005C15.9245 24.539 15.4589 24.0366 15.4589 23.419V16.579C15.4589 15.9614 15.9261 15.459 16.5005 15.459Z" fill="#0052FF"/>
</g>
<defs>
<clipPath id="clip0_13571_129878">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
<div className="blur-lg absolute left-[70%] top-[10%] rounded-3xl  animate-pulse hover:blur-0 cursor-pointer focus:ring-inset">
  <Image className="rounded-full" src="/last.png" width={60} height={60} alt='tab'/>
</div>
<div className="blur-lg absolute right-[90%] top-[10%] rounded-3xl  animate-pulse hover:blur-0 cursor-pointer focus:ring-inset">
   <Image className="rounded-full" src="/logo.png" width={60} height={60}/>
</div>
<div className="blur-lg absolute right-[70%] top-[5%] lg:top-[20%] rounded-3xl  animate-bounce hover:blur-0 cursor-pointer focus:ring-inset">
   <Image className="" src="/second.png" width={60} height={60}/>
</div>

          {/* <TypeAnimation
            sequence={[
              "swap the swap amount",
              1000,
              "swap the  swap Excnhange amount",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          >
            {({ text }) => <span style={{ color: "#292828" }}>{text}</span>}
          </TypeAnimation> */}
          {/* <div className="w-[520px] h-[400px] bg-[#eb26fd] rounded-[100%] absolute z-1 top-[10%] left-[-50%] translate-x-[50%] translate-y-[-50%] blur-[90px]">
         
      </div> */}

          <div className="hover:-translate-y-3 mt-5 px-4  transition-all duration-300">
            <p className="text-white  text-6xl md:text-[28px] font-semibold jost leading-2">
              Swap anytime</p>
              <p className="text-white text-6xl md:text-2xl md:text-[28px] font-semibold leading-2 jost">
                anywhere
              </p>
          </div>
          <div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-10 w-full md:w-[480px] p-[8px] h-auto bg-[#131313] rounded-xl"
          >
            <div className="focus:outline-none">
              {/* <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-white"
          >
            You pay
          </label> */}
              <div className=" relative  mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none text-[#9999] text-[14px] jost  absolute top-4 left-0 flex items-center px-4">
                   You pay
                </div>

                <input
                  {...register("amount")}
                  type="text"
                  name="amount"
                  value={amount}
                  onChange={(e) => {
                    // Prevent typing minus sign
                    if (e.target.value === "-" || e.target.value === "-0") {
                      setAmount("");
                      return;
                    }

                    // Allow only numeric characters
                    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
                    setAmount(numericValue);
                  }}
                  className={`bg-customColor1 border ${
                    errors?.amount ? "border-red-300" : "border-transparent"
                  } h-[120px]    w-full rounded-[16px] text-[#999999] text-[30px]  pl-7 flex items-center pr-20 placeholder:text-white focus:outline-none  hover:border-[#3A3C43] bg-[#1B1B1B]   shadow-lg  sm:leading-6`}
                  placeholder="0"
                />
                {errors?.amount && (
                  <p className="text-red-500 font-medium">
                    {errors.amount.message}
                  </p>
                )}

                <div className="absolute inset-y-0 mr-2 right-0 flex items-center">
                  {/* Dropdown for the first cryptocurrency */}
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      value={selectedCryptoName1}
                      onClick={handlebutton}
                      className={`inline-flex justify-between items-center w-[120px] sm:w-34 lg:w-full px-5 py-2 font-medium leading-5 text-white text-base ${button1Color === '#131313' ? 'bg-[#131313]' : 'bg-[#FC72FF]'} border-transparent rounded-3xl shadow-sm hover:bg-[#242527] jost focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-zinc-500 active:text-gray-200 transition ease-in-out duration-150 transform hover:scale-105`}
                      >
                      {selectedCryptoName1} 
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
            {/* You receive section */}
            <div className="focus:outline-none">
              {/* <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            You receive
          </label> */}
              <div className=" relative mt-1 rounded-md shadow-sm">
              <button
              className="absolute left-[50%] -top-4 rounded-xl bg-[#131313] shadow-lg border border-solid focus:outline-none border-transparent text-center w-[30px] h-[30px] text-[#9999]"
              onClick={handleRow}
            >
              <FaArrowCircleDown className="mx-1" size={20} />
            </button>
              <div className="pointer-events-none text-[#9999] text-[14px] jost  absolute top-4 left-0 flex items-center px-4">
                   You receive
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={estimatedAmount}
                  className="h-[120px] border border-transparent w-full rounded-[16px] text-[#999999] text-[30px]  pl-7 flex items-center pr-20 placeholder:text-white focus:outline-none hover:border-[#3A3C43]  bg-[#1B1B1B] shadow-lg sm:leading-6"
                  placeholder="0"
                />
                <div className="absolute mr-2 inset-y-0 right-0 flex items-center">
                  <div className="relative inline-block  text-left">
                    <button
                      type="button"
                      onClick={() => setShowModal1(true)}
                      className={`inline-flex justify-between items-center w-[130px] sm:w-34 lg:w-full px-5 py-2 text-[18px] font-medium jsot text-xl  text-white  border-transparent rounded-3xl shadow-sm ${button2Color === '#FC72FF' ? 'bg-[#FC72FF]' : ''}   focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-zinc-500 active:text-gray-200 transition ease-in-out duration-150 transform hover:scale-105`}
                    >
                      {selectedCryptoName2 || "select token"}
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="text-sm text-gray-200">${estimatedAmount}</p> */}
            {/* Swap button */}
            <button
              onClick={handleSubmit(handleSwap)}
              disabled={isValid && loading && isDirty}
              className="bg-[#322132] hover:bg-[#372a37] w-full h-[70px] text-[#FC72FF] jost font-medium text-xl my-2 mx-auto py-2 px-4 rounded-3xl focus:outline-none shadow-md"
            >
              {loading ? (
                <ScaleLoader
                  color="#fff"
                  height={15}
                  width={2}
                  radius={1}
                  margin={2}
                />
              ) : (
                "Connect wallet"
              )}
            </button>
            {error && <p className="mt-2 text-red-500 font-medium">{error}</p>}
          </div>
      </main>
      <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
        <div className="sticky top-0 z-10">
          <input
            type="text"
            className="w-[300px] px-4 py-2 border-hidden sticky top-0 z-10 text-white bg-[#212228] border-transparent rounded-xl   border-gray-300 focus:outline-none"
            placeholder="Search..."
            value={cryptoSearchQuery}
            onChange={handleCryptoSearchChange}
          />
        </div>
        <ul className="py-1">
          {filteredCrypto1List.map((crypto) => (
            <li
              key={crypto.id}
              className="px-4 py-2 text-base font-sans font-medium leading-5 text-white jost cursor-pointer hover:bg-[#212228] rounded-2xl"
              onClick={() => handleSelectCrypto1(crypto)}
            >
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </li>
          ))}
        </ul>
      </Modal>
      <Modal isvisible={showModal1} onClose={() => setShowModal1(false)}>
        <input
          type="text"
          className="px-4 py-2 w-[300px] text-base font-sans bg-[#212228] sticky top-0 z-10 font-light leading-5 text-white cursor-pointer hover:bg-[#212228] rounded-2xl"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ul className="py-1">
          {filteredCryptoList.map((crypto) => (
            <li
              key={crypto.id}
              className="px-4 py-2 text-base font-sans font-light leading-5 text-white cursor-pointer hover:bg-gray-800 rounded-2xl"
              onClick={() => handleSelectCrypto2(crypto)}
            >
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </li>
          ))}
        </ul>
      </Modal>
    </Fragment>
  );
}
