const Contact = () => {
  return (
    <div className="text-center justify-center 0">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="border border-black bg-blue-100 h-10">
        <label>Name</label>
        <input type="text" placeholder="Name" className="p-1 m-1 border border-black" />
        <label>Mobile Number</label>
        <input type="text" placeholder="1234567890" className="p-1 m-1 border border-black" />
        <button className="p-1 m-1 rounded-lg border border-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
