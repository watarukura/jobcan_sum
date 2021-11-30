javascript:(function () {
    if (location.href != "https://ssl.jobcan.jp/m/work/conditions") {
        alert("failed");
        return;
    }
    const schedules = Array.from(document.querySelector(".schedule4").rows);
    const sum = schedules
        .slice(0, -1)
        .map(schedule => schedule.children[5].innerText)
        .filter(time => time.includes("時間"))
        .map(p => parseInt(p.substr(0,2)) *60 + parseInt(p.substr(4,2)) -480)
        .reduce((prev, curr) => prev + curr);
    alert(`${sum}分の差異があります`);
})()
