"use client";
import Script from "next/script";

export default function Telegram() {
  return (
    <div>
      <Script
        async
        src="https://oauth.telegram.org/js/telegram-login.js?3"
        data-client-id=""
        // data-client-id={process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID}
        data-onauth="console.log(data)"
        data-request-access="write phone"
        onReady={() => {
          console.log("Script ready");
        }}
      ></Script>
    </div>
  );
}
