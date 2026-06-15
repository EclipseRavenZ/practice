const button = document.getElementById("btn");
button.addEventListener("click", () => {
    window.location.href = "./omikuji.html";
});

const 贈る言葉配列 = [
    "「あなたは一人じゃない！」",
    "「終わりよければすべてよし」",
    "「笑ったもん勝ち！」",
    "「思い立ったが吉日」",
    "「笑う門には福来る」",
    "「七転び八起き」",
    "「明日は明日の風が吹く」",
    "「緊張と怯えは別もの<br>　　緊張はやる気の証拠」",
    "♪君が笑えばこの世界中に<br>もっともっと幸せが広がる",
    "「ありがとう」は全てを凌駕する",
    "「つまずいたらそこでひと休み」",
    "「やってから考えよう」",
];
const 言葉の数 = 贈る言葉配列.length;
const ランダムな数 = Math.floor(Math.random() * 言葉の数);

const 贈る言葉 = document.getElementById("贈る言葉");
贈る言葉.innerHTML = 贈る言葉配列[ランダムな数];

const 名前 = localStorage.getItem("name");
const 贈りたい人 = document.getElementById("贈りたい人");
贈りたい人.innerHTML = `${名前}さんに贈るポジティブな言葉は……`;
