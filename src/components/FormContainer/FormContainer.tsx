import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/constants";

type Props = {
  updateReloadState: () => void;
};

const FormContainer = ({ updateReloadState }: Props) => {
  const [fullUrl, setFullUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl,
      });
      updateReloadState();
      setFullUrl("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-banner bg-cover h-[400px] w-full">
        <div className="backdrop-brightness-50 h-[400px] w-full">
          <h2 className="text-white text-4xl text-left pt-14 pl-5">
            URL Shortner
          </h2>
          <p className="text-white text-xl pb-2 font-extralight text-left pt-4 pl-5">
            paste your untidy link to short it
          </p>
          <form className=" p-8" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute  start-4 top-2">URLSortner.link /</div>
                <input
                  className="w-full focus:outline-none flex items-center border p-2 pl-36 border-gray-400 focus:border-blue-400 text-gray-900 rounded bg-white"
                  type="text"
                  required
                  placeholder="add your link"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button className="bg-slate-900 text-base text-bold text-white  overflow-hidden px-36 absolute end-0 border-2 border-red-400 p-2 rounded-md top-0">
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
