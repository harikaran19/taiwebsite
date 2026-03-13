import imgImageTransformativeAiLogo from "../assets/a4ea5abb170cd15f7c3514a0c18d58fa6805a446.png";

function ImageTransformativeAiLogo() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="Image (Transformative AI Logo)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-74.13%] max-w-none size-[247.53%] top-[-73.67%]" src={imgImageTransformativeAiLogo} />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Container">
      <ImageTransformativeAiLogo />
    </div>
  );
}