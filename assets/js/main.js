import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Trabalhei como instrutor conteudista em frontend na
  Digital House, o trabalho consistia em criar conteúdos para as
  aulas de especialização frontend. Alguns temas dos conteúdos
  realizados foram: React, Redux, TypeScript, Testes,
  GraphQL, Next.js, MUI, React Hook Form e styled-components.`,
  "Professor conteudista em Frontend",
  "Digital House",
  "Nov 2021 - Nov 2022 (1 ano)"
);

hoverChangeExperience(
  ".zuplae",
  `Trabalhei como Social Media e Designer na Zuplae que é um escola
  de programação, onde teve como foco as criações de conteúdos sobre
  programação para a comunidade dev através das redes sociais.`,
  "Social Media e UI Designer",
  "Zuplae",
  "Jan 2022 - Abril 2022 (4 meses)"
);

hoverChangeExperience(
  ".codigofontetv",
  `Trabalhei como Social Media e Designer no Código Fonte TV, 
  onde teve como foco as criações de conteúdos sobre programação 
  para a comunidade dev através das redes sociais.`,
  "Social Media e Designer",
  "Código Fonte TV",
  "Jun 2021 - Jan 2022 (8 meses)"
);

hoverChangeExperience(
  ".contweb",
  `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
  Onde pela primeira vez tive experiência com o React. Além do
  desenvolvimento frontend criei os designs da nova plataforma da empresa.`,
  "Developer frontend e UI Designer",
  "ContWeb",
  "Set 2021 - Nov 2021 (3 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML, sayfanın hangi bilgileri görüntüleyeceğini tanımlamak için öğeleri işaretlediğimiz bir biçimlendirme dilidir."
);
hoverChangeDescription(
  ".css",
  "CSS, sayfaları şekillendirmek amacıyla oluşturulmuş 'katmanlardan' oluşan bir stil sayfası dilidir."
);
hoverChangeDescription(
  ".js",
  "JavaScript, web sayfalarına dinamik öğeler uygulamanıza olanak tanıyan bir programlama dilidir."
);
hoverChangeDescription(
  ".sass",
  "Sass, yerel olarak mevcut olmayan bazı özellikleri ekleyen bir CSS ön işlemcisidir."
);
hoverChangeDescription(
  ".react",
  "React, birleşik bir şekilde kullanıcı arayüzleri oluşturmaya odaklanan bir JavaScript kitaplığıdır."
);
hoverChangeDescription(
  ".next",
  "Next.js, sunucu tarafı oluşturma ve statik React tabanlı web siteleri oluşturma gibi işlevlere olanak tanıyan bir web çerçevesidir."
);
hoverChangeDescription(
  ".styled",
  "styled-components CSS-in-JS konseptini kullanan yani Javascript içerisinde CSS kodları yazmamızı sağlayan bir kütüphanedir."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS, sayfaların şekillendirilmesi amacıyla bize yardımcı sınıflar sağlayan bir CSS çerçevesidir."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript, dili statik hale getirmenin yanı sıra, dilde yerel olarak bulunmayan özellikleri içeren bir JavaScript üst kümesidir."
);
hoverChangeDescription(
  ".radix",
  "Radix, React uygulamaları oluşturmak için erişilebilir, stilsiz bileşenler sağlayan bir kütüphanedir."
);
hoverChangeDescription(
  ".cypress",
  "Cypress, şu anda JavaScript dilini kullanan, uçtan uca test otomasyonuna yönelik bir çerçevedir."
);
hoverChangeDescription(
  ".storybook",
  "Storybook, uygulama bileşenlerini belgelemeyi ve test etmeyi amaçlayan bir araçtır."
);
