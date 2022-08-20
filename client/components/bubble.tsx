import { Message } from "../utils/messege";

type AppProps = {
    message: Message;
}

export const Bubble = ({ message }: AppProps): JSX.Element => {
  return (
    <div className="m-4">
      <p className="ml-4 text-gray-500">
        <span>{message.user}</span> <span>{message.time}</span>
      </p>
      <div className="w-2/3 h-auto bg-sky-600 rounded-2xl ">
        <p className="p-4 text-white">{message.content}</p>
      </div>
    </div>
  );
};
