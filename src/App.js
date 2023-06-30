import "./App.css";
import { SiGooglechat } from "react-icons/si";

function App() {
  return (
    <div className="app">
      {/* LEFT_SIDE */}
      <img src="Image/image1.png" className="left_bg" />

      {/* RIGHT_SIDE */}
      <div className="right_side">
        <div className="header_right">
          <SiGooglechat className="chat_icon" />
          <span className=" header_text shop">Shop</span>
          <span className="header_text key">Key</span>
        </div>
        <div className="card">
          <h1>Login</h1>
          <p>Login to access your account</p>

          {/* INPUT BOXES */}
          <div className="input_field">
            <div className="select_container">
              <img src="/Image/india.jpg" alt="flag" className="flag" />
              <select name="Country" required className="select">
                <option value="" disabled selected hidden>
                  +91
                </option>
              </select>
            </div>

            <fieldset className="fieldset">
              <legend>Phone Number</legend> <h4>1234567890</h4>
            </fieldset>
          </div>

          {/* BUTTON */}
          <button className="btn">Next</button>

          {/* LAST LINE */}
          <div className="last_line">
            <p>By proceeding, I agree to Shopkey's</p> <br />
            <div className="anchor">
              <a href="">T&Cs</a> <a href="">Privacy Policy</a>
            </div>
          </div>

          <div className="footer">
            <span>Don't have an account?</span> <a href="">Sign up now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
