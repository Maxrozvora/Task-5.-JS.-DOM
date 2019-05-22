const data = [
    {
        "from": "Одеса",
        "to": "Харків",
        "number": "406X",
        "day": "Неділя",
        "departure": {
            "left": 1558834892028,
            "day": "Неділя",
            "time": "04 : 41"
        },
        "arrive": {
            "day": "Неділя",
            "time": "08 : 42"
        },
        "cost": "161.93"
    },
    {
        "from": "Київ",
        "to": "Львів",
        "number": "725K",
        "day": "Четвер",
        "departure": {
            "left": 1558574059826,
            "day": "Четвер",
            "time": "04 : 14"
        },
        "arrive": {
            "day": "Четвер",
            "time": "06 : 41"
        },
        "cost": "98.65"
    },
    {
        "from": "Харків",
        "to": "Київ",
        "number": "413B",
        "day": "П'ятниця",
        "departure": {
            "left": 1558667154778,
            "day": "П'ятниця",
            "time": "06 : 05"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "08 : 14"
        },
        "cost": "86.56"
    },
    {
        "from": "Харків",
        "to": "Дніпро",
        "number": "144R",
        "day": "Субота",
        "departure": {
            "left": 1558733529476,
            "day": "Субота",
            "time": "00 : 32"
        },
        "arrive": {
            "day": "Субота",
            "time": "05 : 08"
        },
        "cost": "185.06"
    },
    {
        "from": "Дніпро",
        "to": "Київ",
        "number": "698G",
        "day": "Четвер",
        "departure": {
            "left": 1558628017688,
            "day": "Четвер",
            "time": "19 : 13"
        },
        "arrive": {
            "day": "Четвер",
            "time": "23 : 01"
        },
        "cost": "153.13"
    },
    {
        "from": "Львів",
        "to": "Харків",
        "number": "611S",
        "day": "Четвер",
        "departure": {
            "left": 1558640776625,
            "day": "Четвер",
            "time": "22 : 46"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "02 : 31"
        },
        "cost": "150.94"
    },
    {
        "from": "Львів",
        "to": "Одеса",
        "number": "708W",
        "day": "Четвер",
        "departure": {
            "left": 1558596470469,
            "day": "Четвер",
            "time": "10 : 27"
        },
        "arrive": {
            "day": "Четвер",
            "time": "14 : 18"
        },
        "cost": "154.81"
    },
    {
        "from": "Львів",
        "to": "Дніпро",
        "number": "750N",
        "day": "Вівторок",
        "departure": {
            "left": 1559034797229,
            "day": "Вівторок",
            "time": "12 : 13"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "14 : 33"
        },
        "cost": "93.61"
    },
    {
        "from": "Одеса",
        "to": "Дніпро",
        "number": "350L",
        "day": "Субота",
        "departure": {
            "left": 1558741878122,
            "day": "Субота",
            "time": "02 : 51"
        },
        "arrive": {
            "day": "Субота",
            "time": "05 : 34"
        },
        "cost": "109.38"
    },
    {
        "from": "Одеса",
        "to": "Київ",
        "number": "236Z",
        "day": "Середа",
        "departure": {
            "left": 1559142617555,
            "day": "Середа",
            "time": "18 : 10"
        },
        "arrive": {
            "day": "Середа",
            "time": "21 : 10"
        },
        "cost": "120.75"
    },
    {
        "from": "Одеса",
        "to": "Львів",
        "number": "791U",
        "day": "Середа",
        "departure": {
            "left": 1559099187903,
            "day": "Середа",
            "time": "06 : 06"
        },
        "arrive": {
            "day": "Середа",
            "time": "09 : 28"
        },
        "cost": "135.30"
    },
    {
        "from": "Дніпро",
        "to": "Харків",
        "number": "139Y",
        "day": "Понеділок",
        "departure": {
            "left": 1558962601074,
            "day": "Понеділок",
            "time": "16 : 10"
        },
        "arrive": {
            "day": "Понеділок",
            "time": "21 : 10"
        },
        "cost": "201.25"
    },
    {
        "from": "Дніпро",
        "to": "Одеса",
        "number": "813D",
        "day": "Неділя",
        "departure": {
            "left": 1558903300620,
            "day": "Неділя",
            "time": "23 : 41"
        },
        "arrive": {
            "day": "Понеділок",
            "time": "02 : 11"
        },
        "cost": "100.63"
    },
    {
        "from": "Київ",
        "to": "Одеса",
        "number": "772O",
        "day": "Середа",
        "departure": {
            "left": 1559096403903,
            "day": "Середа",
            "time": "05 : 20"
        },
        "arrive": {
            "day": "Середа",
            "time": "08 : 54"
        },
        "cost": "143.75"
    },
    {
        "from": "Львів",
        "to": "Київ",
        "number": "199W",
        "day": "Четвер",
        "departure": {
            "left": 1558639626053,
            "day": "Четвер",
            "time": "22 : 27"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "01 : 30"
        },
        "cost": "122.72"
    },
    {
        "from": "Харків",
        "to": "Львів",
        "number": "307B",
        "day": "Четвер",
        "departure": {
            "left": 1558611697955,
            "day": "Четвер",
            "time": "14 : 41"
        },
        "arrive": {
            "day": "Четвер",
            "time": "17 : 43"
        },
        "cost": "121.97"
    },
    {
        "from": "Київ",
        "to": "Харків",
        "number": "626L",
        "day": "Вівторок",
        "departure": {
            "left": 1558993923560,
            "day": "Вівторок",
            "time": "00 : 52"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "02 : 45"
        },
        "cost": "75.95"
    },
    {
        "from": "Київ",
        "to": "Дніпро",
        "number": "967W",
        "day": "Понеділок",
        "departure": {
            "left": 1558947702730,
            "day": "Понеділок",
            "time": "12 : 01"
        },
        "arrive": {
            "day": "Понеділок",
            "time": "15 : 09"
        },
        "cost": "125.78"
    },
    {
        "from": "Харків",
        "to": "Одеса",
        "number": "133H",
        "day": "Вівторок",
        "departure": {
            "left": 1559010241931,
            "day": "Вівторок",
            "time": "05 : 24"
        },
        "arrive": {
            "day": "Вівторок",
            "time": "08 : 42"
        },
        "cost": "132.90"
    },
    {
        "from": "Дніпро",
        "to": "Львів",
        "number": "446R",
        "day": "П'ятниця",
        "departure": {
            "left": 1558724088062,
            "day": "П'ятниця",
            "time": "21 : 54"
        },
        "arrive": {
            "day": "П'ятниця",
            "time": "23 : 35"
        },
        "cost": "67.65"
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

document.getElementById("thead").addEventListener("click", function (e) {
// e.target is the clicked element!
// If it was a list item
    if (e.target && e.target.classList[0] == 'text') {
        // List item found!  Output the ID!
        console.log(e.target); // TODO console.log
        const sortColumn = e.target.dataset.column
        const sortOrder = e.target.dataset.order === 'asc' ? -1 : 1;
        toggleSortOrder(e)
        const byName = sortByName(data, sortColumn, sortOrder);
        renderTable(byName)
    } else if (e.target && e.target.classList[0] == 'number') {
        // List item found!  Output the ID!
        const sortColumn = e.target.dataset.column
        const sortOrder = e.target.dataset.order === 'asc' ? -1 : 1;
        toggleSortOrder(e)
        const byNumber = sortByNumber(data, sortColumn, sortOrder);
        renderTable(byNumber)
    } else if (e.target && e.target.classList[0] == 'date') {

    }
});

function toggleSortOrder(e) {
    e.target.dataset.order = (e.target.dataset.order === 'asc') ? 'desc' : 'asc';
}

function sortByName(data, sortColumn, sortOrder) {
    return data.sort((a, b) => {
        if (a[sortColumn] > b[sortColumn]) {
            return 1 * sortOrder;
        }
        if (a[sortColumn] < b[sortColumn]) {
            return -1 * sortOrder;
        }
        return 0;
    });
}

function sortByNumber(data, sortColumn, sortOrder) {
    return data.sort((a, b) => {
        return (a[sortColumn] - b[sortColumn]) * sortOrder
    })

}

function sortByDate(data, date, sortOrder) {
    return date.sort((a,b) => {
        const dateA = new Date();
        const dateB = new Date();
        return (dateA - dateB) * sortOrder;
    })
}

document.getElementById('search').addEventListener('submit', function (e) {
    e.preventDefault();
    tableSearch();
})

function tableSearch() {
    const phrase = document.getElementById('input');
    const table = document.getElementById('table');
    const regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) {

                table.rows[i].cells[j].style.color = 'red';
                break
            }
        }
    }
}
