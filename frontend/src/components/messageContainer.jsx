import React from "react";
import Messages from "./messages";
import MessageInput from "./messageInput";
import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-blue-700 font-semibold flex-col flex">
        <p>Bonjour 👋🏽 John Doe</p>
        <p>Veuillez sélectionner un chat pour commencer</p>
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const noChat = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChat ? (
        <NoChatSelected />
      ) : (
        <>
          {/* En tete */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To</span>{" "}
            <span className="text-gray-500">John Doe</span>
          </div>

          {/* Message */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
