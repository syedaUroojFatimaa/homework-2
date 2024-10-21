export default function Home() {
  return (
    <div>
      <nav className=" flex w-full bg-white h-32 ">
        <div className="bg-purple-700 h-10 w-96">logo</div>
        <div className=" flex w-3/5 justify-end items-center">
          <div className="bg-red-700 h-10 w-44">logo</div>
          <div className="bg-purple-300 h-10 w-52">logo</div>
        </div>
      </nav>


      <div className="flex flex-wrap justify-center m-4 p-4 gap-4">
        <div className="flex w-full justify-between gap-4">
        <div className="bg-purple-400 h-96 w-1/3 ">card-1</div>
      <div className=" bg-orange-400 h-96 w-1/3 "> card-2</div>
      <div className=" bg-lime-400 h-96 w-1/3"> card-3</div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-4 mt-4">
        <div className="bg-rose-300 h-80 w-1/2">card-4</div>
        <div className="bg-teal-300 h-80 w-1/2">card-5</div>
      </div>
      <br/>
      <br/>
      </div>
  );
}
