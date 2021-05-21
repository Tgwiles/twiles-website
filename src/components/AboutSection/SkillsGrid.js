import { 
    InfoSquare, 
    SquareText
} from './AboutElements'

var SkillsRow = [];
let SkillsList = [
    "React.js",
    "Javascript", 
    "JQuery", 
    "AJAX", 
    "HTML", 
    "CSS",
    "PHP",
    "C#", 
    ".NET Framework", 
    "Java", 
    "Python", 
    "SQL" 
]

for (var i = 0; i < SkillsList.length; i++){
    SkillsRow.push(createBoxDiv(SkillsList[i], i));
}

function createBoxDiv(item, index){
    return (
        <InfoSquare key={index}>
            <SquareText>
                {item}
            </SquareText>
        </InfoSquare>
    );
}

export default SkillsRow; 