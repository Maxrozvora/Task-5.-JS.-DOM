const data = [
    {
        "from": "Львів",
        "to": "Дніпро",
        "number": "940Z",
        "day": "Субота",
        "departure": {
            "left": 1558800177779,
            "day": "Субота",
            "time": "19 : 02"
        },
        "arrive": {
            "day": "Субота",
            "time": "20 : 53"
        },
        "cost": "74.54"
    },
    {
        "from": "Дніпро",
        "to": "Львів",
        "number": "317M",
        "day": "Понеділок",
        "departure": {
            "left": 1558939209609,
            "day": "Понеділок",
            "time": "09 : 40"
        },
        "arrive": {
            "day": "Понеділок",
            "time": "11 : 36"
        },
        "cost": "78.16"
    },
    {
        "from": "Київ",
        "to": "Харків",
        "number": "818Z",
        "day": "Середа",
        "departure": {
            "left": 1559133292762,
            "day": "Середа",
            "time": "15 : 34"
        },
        "arrive": {
            "day": "Середа",
            "time": "17 : 46"
        },
        "cost": "88.46"
    },
    {
        "from": "Київ",
        "to": "Львів",
        "number": "560R",
        "day": "Субота",
        "departure": {
            "left": 1558814775271,
            "day": "Субота",
            "time": "23 : 06"
        },
        "arrive": {
            "day": "Неділя",
            "time": "01 : 11"
        },
        "cost": "83.86"
    },
    {
        "from": "Харків",
        "to": "Київ",
        "number": "133Z",
        "day": "Середа",
        "departure": {
            "left": 1558554134460,
            "day": "Сьгодні",
            "time": "22 : 42"
        },
        "arrive": {
            "day": "Завтра",
            "time": "00 : 23"
        },
        "cost": "68.22"
    },
    {
        "from": "Львів",
        "to": "Харків",
        "number": "267X",
        "day": "Четвер",
        "departure": {
            "left": 1558607116149,
            "day": "Завтра",
            "time": "13 : 25"
        },
        "arrive": {
            "day": "Завтра",
            "time": "16 : 13"
        },
        "cost": "112.85"
    },
    {
        "from": "Одеса",
        "to": "Харків",
        "number": "732I",
        "day": "Середа",
        "departure": {
            "left": 1559122026391,
            "day": "Середа",
            "time": "12 : 27"
        },
        "arrive": {
            "day": "Середа",
            "time": "15 : 40"
        },
        "cost": "129.25"
    },
    {
        "from": "Львів",
        "to": "Одеса",
        "number": "176A",
        "day": "Вівторок",
        "departure": {
            "left": 1559022664732,
            "day": "Вівторок",
            "time": "08 : 51"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "12 : 23"
        },
        "cost": "142.48"
    },
    {
        "from": "Харків",
        "to": "Одеса",
        "number": "546P",
        "day": "Четвер",
        "departure": {
            "left": 1558639603320,
            "day": "Завтра",
            "time": "22 : 26"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "02 : 07"
        },
        "cost": "148.29"
    },
    {
        "from": "Одеса",
        "to": "Дніпро",
        "number": "156V",
        "day": "Субота",
        "departure": {
            "left": 1558794173835,
            "day": "Субота",
            "time": "17 : 22"
        },
        "arrive": {
            "day": "Субота",
            "time": "20 : 25"
        },
        "cost": "122.72"
    },
    {
        "from": "Дніпро",
        "to": "Одеса",
        "number": "710W",
        "day": "П'ятниця",
        "departure": {
            "left": 1558712925129,
            "day": "П'ятниця",
            "time": "18 : 48"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "21 : 04"
        },
        "cost": "91.48"
    },
    {
        "from": "Київ",
        "to": "Дніпро",
        "number": "626T",
        "day": "Вівторок",
        "departure": {
            "left": 1558997200260,
            "day": "Вівторок",
            "time": "01 : 46"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "05 : 12"
        },
        "cost": "138.12"
    },
    {
        "from": "Дніпро",
        "to": "Харків",
        "number": "573O",
        "day": "П'ятниця",
        "departure": {
            "left": 1558696557724,
            "day": "П'ятниця",
            "time": "14 : 15"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "19 : 08"
        },
        "cost": "196.35"
    },
    {
        "from": "Одеса",
        "to": "Київ",
        "number": "982U",
        "day": "Вівторок",
        "departure": {
            "left": 1559056625992,
            "day": "Вівторок",
            "time": "18 : 17"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "21 : 57"
        },
        "cost": "147.26"
    },
    {
        "from": "Харків",
        "to": "Львів",
        "number": "821A",
        "day": "Субота",
        "departure": {
            "left": 1558800314270,
            "day": "Субота",
            "time": "19 : 05"
        },
        "arrive": {
            "day": "Субота",
            "time": "21 : 58"
        },
        "cost": "116.11"
    },
    {
        "from": "Київ",
        "to": "Одеса",
        "number": "379K",
        "day": "Вівторок",
        "departure": {
            "left": 1559019510480,
            "day": "Вівторок",
            "time": "07 : 58"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "10 : 33"
        },
        "cost": "104.10"
    },
    {
        "from": "Львів",
        "to": "Київ",
        "number": "800E",
        "day": "Вівторок",
        "departure": {
            "left": 1558998433617,
            "day": "Вівторок",
            "time": "02 : 07"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "04 : 37"
        },
        "cost": "100.63"
    },
    {
        "from": "Одеса",
        "to": "Львів",
        "number": "692R",
        "day": "П'ятниця",
        "departure": {
            "left": 1558655816090,
            "day": "П'ятниця",
            "time": "02 : 56"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "06 : 58"
        },
        "cost": "162.63"
    },
    {
        "from": "Дніпро",
        "to": "Київ",
        "number": "976K",
        "day": "Вівторок",
        "departure": {
            "left": 1559001995244,
            "day": "Вівторок",
            "time": "03 : 06"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "06 : 05"
        },
        "cost": "120.41"
    },
    {
        "from": "Харків",
        "to": "Дніпро",
        "number": "301G",
        "day": "Четвер",
        "departure": {
            "left": 1558597673187,
            "day": "Завтра",
            "time": "10 : 47"
        },
        "arrive": {
            "day": "Завтра",
            "time": "15 : 05"
        },
        "cost": "173.12"
    }
]
function renderTable(data) {
    let tr = '';
    for (let item of data) {
        const itemRow = `<tr>
      <td>${item.number}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td>${item.day}</td>
      <td class="timer" data-timer="${item.departure.left}">${item.departure.left}</td>
      <td>
        <div>${item.departure.day}</div>
        <div>${item.departure.time}</div>
        </td>
      <td>
        <div>${item.arrive.day}</div>
        <div>${item.arrive.time}</div>
        </td>
      <td>${item.cost}</td>
    </tr>`

        tr = tr + itemRow;

    }

    document.querySelector('tbody').innerHTML = tr
}

renderTable(data)

sortBy