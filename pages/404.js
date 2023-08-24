import notFound from "../public/error.png";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-5 ">
        <Image
          src={notFound}
          width={900}
          height={50}
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
      <Link href="/" className="flex justify-center items-center mt-5 mb-5">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
