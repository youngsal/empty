// import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="flex flex-wrap space-x-4 text-center w-25 h-80"> */}
        {/* <h1 className="p-5 text-xs font-bold text-center text-white uppercase bg-pink-600 border-8 border-red-700 sm:text-base md:text-9xl lg:text-10xl xl:text-5xl"> */}
        {/* <h1 className="w-1/5 p-5 text-3xl font-bold text-center text-white uppercase bg-pink-600">
          Hello world!
        </h1> */}
        {/* <h1 className="p-5 text-3xl font-bold text-center underline bg-blue-300 grow text-vuejs-300">
          Hello world!
        </h1>
        <h1 className="p-5 text-3xl font-bold text-center underline bg-green-300 grow text-vuejs-300">
          Hello world!
        </h1>
        <h1 className="p-5 text-3xl font-bold text-center underline bg-yellow-300 grow text-vuejs-300">
          Hello world!
        </h1>
        <h1 className="p-5 text-3xl font-bold text-center underline bg-pink-700 grow text-yellow-50">
          Hello world!
        </h1>
        <h1 className="p-5 text-3xl font-bold text-center text-white underline bg-black grow">
          Hello world!
        </h1>
        <h1 className="p-5 text-3xl font-bold text-center text-blue-100 underline grow bg-lime-700">
          Hello world!
        </h1>
        <h1 className="p-5 text-3xl font-bold text-center underline bg-orange-300 grow text-vuejs-300">
          Hello world!
        </h1> */}
      {/* </div> */}
      
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 text-center text-white">
        <div className="col-span-2 p-6 bg-blue-400 rounded-lg">01</div>
        <div className="col-span-2 p-6 bg-blue-400 rounded-lg">02</div>
        <div className="p-6 bg-blue-400 rounded-lg">03</div>
        <div className="p-6 bg-blue-400 rounded-lg">04</div>
        <div className="p-6 bg-blue-400 rounded-lg">05</div>
        <div className="col-span-2 p-6 bg-blue-400 rounded-lg">06</div>
        <div className="p-6 bg-blue-400 rounded-lg">07</div>
        <div className="p-6 bg-blue-400 rounded-lg">08</div>
        <div className="p-6 bg-blue-400 rounded-lg">09</div>
        <div className="col-span-2 p-6 bg-blue-400 rounded-lg">10</div>
        <div className="p-6 bg-blue-400 rounded-lg">11</div>
        <div className="p-6 bg-blue-400 rounded-lg">12</div>
      </div>
    </div>
  )
}