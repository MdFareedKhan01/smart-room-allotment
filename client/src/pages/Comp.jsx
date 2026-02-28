import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function calculateMBTI(answers) {
  const EI = answers.slice(0,4).reduce((a,b)=>a+b,0);
  const SN = answers.slice(4,8).reduce((a,b)=>a+b,0);
  const TF = answers.slice(8,12).reduce((a,b)=>a+b,0);
  const JP = answers.slice(12,16).reduce((a,b)=>a+b,0);

  const type =
    (EI >= 12 ? "E" : "I") +
    (SN >= 12 ? "S" : "N") +
    (TF >= 12 ? "T" : "F") +
    (JP >= 12 ? "J" : "P");

  return {
    type,
    scores: { EI, SN, TF, JP }
  };
}

const answersFareed = [4,3,5,3,2,4,4,4,3,2,4,4,5,4,4,4];
const answersFarhan = [4,3,4,2,4,3,4,5,3,3,4,4,4,3,4,4];
const answersRehan = [4,3,2,2,3,3,4,4,3,4,4,4,4,3,4,5];
const answersYusuf= [3,5,3,4,5,4,2,5,5,2,4,3,2,4,4,2];

 export function compatibility(a, b) {
  return (
    Math.abs(a.scores.EI - b.scores.EI) +
    Math.abs(a.scores.SN - b.scores.SN) +
    Math.abs(a.scores.TF - b.scores.TF) +
    Math.abs(a.scores.JP - b.scores.JP)
  );
}

