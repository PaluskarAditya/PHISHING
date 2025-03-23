import React, { useEffect, useState } from "react";
import MailView from "./MailView";
import { ArrowLeftIcon } from "lucide-react";

export default function SimulationHRPayrollScam({ onBack }) {
  const [selectedMail, setSelectedMail] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sus, setSus] = useState(null);
  const [userClicks, setUserClicks] = useState(0); // ✅ Track user clicks
  const [showPopup, setShowPopup] = useState(false);
  const [levelCleared, setLevelCleared] = useState(false);

  useEffect(() => {
    console.log("Score Updated:", score);
  }, [score]);

  useEffect(() => {
    console.log("User Clicks:", userClicks);
    if (selectedMail?.clickableCount && userClicks === selectedMail.clickableCount) {
      setTimeout(() => {
        if (score === selectedMail.clickableCount) {
          setLevelCleared(true);
        } else {
          setLevelCleared(false);
        }
        setShowPopup(true);
      }, 500);
    }
  }, [userClicks]);

  const emails = [
    {
      time: "9:45 AM",
      phishing: true,
      type: 'Phishing Mail',
      subject: "Your Payroll is updated!!!",
      sender: { value: "hr@secure-mail.com", options: ['spoofed email', 'safe email', 'phishing email'], answer: 'phishing email' },
      attachment: { value: ["payroll_update.pdf"], options: ['safe pdf', 'malicious pdf', 'not sure'], answer: 'malicious pdf' },
      text: {
        value: `<p>Dear Employee,</p>
             <p>Please update your payroll details to my new bank account <strong>ASAP</strong>.</p>
             <p>The old account is no longer valid.</p>
             <p>Find the updated payroll information in the attached document.</p>
             <p>Best Regards,<br>HR Team</p>`,
        options: ['weak grammar', 'proper english', 'not sure'],
        answer: 'weak grammar'
      },
    },
    {
      difficulty: "easy",
      phishing: false,
      attackType: "",
      from: "updates@company.com",
      time: "9:20 AM",
      subject: "Employee Benefits Update",
      text: `<p>Dear Employee,</p>
             <p>We have updated our benefits package. Click the link below to view the details.</p>
             <p><a href="https://company-benefits.com">View Benefits</a></p>
             <p>Best Regards,<br>Company HR Team</p>`,
      attachments: [],
      links: ["https://company-benefits.com"],
      softwares: []
    },
    {
      difficulty: "easy",
      phishing: false,
      attackType: "Credential Theft",
      from: "support@security-alert.com",
      time: "8:55 AM",
      subject: "Urgent: Your account security is compromised!",
      text: `<p>Dear User,</p>
             <p>We've detected <strong>unusual login attempts</strong> on your account.</p>
             <p>Please <a href="http://malicious-link.com">reset your password</a> immediately to secure your account.</p>
             <p>IT Security Team</p>`,
      attachments: [],
      links: ["http://malicious-link.com"],
      softwares: []
    },
  ];

  const handleSus = (text) => {
    console.log("Selected:", text);
    if (selectedMail.type === text) {
      setScore((prevScore) => prevScore + 1);
    }
    setUserClicks(prev => prev + 1);
    setSus(text);
  };

  const handleElementClick = (option) => {
    console.log(option, selectedItem?.answer);
    if (selectedItem.answer === option) {
      setScore(prev => prev + 1);
    }
    setUserClicks(prev => prev + 1);
    setSelectedItem(null);
  };

  return (
    <div className="h-full flex gap-5">
      {/* ✅ Popup for Level Verdict */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center tracking-widest">
            <h2 className="text-xl font-bold text-gray-800">
              {levelCleared ? "🎉 Level Cleared!" : "❌ Level Not Cleared"}
            </h2>
            <p className="text-gray-600">
              {levelCleared
                ? "Great job! You identified all elements correctly."
                : "You missed some elements. Try again!"}
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                setSelectedMail(null);
                setScore(0);
                setUserClicks(0);
                setSus(null);
                setSelectedItem(null);
                onBack();
              }}
              className="mt-4 px-4 py-2 border-cyan-400 text-cyan-400 hover:text-white rounded-md hover:bg-cyan-400 border-2 transition"
            >
              Back to Game Selection
            </button>
          </div>
        </div>
      )}

      {/* 📌 Inbox Panel */}
      <div className="bg-white rounded-lg w-3/4 simulation">
        <div className="p-3 px-4 border-b-0 border-blue-700 bg-blue-500 rounded-t-lg flex justify-between items-center">
          {selectedMail ? (
            <button
              onClick={() => setSelectedMail(null)}
              className="text-black text-sm px-2 cursor-pointer py-1 flex justify-center gap-1 items-center rounded-md bg-white transition"
            >
              <ArrowLeftIcon className="font-light h-4 w-4" /> Back to Inbox
            </button>
          ) : (
            <h1 className="font-medium tracking-normal text-2xl text-white">Inbox</h1>
          )}
        </div>

        <div className="flex flex-col gap-3 p-3">
          {!selectedMail ? (
            emails.map((el, index) => {
              const totalClickableItems = [
                el.sender?.value ? 1 : 0,
                el.text?.value ? 1 : 0,
                el.attachment?.value.length > 0 ? 1 : 0
              ].reduce((acc, val) => acc + val, 0);

              return (
                <div
                  key={index}
                  onClick={() => setSelectedMail({ ...el, clickableCount: totalClickableItems })}
                  className="p-3 rounded-lg flex justify-between items-center border-2 border-gray-200 cursor-pointer transition hover:bg-gray-100"
                >
                  <div className="flex flex-col gap-0">
                    <h1 className="text-lg font-light">{el.subject}</h1>
                    <p className="font-light text-gray-500">{el.sender?.value ? el.sender.value : el.from}</p>
                  </div>
                  <p className="text-sm font-light text-gray-500">{el.time}</p>
                </div>
              );
            })
          ) : (
            <MailView mail={selectedMail} select={setSelectedItem} />
          )}
        </div>
      </div>

      {/* 📌 Investigation Panel */}
      <div className="w-1/4 bg-gray-800 p-4 flex flex-col justify-between items-center gap-5 rounded-lg">
        <div className="flex flex-col gap-0 text-white tracking-widest">
          <h1>Actions</h1>
          <p className="text-sm text-gray-500">take actions by selecting elements</p>
        </div>

        {selectedItem === null && sus === null && selectedMail?.phishing === true ? (
          <div className="text-white flex flex-col gap-2 tracking-widest">
            <p>Do you think this mail is?</p>
            <button onClick={() => handleSus(selectedMail?.type)} className="border-2 border-cyan-400 rounded-md text-sm p-2 px-4 w-full cursor-pointer">{selectedMail?.type}</button>
            <button onClick={() => handleSus("Session Hi-Jacking")} className="border-2 border-cyan-400 rounded-md text-sm p-2 px-4 w-full cursor-pointer">Session Hi-Jacking</button>
            <button onClick={() => handleSus("Safe Mail")} className="border-2 border-cyan-400 rounded-md text-sm p-2 px-4 w-full cursor-pointer">Safe Mail</button>
          </div>
        ) : selectedItem !== null ? (
          <div className="text-white flex flex-col gap-2 tracking-widest">
            <p>Investigate: <span className="text-cyan-400">{selectedItem.value}</span></p>
            {selectedItem.options?.map((option, index) => (
              <button key={index} onClick={() => handleElementClick(option)} className="border-2 border-pink-400 rounded-md text-sm p-2 px-4 w-full cursor-pointer hover:bg-pink-400">{option}</button>
            ))}
          </div>
        ) : null}
        <div className="text-white tracking-widest">
          <p className="text-xs">Total Clickable Items: <span className="text-cyan-400">{selectedMail?.clickableCount}</span></p>
          <p className="text-xs">User Clicks: <span className="text-yellow-400">{userClicks}</span></p>
          <p className="text-xs">Score: <span className="text-green-400">{score}</span></p>
        </div>
      </div>
    </div>
  );
}
