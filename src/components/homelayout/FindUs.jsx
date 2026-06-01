
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="bg-white border border-base-300 p-4">
        <div className="join join-vertical w-full">
          <button className="btn bg-white border border-base-300 hover:bg-base-200 text-primary font-semibold justify-start join-item">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn bg-white border border-base-300 hover:bg-base-200 text-primary font-semibold justify-start join-item">
            <FaTwitter></FaTwitter> Twitter
          </button>
          <button className="btn bg-white border border-base-300 hover:bg-base-200 text-primary font-semibold justify-start join-item">
            <FaInstagram></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
