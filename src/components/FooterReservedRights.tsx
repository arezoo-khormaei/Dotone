export default function FooterReservedRights() {
  return (
    <div className="lg:grid grid-cols-3 gap-x-4 items-center">
      <div className="hidden col-span-1 lg:flex justify-end items-center">
        <div className="w-full h-[0.8px] bg-black" />
      </div>
      <p className="col-span-1 text-[15px] font-extralight text-center lg:whitespace-nowrap px-4">
        هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است @
      </p>
      <div className="hidden col-span-1 lg:flex justify-start items-center">
        <div className="w-full h-[0.8px] bg-black" />
      </div>
    </div>
  );
}
