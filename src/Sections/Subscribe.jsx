import Button from "../Components/Button";

const Subscribe = () => {
  //max-lg:flex-col : means it is a col for all devices smaller than lg
  return (
    <section
      className="max-container flex justify-between 
    items-center max-lg:flex-col gap-10
    "
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px]  font-palanquin lg:max-w-md font-bold">
        Sign Up for <span className="text-strong-green">Updates </span>& Newletter
      </h3>
      <div
        className="lg:max-w-[40%] w-full flex 
      items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full
      "
      >
        <input type="text" placeholder="subscribe@egshoes.com" className="input" />
          <Button label="Sign Up"/>

      </div>
    </section>
  );
};

export default Subscribe;
