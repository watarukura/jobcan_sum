javascript:(function () {
    if (!location.href.startsWith("https://ssl.jobcan.jp/m/work/conditions")) {
        alert("failed");
        return;
    }
    const today = new Date().toLocaleDateString();
    const page_month = document.querySelector("#container > table.data03 > tbody > tr > th").innerText.replace(/[年月]/g, '/');
    const schedules = Array.from(document.querySelector(".schedule4").rows);
    const sum = schedules
        .map(function(schedule) {
           return {
             date: schedule.children[0].innerText.replace(/ .*/, ''),
             state: schedule.children[1].innerText,
             time: schedule.children[5].innerText
           };
         })
        .filter(schedule => schedule.time.includes("時間"))
        .filter(schedule => page_month.concat(schedule.date) != today)
        .map(p => (p.state == "有"||p.state == "特" ? -240 : -480) + parseInt(p.time.substr(0,2)) *60 + parseInt(p.time.substr(4,2)))
        .reduce((prev, curr) => prev + curr);
    alert(`${today} の前日までの勤務時間を計算します\n${sum}分の差異があります`);
})()
