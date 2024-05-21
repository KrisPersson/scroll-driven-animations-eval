import "./index.css";
import Page from "../../components/Page/index";
import CodeSnippet from "../../components/CodeSnippet/index";

export default function ScrollShadows() {
  return (
    <Page
      headline="Scroll-shadows"
      description="Scroll-shadow kan vara användbart för att indikera att en box är scroll-bar. Här används en 'named timeline', som vi kallar '--scroll-timeline', och som sätts i scroll-containern. Därefter anges '--scroll-timeline' som värde för 'animation-timeline' i de children som ska animeras enligt denna timeline. Detta gör att vi kan bryta oss ur den normala processen där browsern letar efter den högsta scroll-porten och istället väljer den namngivna.
       "
    >
      <div className="scrollable-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quasi
        amet distinctio a officiis at, accusantium, quia tenetur culpa eos nisi
        explicabo magnam. Quasi mollitia porro enim sequi, consectetur
        consequatur possimus aperiam doloremque quo, aut illo repellat quisquam
        eaque laboriosam dolorem deserunt beatae laudantium. Aliquam eos ratione
        eligendi nam, iusto deleniti delectus facere unde blanditiis, fuga
        commodi voluptates magnam praesentium dolorum deserunt, nemo ullam totam
        voluptatum dolorem. Accusamus nisi ea aperiam pariatur eius sed est vel
        unde, quaerat nesciunt facere deleniti vitae ipsum, repellendus quo
        voluptas vero. Nostrum, vitae. Obcaecati a aliquid consequuntur labore
        reiciendis numquam voluptatibus aspernatur, quo est?
      </div>
      <CodeSnippet
        code="
      .scrollable-box {
        overflow-y: auto;
        scroll-timeline: --scroll-timeline block;
      }
      "
      />
      <CodeSnippet
        code="
      .scrollable-box::before, .scrollable-box::after {
        animation: reveal-shadow linear both;
        animation-timeline: --scroll-timeline;
      }
      "
      />
      <CodeSnippet
        code="
        .scrollable-box::before {
          top: 0;
          background: radial-gradient(ellipse at top, rgba(66, 66, 66, 0.99), rgba(229, 229, 229, 0.3));
          animation-range: 1em 2em;
      }
      "
      />
      <CodeSnippet
        code="
        .scrollable-box::after {
          bottom: 0;
          background: radial-gradient(ellipse at bottom, rgba(66, 66, 66, 0.99), rgba(229, 229, 229, 0.3));
          animation-direction: reverse;
          animation-range: calc(100% - 2em) calc(100% - 1em);
        }
      "
      />
    </Page>
  );
}
