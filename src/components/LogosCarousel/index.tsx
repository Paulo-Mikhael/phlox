import Picture from "../Picture";

export default function LogosCarousel() {
  const logos: { name: string, logoUrl: string }[] = [
    {
      name: "GOLDEN",
      logoUrl: "icons/golden-logo.png"
    },
    {
      name: "Sweety Corporation",
      logoUrl: "icons/sweety-logo.png"
    },
    {
      name: "Fastlane Airlines",
      logoUrl: "icons/fastlane-logo.png"
    },
    {
      name: "Mighty Furnitures",
      logoUrl: "icons/furnitures-logo.png"
    },
    {
      name: "JACK ROSTER",
      logoUrl: "icons/jk-logo.png"
    },
  ]
  return (
    <div className="w-full h-[271px] bg-[#EEE] flex items-center gap-20 my-8 justify-center">
      {logos.map((logo, index) => (
        <Picture
          key={index}
          src={logo.logoUrl}
          alt={`Logo da empresa fictícia ${logo.name}`}
          title={`Logo da empresa fictícia ${logo.name}`}
          width="w-[150px]"
        />
      ))}
    </div>
  );
}