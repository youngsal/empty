// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" flex flex-row w-full min-h-screen space-x-4">
        {/* <h1 className="text-xs sm:text-base md:text-9xl lg:text-10xl xl:text-5xl text-white p-5 text-center font-bold border-8 border-red-700 uppercase bg-pink-600"> */}
        {/* <h1 className="text-3xl w-1/5 text-white p-5 text-center font-bold uppercase bg-pink-600">
          Hello world!
        </h1> */}
        <h1 className="text-3xl w-4/5 text-center font-bold underline p-5 text-vuejs-300 bg-blue-300">
          Hello world!
        </h1>
        <h1 className="text-3xl w-4/5 text-center font-bold underline p-5 text-vuejs-300 bg-green-300">
          Hello world!
        </h1>
        <h1 className="text-3xl w-4/5 text-center font-bold underline p-5 text-vuejs-300 bg-yellow-300">
          Hello world!
        </h1>
        {/* <p className="font-bolds">
          This is a sentence with a lots of words init and i also want to truncate pneumonoultramicroscopicsilicovolcanoconiosis, it without it wrapping togther just let it automatically hide it self
        </p>
        <p className="font-bolds">
          This is a sentence with a lots of words init and i also want to truncate pneumonoultramicroscopicsilicovolcanoconiosis, it without it wrapping togther just let it automatically hide it self
        </p> */}
      </div>
      
      <div className="flex my-10 space-x-5 text-center items-center">
        <div className="flex-none bg-purple-700 w-14 h-14">1</div>
        <div className="grow bg-purple-700 h-14">2</div>
        <div className="flex-none bg-purple-700 w-14 h-14">3</div>
      </div>
    </div>
  )
}