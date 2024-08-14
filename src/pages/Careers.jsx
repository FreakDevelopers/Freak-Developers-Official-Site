import React from "react";

function Careers() {
  return (
    <section>
      <h1 className="mt-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Join Our <span className="text-blue-500">Team</span>
      </h1>
      <h2 className="text-red-700 font-medium text-2xl text-center mt-14">
        Currently, there are no open positions available.
      </h2>
      <div className="mx-auto my-12 lg:w-1/2 p-5 md:p-6 bg-indigo-900/10 rounded-lg">
        <h3 className="mb-4 dark:text-white text-xl font-semibold">
          Stay Tuned!
        </h3>
        <p className="text-gray-400 font-medium">
          We don’t have any open positions at the moment, but we’re always on
          the lookout for talented individuals to join our team. Feel free to
          send your resume to our official email{" "}
          <span className="text-blue-500">thefreakdevs@gmail.com</span>, and
          we’ll keep it on file for future opportunities. Check back later, as
          we may post new roles soon.
        </p>
      </div>
    </section>
  );
}

export default Careers;
