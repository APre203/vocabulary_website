import Card from "@components/card"
import Counter from "@components/counter"
export default function Home() {
  const vocab = "Vocab";
  const word = "Word";
  return (
    <div className="">
      <div className="flex justify-center items-center mt-36">
        <Card vocab={vocab} word={word}> WE ARE IN PLAY (Has to be dynamic) </Card>
        <div className="grid justify-center items-center ml-12 space-y-20">
          <Counter color="green"/>
          <Counter color="red"/>
        </div>
      </div>
    </div>
  )
}
