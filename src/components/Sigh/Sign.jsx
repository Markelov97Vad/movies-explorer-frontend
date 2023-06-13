import './Sign.css'

function Sign({ children }) {
  return ( 
    <main className="sign">
      <section className='sign__wrapper'>
        {children}
      </section>
    </main>
   );
}

export default Sign;