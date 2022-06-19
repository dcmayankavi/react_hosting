const Header = () => {
  return (
    <nav class='navbar navbar-desctop navbar-white'>
      <div class='position-relative w-100'>
        <a class='navbar-brand' href='#home'>
          Dinesh C.
        </a>
        <div class='container d-block'>
          <a class='phone  my-0 d-none d-md-block' href='tel: +91 9890140227'>
            +91 9890140227
          </a>
          <a
            class='email  my-0 d-none d-md-block'
            href='mailto: dcmayankavi@gmail.com'
          >
            dcmayankavi@gmail.com
          </a>
        </div>
        <button class='toggler'>
          <span class='toggler-icon'></span>
          <span class='toggler-icon'></span>
          <span class='toggler-icon'></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
