import Card from "@components/card"

export default function Home() {
  const vocab = "Vocab";
  const word = "Word";
  return (
    <div className="">
      <div className="grid justify-center items-center mt-36 place-items-center">
        <Card vocab={vocab} word={word}> WE ARE IN VOCABULARY (Has to be dynamic) </Card>
        <button className="text-2xl transition-all duration-500 w-fit h-fit border-4 border-black mt-4 px-4 hover:bg-red-300"> Add Vocabulary Word </button>
      </div>
    </div>
        
  )
}
