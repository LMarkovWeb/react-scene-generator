import React from "react";

const Footer = () => {
  return (
    <div>
      <script src="https://yastatic.net/share2/share.js"></script>
      <div
        class="ya-share2"
        data-curtain
        data-size="l"
        data-shape="round"
        data-color-scheme="blackwhite"
        data-limit="4"
        data-services="vkontakte,facebook,telegram,whatsapp"
      ></div>
      <div id="cr">
        <div>
          Создано на основе макета:
          <a
            title="Ссылка на макет на сайте dribbble.com"
            href="https://dribbble.com/shots/6664459--Freebie-Stubborn-Illustrations-Generator"
            target="_blank"
            rel="noreferrer"
          >
            [Freebie] Stubborn Illustrations Generator
          </a>
        </div>
        <div>
          GitHub:
          <a
            href="https://github.com/LMarkovWeb/react-scene-generator"
            target="_blank"
            rel="noreferrer"
          >
            react-scene-generator
          </a>
        </div>
        <div>
          Сайт:
          <a
            href="https://lmarkovweb.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            lmarkovweb.github.io
          </a>
        </div>
        <div>2021</div>
      </div>
    </div>
  );
};

export { Footer };
