import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to Sent Message");
        }
      );
  };
  return (
    <>
      <section>
        <h1 className="mt-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Contact <span className="text-blue-500 italic">Us</span>
        </h1>
      </section>
      <section className="my-16">
        <div className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col justify-center items-center gap-y-2 border dark:border-gray-700 bg-blue-400/10 dark:bg-slate-700/10 rounded-2xl p-8 hover:scale-105 duration-300">
              <MdLocationPin
                className="inline-block mx-auto text-blue-600"
                size={50}
              />
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Address
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Banda, Sawantwadi, 416511
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 border dark:border-gray-700 bg-blue-400/10 dark:bg-slate-700/10 rounded-2xl p-8 hover:scale-105 duration-300">
              <MdEmail
                className="inline-block mx-auto text-blue-600"
                size={50}
              />
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Email
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                thefreakdevs@gmail.com
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 border dark:border-gray-700 bg-blue-400/10 dark:bg-slate-700/10 rounded-2xl p-8 hover:scale-105 duration-300">
              <MdPhone
                className="inline-block mx-auto text-blue-600"
                size={50}
              />
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Phone
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                +91 8237941681
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:w-1/2">
        <p className="dark:text-white font-medium text-base">Leave a Message</p>
        <p className="dark:text-white text-4xl font-semibold mt-3">Tell Us About<span className="font-normal">{" "}Yourself</span></p>
        <p className="dark:text-gray-300 text-sm mt-3 mb-6">Whether you have questions or you would just like to say hello, contact us.</p>
          <div className="flex justify-start items-center dark:text-white">
            <form
              ref={form}
              className="flex flex-col gap-5"
              onSubmit={sendEmail}
            >
              <input
                className="px-3 py-2 lg:w-[35vw] w-full rounded bg-transparent outline outline-1 outline-indigo-500"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                pattern="[a-zA-Z\s]+"
              />
              <div className="flex gap-x-4">
                <input
                  className="px-3 py-2 lg:w-full w-full rounded bg-transparent outline outline-1 outline-indigo-500"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="px-3 py-2 lg:w-full w-full rounded bg-transparent outline outline-1 outline-indigo-500"
                  type="number"
                  name="user_phone"
                  placeholder="Your Phone"
                  required
                />
              </div>
              <input
                className="px-3 py-2 lg:w-[35vw] w-full rounded bg-transparent outline outline-1 outline-indigo-500"
                type="text"
                name="user_subject"
                placeholder="Your Subject"
                required
              />
              <textarea
                className="px-3 py-2 lg:w-[35vw] w-full resize-none rounded bg-transparent outline outline-1 outline-indigo-500"
                placeholder="Message"
                name="message"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="inline-block text-center px-4 py-2 bg-indigo-600 text-white rounded border-none hover:bg-indigo-700 hover:text-gray-300 duration-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
