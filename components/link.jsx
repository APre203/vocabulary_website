import '@styles/globals.css'
const Link = ({children, href}) => {
  return (
    <button className='p-4 transition-all duration-500 hover:bg-slate-600'>
        <a href={href}>{children}</a>
    </button>
    )
}

export default Link