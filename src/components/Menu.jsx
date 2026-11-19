import Logo from '../images/hospital.png';

function Menu() {
  return (
    <div className="Menuheader">
      <div className="logoheader_parent">
        <div className="logoheader_1column">
          <div className="parentlogo">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="logoheader_2column">
          <h1>UWL PTMI</h1>
          <p className="second_header">
            Patient Treatment Management Interface
          </p>
        </div>
      </div>

      {/* <div className="menuButton">
        <p>Records</p>
        <p>Add Treatment</p>
      </div> */}
    </div>
  );
}

export default Menu;
