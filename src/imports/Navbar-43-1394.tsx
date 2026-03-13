import imgImageTransformativeAiLogo from "figma:asset/a4ea5abb170cd15f7c3514a0c18d58fa6805a446.png";

function ImageTransformativeAiLogo() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="Image (Transformative AI Logo)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-64.24%] max-w-none size-[228%] top-[-64.36%]" src={imgImageTransformativeAiLogo} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <ImageTransformativeAiLogo />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.55px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.6px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.275px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.6px] whitespace-nowrap">Platform</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.438px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.6px] whitespace-nowrap">Industries</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.6px] whitespace-nowrap">Why Us</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.225px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.6px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[382.425px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#2563eb] h-[40px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_0px_15px_0px_rgba(139,92,246,0.3)] to-[#8b5cf6]" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[24px] py-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Request a Demo</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[158.075px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Link5 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Navigation />
      <Container2 />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Navbar">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.8px] pt-[16.8px] px-[8.8px] relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}