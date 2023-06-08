import './Sign.css'

function Sign({ children }) {
  return ( 
    <main className="sign">
      <div className='sign__wrapper'>
        {children}
      </div>
    </main>
   );
}

export default Sign;