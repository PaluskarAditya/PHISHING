import { FileIcon } from "lucide-react";
import React from "react";

export default function MailView({ mail, select }) {
  console.log(mail);

  return (
    <div className="simulation h-full flex flex-col border-2 border-gray-200 rounded-lg">
      {/* 📌 Email Header */}
      <div className="flex flex-col gap-0 border-b-2 border-gray-200 bg-gray-100 rounded-t-lg w-full p-3">
        <h1 className="text-xl font-light tracking-tight">{mail.subject}</h1>
        <p onClick={() => select(mail.sender)} className="text-sm text-gray-500 font-light cursor-pointer">From: {mail.sender ? mail.sender?.value : mail.from}</p>
      </div>

      {/* 📌 Email Body */}
      <div className="p-5 flex flex-col gap-3 bg-white">
        <div
        onClick={() => select(mail.text)}
          className="font-light text-gray-800 text-sm leading-relaxed whitespace-pre-line cursor-pointer"
          dangerouslySetInnerHTML={{ __html: mail.text?.value || mail.text }}
        ></div>
      </div>

      {/* 📌 Attachments Section */}
      {mail.attachment?.value.length > 0 && (
        <div className="border-t-2 border-gray-200 p-3 flex flex-col gap-2">
          <h1 className="font-light text-lg">Attachments</h1>
          {mail.attachment?.value.map((el, index) => (
            <div
              onClick={() => select(mail.attachment)}
              key={index}
              className="p-2 px-3 border-2 flex gap-2 justify-center cursor-pointer items-center border-gray-300 rounded-md bg-gray-100 w-max hover:bg-gray-200 transition"
            >
              <FileIcon className="text-red-500 w-5 h-5" />
              <p className="font-light text-sm">{el}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
