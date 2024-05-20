import "./index.css";
import Page from "../../components/Page/index";
import ImgComponent from "../../components/ImgComponent/index";

export default function ViewTimeLine() {
  return (
    <Page
      headline="View-timeline"
      description="View-timeline trackar om ett element är synligt i scroll-porten. Så fort den första pixeln i elementet blir synligt för scroll-porten så börjar progress-procenten ticka upp från 0% och når 100% när elementet är helt förbi-scrollat och inte längre syns.
       Alltså betyder 0% och 100% att elementet inte syns i scroll-porten, men från olika håll. 
       Om procent-värdet är mellan 1-99 så betyder det att elementet är synligt i scroll-porten. 
       
       view()-funktionen kan även ta optional argument för att justera gränsen för när ett element anses vara förbiscrollat (och därigenom ha nåt 100% som innebär att animationen nåt sitt slutmål).
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
        imgDescription="Denna bild använder view() utan argument, och bilden kommer därför nå animationens slutpunkt (100%) när bilden är helt ur scrollens synfält."
        animationClassName={["animation-view-timeline"]}
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
        imgDescription='Denna bild använder View-timeline, fast med argument: view(90vh 0%), och bilden kommer därför "anses" ha nåt 100% (förbiscrollad) 90vh "tidigare" .'
        animationClassName={[
          "animation-view-timeline",
          "animation-view-timeline-justified",
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
