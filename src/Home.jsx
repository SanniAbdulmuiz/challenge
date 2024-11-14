import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
function Home() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    let newErrors = {};
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(trimmedEmail)) {
      newErrors.email = "Valid email required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      //console.log("Form submitted successfully with email:", email);

      setErrors({});
      setSuccessMessage(true);
    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }
  }

  return (
    <div className=" md:flex md:justify-center md:content-center md:my-[10rem] ">
      <div className=" flex flex-col md:flex-row gap-[2rem] md:gap-[3rem] md:bg-slate-50 md:shadow-inner md:rounded-lg md:p-5">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="pl-6 pr-8 pb-8 md:p-4 ">
            <h2 className="text-4xl  md:text-3xl font-bold tracking-wide text-gray-800 mb-4">
              Stay updated!
            </h2>

            <p className="mb-4 tracking-normal text-xl text-gray-600 font-semibold">
              Join 60,000+ product managers receiving monthly updates on
            </p>

            <ul className="flex flex-col gap-3 md:gap-2 mb-6">
              <li className=" flex items-center gap-[1rem]">
                <span className="text-red-600 text-3xl">
                  <HiCheckCircle />
                </span>
                <p className="text-gray-600 text-xl font-semibold">
                  Product discovery and building what matters
                </p>
              </li>

              <li className=" flex items-center gap-[1rem]">
                <span className="text-red-600 text-3xl">
                  <HiCheckCircle />
                </span>
                <p className="text-gray-600 text-xl font-semibold">
                  Measuring to ensure update are a success
                </p>
              </li>

              <li className=" flex items-center gap-[1rem]">
                <span className="text-red-600 text-3xl">
                  <HiCheckCircle />
                </span>
                <p className="text-gray-600 text-xl font-semibold">
                  And much more
                </p>
              </li>
            </ul>

            <form onSubmit={handleSubmit} noValidate>
              <div className="flex justify-between text-red-600">
                <label className="text-gray-800 font-bold">Email address</label>
                {errors.email && <p> {errors.email} </p>}
              </div>

              <div className="mt-2 mb-5">
                <input
                  className="rounded-sm border border-stone-200 w-full py-3 md:py-2 px-4 focus:outline-none focus:ring focus:ring-yellow-400"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="email@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </div>

              <button
                type="submit"
                className="py-3 text-white bg-gray-800 font-semibold w-full border focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Subscribe to monthly newsletter
              </button>
            </form>

            {successMessage && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50">
                <div className="bg-white p-8 rounded-lg shadow-lg ">
                  <div className="flex flex-col ">
                    <span className="text-red-600 text-4xl">
                      <HiCheckCircle />
                    </span>

                    <h3 className="text-3xl font-bold mt-2 mb-2">
                      Thanks for <br /> subscribing!
                    </h3>

                    <p className="text-sm">
                      A confirmation email has been sent to <br />
                      <span className="font-semibold">{email}</span>. Please
                      open it and click <br /> the button inside to confirm your
                      subcription
                    </p>

                    <button
                      onClick={() => setSuccessMessage(false)}
                      className="absolute top-2 right-2 text-white hover:text-slate-100 font-bold text-3xl"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            className="h-auto hidden md:h-auto md:block"
            src="img/illustration-sign-up-desktop.svg"
            alt="sign-up-desktop"
          />

          <img
            className="w-full md:hidden"
            src="img/illustration-sign-up-mobile.svg"
            alt="sign-up-desktop"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
