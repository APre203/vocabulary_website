import '@styles/globals.css'
import Link from '@components/link'
const Navbar = ({id}) => {
  if (id === "vocab"){
    return ( 
      <div className='text-4xl flex justify-between space-x-20 bg-slate-400 p-1 pr-4'>
          <Link href={"/"}>Back</Link> {/* These will work with random vocabulary */}
          <Link href={"/play"}>Play</Link>        
      </div>
    )  
  }
  else{
  return ( 
    <div className='text-4xl flex justify-end space-x-20 bg-slate-400 p-1 pr-4'>
        <Link href={"/vocabulary"}>My Vocabulary</Link> {/* These wont work until a person logged in */}
        <Link href={"/play"}>Play</Link> {/* These will work with random vocabulary */}
        <Link href={"/"}>Login</Link>        
    </div>
  )
  }
}

export default Navbar