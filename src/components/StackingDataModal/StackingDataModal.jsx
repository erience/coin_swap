/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/components/dialog";

const StackingDataModal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-black">
        <DialogHeader className="border-b pb-4">
          <DialogTitle>Staked SHARK Data</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="col-span-12">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Staking APY
                  </div>
                  <div className="relative font-medium text-sm">
                    <select className="w-14 h-7 border outline-none rounded-md">
                      {Array.from(Array(10).keys())?.map((item) => (
                        <option key={item + 1} value={item + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Staked SHARK
                  </div>
                  <div className="relative font-medium text-sm">0</div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Lockup Period
                  </div>
                  <div className="relative font-medium text-sm">12 Months</div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="relative font-medium text-sm">
                    Unlock Time
                  </div>
                  <div className="relative font-medium text-sm">20% P.A.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StackingDataModal;
