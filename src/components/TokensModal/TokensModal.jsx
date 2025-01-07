/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/components/dialog";
import tokens from "@/lib/json/tokens.json";
import { useState } from "react";

const TokensModal = ({ open, setOpen, setSelectedToken }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tokens based on the search term
  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-black">
        <DialogHeader className="border-b pb-4">
          <DialogTitle>Select Tokens</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="col-span-12">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search tokens"
                className="w-full h-9 px-2 text-sm border border-black/25 outline-none rounded-md placeholder:text-neutral-400"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-span-12">
              <div className="relative w-full max-h-[300px] overflow-y-auto scrollbar-y-thin">
                <ul>
                  {filteredTokens.length > 0 ? (
                    filteredTokens.map((token, index) => (
                      <li key={index} className="block w-full">
                        <button
                          type="button"
                          className="flex items-center gap-2 w-full py-2 px-3 text-start text-sm hover:bg-neutral-100 rounded-md"
                          onClick={() => {
                            setSelectedToken(token);
                            setOpen(false);
                          }}
                        >
                          <img
                            src={token?.logo}
                            alt={token?.name}
                            className="w-5 min-w-5 h-5 rounded-full"
                          />
                          {token?.name}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="text-center py-2 text-sm text-neutral-500">
                      No tokens found
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TokensModal;
