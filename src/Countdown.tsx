import React from "react";
import { useAuctionCountdown } from "./hooks/useCountdown";

export function Countdown({
  end,
  onEnd,
  endMsg,
}: {
  endMsg: string;
  end: number;
  onEnd?: () => void;
}) {
  const { timeLeft, pastEndTime } = useAuctionCountdown(end, onEnd);
  const showDays = !!timeLeft?.days;
  const showHours = !!timeLeft?.hours;
  const showMinutes = !!timeLeft?.minutes;
  const showSeconds = !!timeLeft?.seconds;

  if (pastEndTime) {
    return <>{endMsg}</>;
  }

  return (
    <>
      {showDays && `${timeLeft?.days}D`} {showHours && `${timeLeft?.hours}H`}{" "}
      {showMinutes && `${timeLeft?.minutes}M`}{" "}
      {showSeconds && `${timeLeft?.seconds}S`}
    </>
  );
}
