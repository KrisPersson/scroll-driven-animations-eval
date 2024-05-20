import Page from "../../components/Page/index";
import "./index.css";

export default function ScrollTimeLine() {
  return (
    <Page
      headline="Scroll-timeline"
      description="Scroll-timeline låter scrollens position styra animationens tidslinje.
    När scrollen står högst upp är värdet 0%, när scrollen är längst ner är
    värdet 100%. Scrolla ner/upp för att demonstrera."
    >
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>
      <div className="img-wrapper">
        <img className="img-class" src="/01.jpg" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum
        doloremque placeat ratione, pariatur nobis optio illum? Totam vel
        aliquam esse voluptatibus! Officiis, ea voluptas?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum
        doloremque placeat ratione, pariatur nobis optio illum? Totam vel
        aliquam esse voluptatibus! Officiis, ea voluptas?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum
        doloremque placeat ratione, pariatur nobis optio illum? Totam vel
        aliquam esse voluptatibus! Officiis, ea voluptas?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum
        doloremque placeat ratione, pariatur nobis optio illum? Totam vel
        aliquam esse voluptatibus! Officiis, ea voluptas?
      </p>
      <div className="img-wrapper">
        <img className="img-class" src="/02.jpg" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum
        doloremque placeat ratione, pariatur nobis optio illum? Totam vel
        aliquam esse voluptatibus! Officiis, ea voluptas?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum harum
        doloremque placeat ratione, pariatur nobis optio illum? Totam vel
        aliquam esse voluptatibus! Officiis, ea voluptas?
      </p>
    </Page>
  );
}
