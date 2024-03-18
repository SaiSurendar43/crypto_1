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

  const handleSelectCrypto1 = (crypto) => {
    setCrypto1(crypto.id);
    setSelectedCryptoName1(`${crypto.name} (${crypto.symbol.toUpperCase()})`);
    setDropdown1(false);
    setAnimatedDropdown1(false);
    setShowModal(false);
  };

  // Handle selection of the second cryptocurrency
  const handleSelectCrypto2 = async(crypto) => {
    setCrypto2(crypto.id);
    setSelectedCryptoName2(`${crypto.name} (${crypto.symbol.toUpperCase()})`);
    setDropdown2(false);
    setAnimatedDropdown2(false);
    setShowModal1(false);
  
  
  };

  // Handle swapping logic
  const handleSwap = async (formData) => {
    const { amount } = formData;
    console.log('amount',amount)

    setLoading(true);

    try {
      // Your API call using the extracted data...
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${crypto1},${crypto2}&vs_currencies=usd`
      );

      const rate = response.data[crypto2].usd;
      setEstimatedAmount(amount * rate);
      setError(""); // Reset the error state on success
    } catch (error) {
      setError("Error fetching exchange rate");
    } finally {
      setLoading(false);
    }
  };

  const handleRow = () => {
    // Swap amount and price values
    const tempAmount = amount;
    setAmount(estimatedAmount);
    setEstimatedAmount(tempAmount);

    // Swap selected cryptocurrency names
    const tempSelectedCryptoName1 = selectedCryptoName1;
    setSelectedCryptoName1(selectedCryptoName2);
    setSelectedCryptoName2(tempSelectedCryptoName1);
  };

  // JSX structure
  return (
    <Fragment>
      <main
        className="shadow-md m  md:h-[700px]  flex  flex-col items-center justify-between bg-center bg-cover"
        style={{ backgroundImage: "url(/sky.jpg)" }}
      >
        <div className="bg-/10  backdrop-blur-lg  maxcontainer backdrop-brightness-75 flex w-full  flex-col items-center  p-4 md:p-2  md:h-[900px] shadow-xl">
          <TypeAnimation
            sequence={[
              "swap the swap amount",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "swap the  swap Excnhange amount",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          >
            {({ text }) => <span style={{ color: "#292828" }}>{text}</span>}
          </TypeAnimation>
          {/* <div className="w-[520px] h-[400px] bg-[#eb26fd] rounded-[100%] absolute z-1 top-[10%] left-[-50%] translate-x-[50%] translate-y-[-50%] blur-[90px]">
         
      </div> */}

          <div className="hover:-translate-y-3 transition-all duration-300">
            <p className="text-white text-6xl md:text-2xl leading-2 font-serif font-semibold">
              Swap{" "}
              <span className="text-black md:text-2xl leading-2 font-serif font-semibold">
                anytime
              </span>
            </p>
            <p className="text-white text-6xl md:text-2xl leading-2 font-serif font-semibold">
              Swap{" "}
              <span className="text-red-200 md:text-2xl leading-2 font-serif font-semibold">
                anywhere
              </span>
            </p>
          </div>
          <div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-1 bg-white/5 backdrop-blur-lg backdrop-brightness-75 w-full md:w-[480px] p-[8px] h-auto bg-customColor2 shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] rounded-xl"
          >
            <div className="focus:outline-none">
              {/* <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-white"
          >
            You pay
          </label> */}
              <div className=" relative  mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-white sm:text-base">$</span>
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
                  } h-[120px]    w-full rounded-2xl text-white text-base  pl-7 flex items-center pr-20 placeholder:text-white focus:outline-none  focus:border-white  bg-black/10  backdrop-blur-sm shadow-lg sm:text-sm sm:leading-6`}
                  placeholder="0.00"
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
                      onClick={() => setShowModal(true)}
                      className="inline-flex justify-between items-center w-full sm:w-34 lg:w-full px-5 py-2  font-medium leading-5 text-white text-base bg-black/10 backdrop-blur-lg border-transparent rounded-2xl shadow-sm hover:bg-white/10  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-zinc-500 active:text-gray-200 transition ease-in-out duration-150 transform hover:scale-105"
                    >
                      {selectedCryptoName1 || "Select a cryptocurrency1"}
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
            <button
              className="absolute left-[50%] top-32 rounded-xl backdrop-blur-lg  shadow-lg border border-gray-400 text-center w-[30px] h-[30px] text-white"
              onClick={handleRow}
            >
              <FaArrowCircleDown className="mx-1" size={20} />
            </button>
            {/* You receive section */}
            <div className="focus:outline-none">
              {/* <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            You receive
          </label> */}
              <div className=" relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-white sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={estimatedAmount}
                  className="h-[120px] border border-transparent w-full rounded-2xl text-white text-base  pl-7 flex items-center pr-20 placeholder:text-white focus:outline-none  focus:border-white  bg-black/10  backdrop-blur-sm shadow-lg sm:text-sm sm:leading-6"
                  placeholder="0.00"
                />
                <div className="absolute mr-2 inset-y-0 right-0 flex items-center">
                  <div className="relative inline-block  text-left">
                    <button
                      type="button"
                      onClick={() => setShowModal1(true)}
                      className="inline-flex justify-between items-center w-[130px] sm:w-34 lg:w-full px-5 py-2 text-base font-medium  text-white bg-black/10 backdrop-blur-lg border-transparent rounded-2xl shadow-sm hover:bg-white/10  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-zinc-500 active:text-gray-200 transition ease-in-out duration-150 transform hover:scale-105"
                    >
                      {selectedCryptoName2 || "Select a cryptocurrency2"}
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
            <p className="text-sm text-gray-200">${estimatedAmount}</p>
            {/* Swap button */}
            <button
              onClick={handleSubmit(handleSwap)}
              disabled={isValid && loading && isDirty}
              className="bg-white/10 backdrop-blur-lg  hover:bg-black/20 w-full text-white font-sans font-medium text-base my-2 mx-auto py-2 px-4 rounded focus:outline-none shadow-md"
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
                "Swap"
              )}
            </button>
            {error && <p className="mt-2 text-red-500 font-medium">{error}</p>}
          </div>
        </div>
      </main>
      <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
        <div className="sticky top-0 z-10">
          <input
            type="text"
            className="w-[300px] px-4 py-2 border-hidden sticky top-0 z-10 text-black bg-white border-transparent rounded-xl bg-black/10  border-gray-300 focus:outline-none"
            placeholder="Search..."
            value={cryptoSearchQuery}
            onChange={handleCryptoSearchChange}
          />
        </div>
        <ul className="py-1">
          {filteredCrypto1List.map((crypto) => (
            <li
              key={crypto.id}
              className="px-4 py-2 text-base font-sans font-light leading-5 text-white cursor-pointer hover:bg-gray-800 rounded-2xl"
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
          className="px-4 py-2 text-base font-sans sticky top-0 z-10 font-light leading-5 text-white cursor-pointer hover:bg-gray-800 rounded-2xl"
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
