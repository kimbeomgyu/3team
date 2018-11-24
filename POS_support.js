/************ 필요한 기능들 ***********

* 메뉴를 누르면 옆에 리스트에 추가가 되어야 함
* 수량에 +- 버튼이 있고, 그 버튼을 누르면 수량과 가격이 변해야 함
* 하단에 결제해야할 총 금액이 표시되어야 함
* 결제버튼을 누르면 팝업창으로 '결제되었습니다'라는 알림창을 띄워보자
*/


var event_btn_menu = document.querySelectorAll(".btn_menu");

// 내가 선택한(버튼을 누른) 메뉴가 모이는 Array
var orderedItems = [];

//선택한 메뉴를 #box-list 에 추가하기 위한 Object
var selectedItem = {name: '', amount: 0, price: 0}

//각 메뉴의 단가를 모아놓은 Object 
var price = {
    btn_1: 6000,  //떡볶이
    btn_2: 3000,  //튀김
    btn_3: 4000,  //순대
    btn_4: 2000,  //어묵
    btn_5: 3500,  //김밥
    btn_6: 5500   //볶음밥
}
//선택한 메뉴를 #box-list 에 li 태그로 추가하는 함수
function pushItem(el){
    var selectedElement = el.target;

    for(var i=1; i<=6; i+=1){
        //선택한 Element의 className이 menuimg일 경우(버튼이 아닌 떡볶이/순대 등 이미지를 선택할 수 있으므로),
        //선택한 Element의 id가 btn_1 ~ btn_6 사이일 경우 li태그로 주문한 메뉴로 표시하기
        if(selectedElement.className === "menuimg"){
            if(selectedElement.parentElement.id === ("btn_"+i)){
                takingOrder(whatIselected(selectedElement,i),i);
                li_append(orderedItems);
            }   
        } else if(selectedElement.id === ("btn_"+i)){
                takingOrder(whatIselected(selectedElement,i),i);
                li_append(orderedItems);
        }
    }    
}

//선택한 메뉴의 이름을 text로 가져오는 함수
function whatIselected(element,i){
    var textValue='';
    var btn_Num = "btn_"+i
    
    element = document.getElementById(btn_Num);
    textValue = element.innerText.trim();

    return textValue;
}

//선택한 메뉴를 object(selectedItem)와 array(orderedItems)에 넣어줌
function takingOrder(item,i){
        var btn_Num = "btn_"+i

        selectedItem.name = item;
        selectedItem.amount = 1;
        selectedItem.price = (selectedItem.amount) * (price[btn_Num]);
        orderedItems.push(selectedItem);
}
//Array에 있는 arguements를 li태그로 만들어서 ul태그 밑에 추가하는 함수
function li_append(array){
    
    //버튼눌럿을때 같은 id값이 있으면 실행안됨
    for(let i = 0; i<document.getElementById('box-list').children[0].children.length; i++){
        if(document.getElementById('box-list').children[0].children[i].id !== array[0].name){
        } else {
            return;
        }
    }
    
    var li = document.createElement('li');
    
    var parentElement = document.querySelectorAll("ul")[1];
    li.id = array[0].name;
    li.appendChild(document.createTextNode(array[0].name+'  '));
    li.appendChild(document.createTextNode(array[0].amount+'  개'+'  '));
    li.appendChild(document.createTextNode(array[0].price+'원'));
    li.innerHTML = (array[0].name+'  ') + (array[0].amount+'  개'+'  ') + (array[0].price)+ '원' + ' ' + '<button class="plus"> + </button>' +' '+ '<button class="minus"> - </button>';
    parentElement.appendChild(li);
    
}

function test(){
    alert('결제하시겠습니까? \n금액은 ' + total + '원입니다!');
    }