const grade = "";

switch (grade) {
    case 'A':
        console.log("you gate grade A")
        break;
    case 'b':
        console.log("you gate grade b")
        break;

    default:
        console.log("you not gate any grade ")

}
// ====================== 2 ====================
const grade1 = 'A';

switch (grade1) {
    case 'A':
        console.log("you gate grade A")
        break;
    case 'b':
        console.log("you gate grade b")
        break;

    default:
        console.log("you not gate any grade ")

}

// ====================== 3 ====================
const grade3 = 'b';

switch (grade3) {
    case 'A':
        console.log("you gate grade A")
        break;
    case 'b':
        console.log("you gate grade b")
        break;

    default:
        console.log("you not gate any grade ")

}

// =============================  4 =======================
switch (new Date().getDay()) {
    case 1:
        console.log("its monday");
        break;
    case 2:
        console.log("its tue");
        break;
    case 3:
        console.log("its wed");
        break;
    case 4:
        console.log("its thu");
        break;
    case 5:
        console.log("its fri");
        break;
    case 6:
        console.log("its sat");
        break;
    case 7:
        console.log("its sun");
        break;

    default:
        console.log("not valid input");

}