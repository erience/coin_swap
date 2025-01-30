/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/components/dialog";

const StackingModal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-black">
        <DialogHeader className="border-b pb-4">
          <DialogTitle>Stake SHARK</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="col-span-12">
              <label className="block mb-1.5 text-sm">Your REXX Balance</label>
              <input
                type="number"
                value="0.00000"
                className="w-full h-10 border-0 outline-none"
                readOnly
              />
            </div>
            <div className="col-span-12">
              <label className="block mb-1.5 text-sm">
                Enter REXX Amount to Stake
              </label>
              <input
                type="number"
                className="w-full h-10 px-2 border outline-none rounded-md"
              />
            </div>
            <div className="col-span-12">
              <button
                type="button"
                className="inline-block w-full text-sm py-2.5 px-5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"
              >
                Stake Now
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StackingModal;
