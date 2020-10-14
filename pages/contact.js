const Contact = () => {
  return (
    <div>
      <div className="text-5xl mb-4">CONTACT US</div>
      <p className="mb-12">
        Shoot us any questions you like. Feel free to recommend content you want
        on the site. We will get back to you as quick as possible and take all
        requests in consideration.
      </p>
      <div className="text-black">
        <form>
          <div className="mb-4 flex justify-between">
            <input
              placeholder="*First Name"
              type="text"
              className="focus:outline-none focus:shadow-outline focus:border-blue-400 bg-gray-200 focus:bg-white w-almost50"
            />
            <input
              placeholder="*Last Name"
              type="text"
              className="focus:outline-none focus:shadow-outline focus:border-blue-400 bg-gray-200 focus:bg-white w-almost50"
            />
          </div>

          <input
            placeholder="*Email"
            type="text"
            className="focus:outline-none focus:shadow-outline focus:border-blue-400 bg-gray-200 focus:bg-white mb-4 w-full"
          />

          <div>
            <textarea
              placeholder="Additional Information"
              className="focus:outline-none focus:shadow-outline focus:border-blue-400 bg-gray-200 focus:bg-white w-full h-24 mb-4"
            />
          </div>
          <button className="border-2 border-transparent bg-white w-full pt-2 pb-2 hover:border-blue-400">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
