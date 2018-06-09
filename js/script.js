let open = document.getElementById('open-btn'),

	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	goodsItem = document.getElementsByClassName('goods-item'),

	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],

	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),

	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

let price1 = document.getElementsByTagName('button')[4];
	


let money,   price;

//hireEmployersItem.match([а-я][А-Я]);

 initButtons();


countBudgetValue.onkeypress = function(event){
 event = event || window.event;
 if (event.charCode && (event.charCode < 48 || event.charCode > 57))
  return false;
};


open.addEventListener('click', () => {
    money = prompt("Ваш бюджет на месяц?", '10000');

    budgetValue.textContent = money;

    nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();
});

goodsBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
        let a = goodsItem[i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null  && a.length < 50) {
            console.log('все верно');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        } else {
            i--;
        }
    }
});

chooseItem.addEventListener('change', () =>{
	let items = chooseItem.value;

	if (isNaN(items) && items != '' ) {
    mainList.shopItems = items.split(', '); 
    mainList.shopItems.sort();

    itemsValue.textContent = mainList.shopItems;
   }
})



budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

employersBtn.addEventListener('mousedown', () => {
		employersValue.value = '';
});

employersBtn.addEventListener('mouseup', () => {

	for (let i = 0; i < hireEmployersItem.length; i++) {
		
            
                mainList.employers[i] = name;
                employersValue.textContent += mainList.employers[i] + ', '
            
        }
});

price1.addEventListener('click', () => {
	if (mainList.discount == true) {
		discountValue.style.backgroundColor = 'green';
        price = price / 100 * 80;
    } else {
    	discountValue.style.backgroundColor = 'red';
    }
});

let countBudgetValuee = document.getElementById('budget').setAttribute('disabled', 'false');


timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0) {
            console.log('не может быть');

            mainList.open = false;
        } else if (time > 8 && time < 20) {
            console.log('время работать');
            mainList.open = true;
        } else if (time < 24) {
            console.log('уже поздно');
            mainList.open = false;
        } else {
            console.log('в сутках только 24 часа');
            mainList.open = false;
        };
    if(mainList.open === true) {
    	isopenValue.style.backgroundColor = 'green';
    	budgetBtn.removeAttribute('disabled');
    	employersBtn.removeAttribute('disabled');
    	price1.removeAttribute('disabled');
    	goodsBtn.removeAttribute('disabled');
    	console.log('1');
    } else {
    	isopenValue.style.backgroundColor = 'red';
    	budgetBtn.setAttribute('disabled', '');
    	employersBtn.setAttribute('disabled', '');
    	price1.setAttribute('disabled', '');
    	goodsBtn.setAttribute('disabled', '');
    }
});

function initButtons() {
	goodsBtn.setAttribute('disabled', '');
	budgetBtn.setAttribute('disabled', '');
	employersBtn.setAttribute('disabled', '');
	price1.setAttribute('disabled', '');
}


 
/*button.addEventListener('click', function(event) {
	timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if(time > 8 && time < 20) {

		
	} else {
		event.preventDefault();
	}
	});
});
*/




let mainList = {
    budget: money,
    name: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
    shopItems: [],
    


  
   



}

