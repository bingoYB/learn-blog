// note
import { getChildren } from "./getChildren";

const notePath = "note";

const note = [
  {
    text: "CSS",
    collapsable: true,
    items: getChildren(`${notePath}/css`),
  },
  {
    text: "编程思想",
    collapsable: true,
    items: getChildren(`${notePath}/编程思想`),
  },
  {
    text: "JavaScript",
    collapsable: true,
    items: getChildren(`${notePath}/javascript`),
  },
  {
    text: "HTTP",
    collapsable: true,
    items: getChildren(`${notePath}/HTTP`),
  },
  {
    text: "Node",
    collapsable: true,
    items: getChildren(`${notePath}/Node`),
  },
  {
    text: "React",
    collapsable: true,
    items: getChildren(`${notePath}/React`),
  },
  {
    text: "webpack",
    collapsable: true,
    items: getChildren(`${notePath}/webpack`),
  },
  {
    text: "前端图形学",
    collapsable: true,
    items: getChildren(`${notePath}/graphics`),
  },
  {
    text: "前端工程化",
    collapsable: true,
    items: getChildren(`${notePath}/engineering`),
  },
  {
    text: "NextJs",
    collapsable: true,
    items: getChildren(`${notePath}/NextJs`),
  },
];

const algorithmPath = "algorithm";

const algorithm = [
  {
    text: "每日一题",
    collapsable: true,
    items: getChildren(`${algorithmPath}/every/`),
  },
  {
    text: "基础算法",
    collapsable: true,
    items: getChildren(`${algorithmPath}/basic`),
  },
  {
    text: "数据结构",
    collapsable: true,
    items: getChildren(`${algorithmPath}/struct`),
  },
];

console.log(getChildren(`${notePath}/css`),)

export default {
  "/note/": note,
  "/algorithm/": algorithm,
  // '/open_source/': open_source
};
