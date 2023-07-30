import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

// const originalEndTime = useAppStore(
//   (state) => state.originalEndTime ?? state.endTime ?? 0
// );
// const nocStartTime = useMemo(() => {
//   return new BigNumber(originalEndTime as string)
//     .minus(NOC_MIN_BEFORE_AUCTION_END * 60)
//     .toNumber();
// }, [originalEndTime]);

// const now = Date.now();
// const nocStartTimeMs = nocStartTime * 1000;
// let nocActive = now >= nocStartTimeMs;
// let timeLeftToNoc;
// if (!nocActive) {
//   timeLeftToNoc = intervalToDuration({
//     start: now,
//     end: nocStartTimeMs + 1000,
//   });
// }
// if (
//   timeLeftToNoc?.days === 0 &&
//   timeLeftToNoc?.hours === 0 &&
//   timeLeftToNoc?.minutes === 0 &&
//   timeLeftToNoc?.seconds === 0
// ) {
//   nocActive = true;
// }

// return { nocStartTime, timeLeftToNoc, nocActive };

export function useAuctionCountdown(end: number, onEnded?: () => void) {
  const [flip, updateFlip] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateFlip((f) => !f);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [flip]);

  const start = Date.now();

  const timeLeft = intervalToDuration({
    start,
    end,
  });
  const pastEndTime = start >= end;
  const [endedCalled, updateEndedCalled] = useState(false);
  useEffect(() => {
    if (pastEndTime && !endedCalled) {
      onEnded?.();
      updateEndedCalled(true);
    }
  }, [pastEndTime, endedCalled, onEnded]);

  return {
    end,
    start,
    pastEndTime,
    timeLeft,
  };
}
