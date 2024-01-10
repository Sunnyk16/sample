import ReactDOM from "react-dom/client";
import "./index.css";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.jpeg";
import Img3 from "./images/img3.jpg";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Cards(props) {
  console.log(props);
  const name = props.name;
  const mobile = props.mobile;
  const img = props.img;
  return (
    <div className="container">
      <div className="cards">
        <div className="img">
          <img src={img} />
        </div>
        <p>Name:{name}</p>
        <p>mobile:{mobile}</p>
      </div>
    </div>
  );
}

root.render(
  <div className="boxes">
    <Cards name="sunny" mobile="7896541234" img={Img1} />
    <Cards name="om" mobile="7896546634" img={Img2} />
    <Cards name="sadanand" mobile="783241234" img={Img3} />
    <Cards name="vaishanvi" mobile="446541654" img={Img2}/>
  </div>
);
