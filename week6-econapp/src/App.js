import "./styles.css";
import "./postcardStyle.css";
import stampBackground from "./vector.svg";
import signShape from "./vector2.svg";
import footerImage from "./tree.svg";


export default function App() {
  return (
    <div class="postcard-short">
      <div class="cardInfo">
        <div class="top">
          <div class="stamp">
            <div class="stamp-backgraund">
              <img src={stampBackground} />
            </div>
            <div class="stamp-image"></div>
            <div class="sign-info">
              <div class="sign-shape">
                <img src={signShape} />
              </div>
              <div class="sign-text">
                <div class="sign-grade">二</div>
                <div class="sign-major">經濟</div>
              </div>
            </div>
          </div>
          <div class="top-info">
            <div class="recipient-name">To: 收信者</div>
            <div class="date">2023.04.01</div>
          </div>
        </div>
        <div class="content">
          <ContentText />
        </div>
      </div>
      <div class="footer">
      </div>
    </div>
  );
}

function ContentText() {
  return (
    <div class="content-text">Congratulations on graduating!</div>
  )
}

// export default function App() {
//   return (
//     <div className="card-info">
//   <BusinessText/>
//   <div className="business-picture">
//     <div className="business-image-holder">
//       <div className="business-image" />
//     </div>
//   </div>
// </div>

//   );
// }

// function BusinessText() {
//   return (
//   <div className="business-text">
//     <div className="business-description">
//       <div className="business-name">Fiber House</div>
//       <div className="business-hashtag">
//         <div className="business-hashtag-holder" style={{height: 8}}>
//           <div className="hashtag1">#lantern1</div>
//           <div className="hashtag2">#lantern2</div>
//         </div>
//         <div className="Frame2" style={{height: 8}}>
//           <div className="hashtag3">#lantern3</div>
//           <div className="hashtag4">#lantern4</div>
//         </div>
//       </div>
//       <div className="business-description-text">
//         A sensational experience of the color of mountains and the
//         expression of ocean.
//       </div>
//     </div>
//     <div className="business-category">
//       <div className="category-type">
//         <div className="type-text">Art &amp; Humanity</div>
//       </div>
//       <div className="category-image-holder">
//         <div className="category-image">
//           <div className="example-image" />
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }