import React from "react";
import "./App.css";
import { Box } from "./Box";
import { Button } from "./Button";

function App() {
  return (
    <>
      <div className="lg:py-[72px] lg:px-[112px]">
        <div className="max-w-[1218px] mx-auto lg:flex gap-[32px]">
          <Box className="max-w-[489px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[30px] font-mono leading-[36px] text-center">
                  Chapter 0
                </p>
                <p className="text-[30px] font-mono leading-[36px] text-center">
                  by Plastico
                </p>
                <p className="mt-[32px] text-[20px] text-center leading-[26px] font-mono">
                  All Synthia and Plastico collectors are allowed to claim this
                  edition.
                </p>
              </div>
              <div>
                <Button>CONNECT WALLET</Button>
                <div className="mt-4 flex gap-4">
                  <Button
                    aProps={{
                      href: "https://synthia.love",
                      target: "_blank",
                    }}
                  >
                    @Synthia
                  </Button>
                  <Button
                    aProps={{
                      href: "https://twitter.com/madebyplastico",
                      target: "_blank",
                    }}
                  >
                    @Plastico
                  </Button>
                </div>
              </div>
            </div>
          </Box>
          <Box className="space-y-[8px]">
            <img src="/chapter-0.jpg" className="border border-cold-gray-900" />
            <Box className="!p-[24px] font-mono">CLAIM ENDS IN:</Box>
            <Box className="!p-[24px] font-mono">TOTAL MINTED:</Box>
            <Button>MINT EDITION</Button>
          </Box>
        </div>
      </div>
      <div className="bg-cold-gray-900 lg:py-[72px] lg:px-[112px]">hi</div>
    </>
  );
}

export default App;
