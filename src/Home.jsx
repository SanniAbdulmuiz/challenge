import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center content-center my-[10rem] ">
      <div className="flex gap-[2rem] ">
        <div>
          <h2>Stay updated</h2>
          <p>Join 60,000+ product managers receiving monthly updates on</p>
          <ul>
            <li>
              <span>
                <HiCheckCircle /> Product discovery and building what matters
              </span>
            </li>
            <li>
              <span>
                <HiCheckCircle /> Measuring to ensure update are a success
              </span>
            </li>
            <li>
              <span>
                <HiCheckCircle /> And much more
              </span>
            </li>
          </ul>
          <form>
            <label>Email address</label>
            <input
              className="rounded-sm border border-stone-200 px-4 py-2 text-md transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
              type="email"
              name="email"
              value={email}
              placeholder="email@company.com"
            />
          </form>
        </div>
        <div>
          <img
            src="img/illustration-sign-up-desktop.svg"
            alt="sign-up-desktop"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
