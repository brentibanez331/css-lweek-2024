export default function Game() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
                <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg bg-opacity 20 p-8 border border-neutral-700 ease-in-out duration-500">
                    <div className="text-center space-y-8 flex flex-col">
                        {/* <p>
                           To advance, you need to finish this game 
                        </p> */}
                        <p >
                            What is the equivalent of this Binary in the Alphabet?
                        </p>
                        <p className="text-7xl font-bold">
                            1000001
                        </p>
                        <div className="flex flex-col space-y-3">
                            <input maxLength={1} className="bg-transparent border border-neutral-500 rounded-lg text-center py-3 font-bold" />

                            <button className="border border-neutral-200 rounded-lg py-3 bg-white text-black">CONFIRM</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="absolute bottom-0 ">Hint</div>
        </div>
    )
}