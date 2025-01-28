import TokensModal from "@/components/TokensModal/TokensModal";
import { ArrowDownUpIcon, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const SwapContainer = () => {
  const [tokensModal1, setTokensModal1] = useState(false);
  const [tokensModal2, setTokensModal2] = useState(false);
  const [fromToken, setFromToken] = useState({
    name: "PancakeSwap Token",
    label: "CAKE",
    value: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    chainId: 56,
    decimals: 18,
    logo: "https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png",
    type: "token",
  });
  const [toToken, setToToken] = useState({
    name: "Binance Pegged BUSD",
    label: "BUSD",
    value: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    chainId: 56,
    decimals: 18,
    logo: "https://tokens.pancakeswap.finance/images/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png",
    type: "token",
  });
  const handleSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <React.Fragment>
      <div className="relative w-full border border-[#2b5876] rounded-lg overflow-hidden z-[1]">
        <div className="absolute left-0 top-0 w-full h-full bg-sea-blue opacity-95 z-[-1]"></div>
        {/* <div className="p-4 border-b">
          <h2>Swap</h2>
        </div> */}
        <div className="p-4 py-8">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="col-span-12">
              <div className="relative w-full border rounded-lg">
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="block">From</span>
                    <span className="block">Balance:</span>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 p-2 rounded-md hover:text-black hover:bg-white transition-all duration-300"
                          onClick={() => setTokensModal1(true)}
                        >
                          <img
                            src={fromToken?.logo}
                            alt=""
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-xs font-bold inline-flex items-center gap-1">
                            {fromToken?.label}
                            <ChevronDown size={14} />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="inline-block py-1 px-2 text-xs rounded-sm bg-purple-500"
                        >
                          MAX
                        </button>
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="0.00"
                        className="w-full h-9 px-2 text-end font-semibold bg-transparent outline-none placeholder:text-neutral-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 text-center">
              <button
                type="button"
                className="w-11 h-11 inline-flex items-center justify-center text-black bg-white rounded-full hover:text-white hover:bg-purple-500 transition-all duration-300" onClick={handleSwap}
              >
                <ArrowDownUpIcon size={18} />
              </button>
            </div>
            <div className="col-span-12">
              <div className="relative w-full border rounded-lg">
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="block">To</span>
                    <span className="block">Balance:</span>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 p-2 rounded-md hover:text-black hover:bg-white transition-all duration-300"
                          onClick={() => setTokensModal2(true)}
                        >
                          <img
                            src={toToken?.logo}
                            alt=""
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-xs font-bold inline-flex items-center gap-1">
                            {toToken?.label}
                            <ChevronDown size={14} />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="inline-block py-1 px-2 text-xs rounded-sm bg-purple-500"
                        >
                          MAX
                        </button>
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="0.00"
                        className="w-full h-9 px-2 text-end font-semibold bg-transparent outline-none placeholder:text-neutral-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TokensModal
        open={tokensModal1}
        setOpen={setTokensModal1}
        setSelectedToken={setFromToken}
      />
      <TokensModal
        open={tokensModal2}
        setOpen={setTokensModal2}
        setSelectedToken={setToToken}
      />
    </React.Fragment>
  );
};

export default SwapContainer;
