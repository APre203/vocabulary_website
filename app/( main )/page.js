import Card from "@components/card"
import Counter from "@components/counter"

export default function Home() {
  // some api call
  const vocab = "Some vocabulary for a word";
  const word = "WORD";
  return (
    <div className="">
      <div className="flex justify-center items-center mt-36">
        <Card vocab={vocab} word={word}> WE ARE IN LOGIN (Has to be dynamic) </Card>
        <div className="grid justify-center items-center ml-12 space-y-20">
          <Counter color="green"/>
          <Counter color="red"/>
        </div>
      </div>
    </div>
  )
}
