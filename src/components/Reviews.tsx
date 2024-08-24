import Image from "next/image";

const Reviews = async () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <Image src="" alt="" width={32} height={32} className="rounded-full" />
        <span>Name</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
        <Image src="/star.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <p> review heading</p>
      <p>
        review body Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <div className="">
        <Image src="" alt="" width={100} height={50} className="object-cover" />
      </div>
    </div>
  );
};

export default Reviews;
