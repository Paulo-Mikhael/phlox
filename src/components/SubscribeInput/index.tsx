import Button from "../Button";

export default function SubscribeInput(){
  return (
    <div className="relative flex bg-gradient-to-r from-[#ECECEC] from-36% to-[#D7D7D7] rounded-full px-4">
      <input 
        type="text" 
        name="subscribe-input" 
        id="subscribe-input"
        placeholder="Enter Your Email"
        className="bg-transparent p-4 outline-none 2xl:w-[80%]" 
      />
      <Button
        padding="px-6 py-3"
        width="30px"
        className="shadow-button absolute top-[3.5px] right-[4px]"
      >
        Subscribe
      </Button>
    </div>
  );
}