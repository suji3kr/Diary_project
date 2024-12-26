import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch(targetEmotionId){
        case "1":
            return emotion1;
        case "2":
            return emotion2;
        case "3":
            return emotion3;
        case "4":
            return emotion4;
        case "5":
            return emotion5;
        default:
            return null;
    }
}
export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10){
        month = `0${month}`;
    }
    if(month < 10){
        month = `0${Date}`;
    }
    return `${year}-${month}-${date}`;

};

export const emotionList =[
  {
    id:1,
    name: "Great",
    img: getEmotionImgById(1),
  },
  {
    id:2,
    name: "Good",
    img: getEmotionImgById(2),
  },
  
  {
    id:3,
    name: "So so",
    img: getEmotionImgById(3),
  },
  
  {
    id:4,
    name: "Bad",
    img: getEmotionImgById(4),
  },
  {
    id:5,
    name: "Terrible",
    img: getEmotionImgById(5),
  },
  
];