import axios from "axios";
import { JSDOM } from "jsdom";
import { pinyin } from "pinyin";
import { writeFile } from "fs/promises";

const AnimalCrossingApi = {
  fish: "https://wiki.biligame.com/dongsen/%E5%8D%9A%E7%89%A9%E9%A6%86%E5%9B%BE%E9%89%B4",
  insect: "https://wiki.biligame.com/dongsen/%E8%99%AB%E5%9B%BE%E9%89%B4",
  halobios:
    "https://wiki.biligame.com/dongsen/%E6%B5%B7%E6%B4%8B%E7%94%9F%E7%89%A9%E5%9B%BE%E9%89%B4",
};
const getAnimalCrossingData = async (type) => {
  try {
    const HTML = (await axios.get(AnimalCrossingApi[type])).data;
    const { document } = new JSDOM(HTML).window;
    const listHTML = document.querySelectorAll("#CardSelectTr tbody tr");
    const datas = Array.from(listHTML)
      .map((item) => {
        const colData = item.querySelectorAll("td");
        if (!colData[0]) return null;
        const name = colData[0].querySelectorAll("a")[1].innerHTML;
        return {
          image: colData[0].querySelector("a img").src,
          name: name,
          pinyin: pinyin(name, { style: "NORMAL" }).flat().join(""),
          price: colData[colData.length - 1].innerHTML.replace("\n", ""),
        };
      })
      .filter((item) => item !== null);
    await writeFile("./result.js", JSON.stringify(datas));
    console.log("Success getAnimalCrossingData.");
  } catch (error) {
    console.log("Error getAnimalCrossingData", error);
  }
};

getAnimalCrossingData("halobios");
