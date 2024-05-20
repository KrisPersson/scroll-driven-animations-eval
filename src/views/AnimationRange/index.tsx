import "./index.css";
import Page from "../../components/Page/index";
import ImgComponent from "../../components/ImgComponent/index";
import { Link } from "react-router-dom";

export default function AnimationRange() {
  return (
    <Page
      headline="Animation-range"
      description="Med animation-range: 'normal', så anges att animationen börjar vid 0% och slutar vid 100%. 
    Animation-range är shorthand för 'animation-range-start' och 'animation-range-end' och med 'normal' (default) som värde, så har de i praktiken värdena '0%' och '100%'.
    Dessa värden kan justeras för att lättare ange 'var och när' ett element ska animeras. Notera att dessa inte behöver vara i % utan funkar även med 'px', 'vh', 'rem' etc.
    
    "
    >
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
      <ImgComponent
        imgSrc="01"
        imgDescription="Denna bild använder view() utan argument, och har animation-range: 'normal'. Den kommer att nå sitt 100%-läge först när den är helt ur scroll-portens view."
        animationClassName={["animation-animation-range"]}
      />

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
      <ImgComponent
        imgSrc="02"
        imgDescription="Denna bild använder view() utan argument, och har animation-range: '300px 50vh'. Bilden anses därför nå 1% i scroll-portens view först 300px EFTER att elementet nåt scroll-portens view. Bilden anses därtill ha nåt 100% efter 50vh."
        animationClassName={[
          "animation-animation-range",
          "animation-animation-range-justified",
        ]}
      />

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
      <ImgComponent
        imgSrc="03"
        imgDescription="'Animation-range: normal' är också detsamma som 'animation-range: cover 0% cover 100%', eller enklare, 'animation-range: cover'. På denna bild är animation-range: cover 0% cover 50%. Bilden anses därför vara 'färdig-scrollad' när den har nått 50% genom scroll-porten. Förutom 'cover' så finns även 'contain', 'entry', 'entry-crossing', samt 'exit-crossing'."
        animationClassName={[
          "animation-animation-range",
          "animation-animation-range-justified-second",
        ]}
      />
      <a
        style={{ background: "green" }}
        className="link-class"
        href="https://scroll-driven-animations.style/tools/view-timeline/ranges/#range-start-name=cover&range-start-percentage=0&range-end-name=cover&range-end-percentage=100&view-timeline-axis=block&view-timeline-inset=0&subject-size=smaller&subject-animation=reveal&interactivity=clicktodrag&show-areas=yes&show-fromto=yes&show-labels=yes"
        target="_blank"
      >
        Visualizer för olika animation-ranges
      </a>
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
      <ImgComponent
        imgSrc="04"
        imgDescription="animation: animate-in linear forwards,
        animate-out linear forwards;
        animation-timeline: view();
        animation-range: entry, exit;"
        animationClassName={["animation-animation-range-start-end"]}
      />
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
    </Page>
  );
}
