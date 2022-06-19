import './App.css';
import Header from './componants/Header';
import masthead from './img/bg/masthead.jpg';

function App() {
  const styleSection1 = {
    backgroundImage: `url(${masthead})`,
    zIndex: 8,
    transform: 'translate3d(0px, 0px, 0px);',
  };
  return (
    <div className='App'>
      <Header />
      <div id='pagepiling' style={{ overflow: 'hidden', touchAction: 'none' }}>
        <section
          id='home'
          className='navbar-is-white text-white dc-scrollable d-flex align-items-center section position-absolute dc-section dc-easing active'
          role='main'
          data-anchor='home'
          style={styleSection1}
        >
          <div className='intro animate'>
            <div className='scroll-wrap'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 col-xl-5'>
                    <div className='mb-2'>I'm Software Engineer</div>
                    <h1 className='text-white hero_heading'>
                      <span className='text-primary text-typed a-typed a-typed-about'>
                        Hello,
                      </span>{' '}
                      It's Dinesh Chouhan
                    </h1>
                    <div className='line active'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
