//資料 
let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];

//---------------上方自訂區塊開始------------------
//get element
const submitBtn = document.querySelector(".addTicket-btn");
const select = document.querySelector(".regionSearch");
const ticketArea = document.querySelector(".ticketCard-area")
const cantFindArea = document.querySelector(".cantFind-area")
const resultNum = document.querySelector("#searchResult-text")

//func showAllItem
function showAllItem(){
    let allItem = "";
    let pastPostResult = JSON.parse(localStorage.getItem("pastPost"));
    data.forEach( item => {
        let newItem = `
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                    <img src=${item.imgUrl}>
                    </a>
                    <div class="ticketCard-region"> ${item.area} </div>
                    <div class="ticketCard-rank"> ${item.rate} </div>
                </div>
                <div class="ticketCard-content">
                    <div>
                    <h3>
                        <a href="#" class="ticketCard-name"> ${item.name} </a>
                    </h3>
                    <p class="ticketCard-description">
                        ${item.description}
                    </p>
                    </div>
                    <div class="ticketCard-info">
                    <div class="ticketCard-num">
                        <p>
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                        </p>
                    </div>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price"> ${item.price} </span>
                    </p>
                    </div>
                </div>
            </li>`
        allItem += newItem;
    })
    if (pastPostResult !== null){
        pastPostResult.forEach( item => {
            let newItem = `
                <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                        <img src=${item.ticketImg}>
                        </a>
                        <div class="ticketCard-region"> ${item.ticketRegion
                        } </div>
                        <div class="ticketCard-rank"> ${item.ticketRate
                        } </div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                        <h3>
                            <a href="#" class="ticketCard-name"> ${item.ticketName
                            } </a>
                        </h3>
                        <p class="ticketCard-description">
                            ${item.ticketDescription}
                        </p>
                        </div>
                        <div class="ticketCard-info">
                        <div class="ticketCard-num">
                            <p>
                            <span><i class="fas fa-exclamation-circle"></i></span>
                            剩下最後 <span id="ticketCard-num"> ${item.ticketNum
                            } </span> 組
                            </p>
                        </div>
                        <p class="ticketCard-price">
                            TWD <span id="ticketCard-price"> ${item.ticketPrice
                            } </span>
                        </p>
                        </div>
                    </div>
                </li>`
            allItem += newItem;
        })
    }
    ticketArea.innerHTML = allItem;
    resultNum.textContent = `本次搜尋共 ${data.length+pastPostResult.length} 筆資料`;
}

//新增套票並渲染頁面
submitBtn.addEventListener("click",e => {
    let ticketName = document.querySelector("#ticketName").value;
    let ticketImg = document.querySelector("#ticketImgUrl").value;
    let ticketRegion = document.querySelector("#ticketRegion").value;
    let ticketPrice = document.querySelector("#ticketPrice").value;
    let ticketNum = document.querySelector("#ticketNum").value;
    let ticketRate = document.querySelector("#ticketRate").value;
    let ticketDescription = document.querySelector("#ticketDescription").value;
    let pastPostResult = JSON.parse(localStorage.getItem("pastPost"));

    if (pastPostResult === null){
        let pastPost = [];
        let nowPost = {};
        nowPost.ticketName = ticketName;
        nowPost.ticketImg = ticketImg;
        nowPost.ticketRegion = ticketRegion;
        nowPost.ticketPrice = ticketPrice;
        nowPost.ticketNum = ticketNum;
        nowPost.ticketRate = ticketRate;
        nowPost.ticketDescription = ticketDescription;
    
        pastPost.push(nowPost)
        localStorage.setItem("pastPost",JSON.stringify(pastPost));
        
        ticketName = "";
        ticketImg = "";
        ticketRegion = "";
        ticketPrice = "";
        ticketNum = "";
        ticketRate = "";
        ticketDescription = "";
    }else{
        let nowPost = {};
        nowPost.ticketName = ticketName;
        nowPost.ticketImg = ticketImg;
        nowPost.ticketRegion = ticketRegion;
        nowPost.ticketPrice = ticketPrice;
        nowPost.ticketNum = ticketNum;
        nowPost.ticketRate = ticketRate;
        nowPost.ticketDescription = ticketDescription;
    
        pastPostResult.push(nowPost)
        localStorage.setItem("pastPost",JSON.stringify(pastPostResult));
        
        ticketName = "";
        ticketImg = "";
        ticketRegion = "";
        ticketPrice = "";
        ticketNum = "";
        ticketRate = "";
        ticketDescription = "";
    }

    showAllItem()
    let form = document.querySelector('.addTicket-form');
    form.reset()
})
//---------------上方自訂區塊結束------------------

//---------------下方篩選區塊開始------------------
//初次券染渲染
showAllItem()

let pastData = JSON.parse(localStorage.getItem("pastPost"));

//篩選
select.addEventListener("change",e => {
    const option = e.target.value;
    let pastData = JSON.parse(localStorage.getItem("pastPost"));
    //篩選符合選項的資料
    let result = data.filter(item => item.area === option);
    let pastPostItem = pastData.filter(item => item.ticketRegion === option)
    console.log(pastData)
    //顯示各套票
    if(option === "全部地區"){       
        showAllItem();
    }else if(result.length === 0 && pastPostItem.length === 0){
        ticketArea.innerHTML = "";
        cantFindArea.innerHTML =`
        <h3>查無此關鍵字資料</h3>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/no_found.png?raw=true" alt="">
        `
        resultNum.textContent = `本次搜尋共 ${result.length} 筆資料`;
    }else{
        let areaItem = "";
        result.forEach( item => {
                let newItem = `
                <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                        <img src=${item.imgUrl}>
                        </a>
                        <div class="ticketCard-region"> ${item.area} </div>
                        <div class="ticketCard-rank"> ${item.rate} </div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                        <h3>
                            <a href="#" class="ticketCard-name"> ${item.name} </a>
                        </h3>
                        <p class="ticketCard-description">
                            ${item.description}
                        </p>
                        </div>
                        <div class="ticketCard-info">
                        <div class="ticketCard-num">
                            <p>
                            <span><i class="fas fa-exclamation-circle"></i></span>
                            剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                            </p>
                        </div>
                        <p class="ticketCard-price">
                            TWD <span id="ticketCard-price"> ${item.price} </span>
                        </p>
                        </div>
                    </div>
                </li>`
                areaItem += newItem;
                })
        pastPostItem.forEach( item => {
            let newItem = `
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                    <img src=${item.ticketImg}>
                    </a>
                    <div class="ticketCard-region"> ${item.ticketRegion} </div>
                    <div class="ticketCard-rank"> ${item.ticketRate} </div>
                </div>
                <div class="ticketCard-content">
                    <div>
                    <h3>
                        <a href="#" class="ticketCard-name"> ${item.ticketName} </a>
                    </h3>
                    <p class="ticketCard-description">
                        ${item.ticketDescription}
                    </p>
                    </div>
                    <div class="ticketCard-info">
                    <div class="ticketCard-num">
                        <p>
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${item.ticketNum} </span> 組
                        </p>
                    </div>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price"> ${item.ticketPrice} </span>
                    </p>
                    </div>
                </div>
            </li>`
            areaItem += newItem;
            })
                ticketArea.innerHTML = areaItem;
                cantFindArea.innerHTML ='';
                resultNum.textContent = `本次搜尋共 ${result.length+pastPostItem.length} 筆資料`;
    }  
})
//---------------下方篩選區塊結束------------------

