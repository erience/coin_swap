import React, { useState } from "react";
import StackingDataModal from "../StackingDataModal/StackingDataModal";
import HarvestModal from "../HarvestModal/HarvestModal";
import StackingModal from "../StackingModal/StackingModal";

const AquariumOfInterest = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [harvestModal, setHarvestModal] = useState(false);
  const [stakeModal, setStakeModal] = useState(false);
  const [stakeDataModal, setStakeDataModal] = useState(false);
  
  return (
    <React.Fragment>
      <div className="relative w-full border border-[#2b5876] rounded-lg overflow-hidden z-[1]">
        <div className="absolute left-0 top-0 w-full h-full bg-sea-blue opacity-95 z-[-1]"></div>
        <div className="p-4 py-9">
          <div className="grid grid-cols-12 gap-y-8">
            <div className="col-span-12">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 min-w-7 h-7 rounded-full overflow-hidden">
                    <img
                      src="https://t3.ftcdn.net/jpg/06/23/23/30/360_F_623233047_sSTT5ocMXKlH1FzoRj6pd1IurIcxJQ6h.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="font-bold">SHARK 20</h4>
                </div>
                <span className="text-xs py-1 px-3 leading-none bg-white text-black rounded-3xl">
                  Diamond
                </span>
              </div>
            </div>
            <div className="col-span-12">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Staking APY
                  </div>
                  <div className="relative font-medium text-sm">20% P.A.</div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Staked SHARK
                  </div>
                  <button
                    type="button"
                    className="inline-block text-xs py-1.5 px-3.5 rounded-md bg-neutral-900 hover:bg-neutral-800"
                    onClick={() => setStakeDataModal(true)}
                  >
                    Stacking Data
                  </button>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Earned SHARK
                  </div>
                  <input placeholder="Enter Amount" className="inline-block text-xs py-2 px-3.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"/>
                  <button
                    type="button"
                    className="inline-block text-xs py-1.5 px-3.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"
                    // onClick={() => setHarvestModal(true)}
                  >
                    Claim Rewards
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              {!walletConnected ? (
                <div className="relative">
                  <button
                    type="button"
                    className="inline-block w-full text-sm py-2.5 px-5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"
                    onClick={() => setWalletConnected(true)}
                  >
                    Connect Wallet
                  </button>
                </div>
              ) : (
                <div className="relative flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-block w-full text-sm py-2.5 px-5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"
                    onClick={() => setStakeModal(true)}
                  >
                    Stake
                  </button>
                  <button
                    type="button"
                    className="inline-block w-full text-sm py-2.5 px-5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"
                    disabled
                  >
                    Unstake
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <StackingDataModal open={stakeDataModal} setOpen={setStakeDataModal} />
      <HarvestModal open={harvestModal} setOpen={setHarvestModal} />
      <StackingModal open={stakeModal} setOpen={setStakeModal} />
    </React.Fragment>
  );
};

export default AquariumOfInterest;
