/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/components/dialog";

const HarvestModal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-black">
        <DialogHeader className="border-b pb-4">
          <DialogTitle>Harvest SHARK</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="col-span-12 text-center">
              <p className="text-sm">Claimable Rewards</p>
            </div>
            <div className="col-span-12">
              <button
                type="button"
                className="inline-block w-full text-sm py-2.5 px-5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-50"
              >
                Claim Rewards
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HarvestModal;
