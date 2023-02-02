let todos = [{
	id: 1,
	task: "Купить луну",
	time: "14:05",
	completed: false,
},
{
	id: 2,
	task: "Купить mandarin",
	time: "14:05",
	completed: true,
},
{
	id: 3,
	task: "Сделать изменение",
	time: "0:44",
	completed: false,
},
{
	id: 4,
	task: "Сделать дз",
	time: "0:46",
	completed: true,
},
{
	id: 5,
	task: "Придти в Wepro",
	time: "13:30",
	completed: false,
},
{
	id: 6,
	task: "Стать Альфой",
	time: "-12190:238298",
	completed: false,
},
];




let form = document.forms.add_task_form;
let container = document.querySelector(".container");


const reload = (arr) => {
	container.innerHTML = ""

	for (let item of arr) {
		let body = document.querySelector('body')
		//back
		let back = document.createElement('div')
		let modal = document.createElement("div")
		let modalInp = document.createElement("input")
		let divBtn = document.createElement('div')
		let modalh = document.createElement('h3')
		let modalBtn = document.createElement("button")
		let modalBtn2 = document.createElement("button")
		modal.classList.add('modal')
		back.classList.add('back')
		modalInp.setAttribute('type', 'text')
		divBtn.classList.add('divBtn')
		modalBtn.classList.add('modalBtn')
		modalBtn2.classList.add('modalBtn2')

		modalh.innerHTML = "Change your text"
		modalBtn.innerHTML = "Edit"
		modalBtn2.innerHTML = "Cancel"
		divBtn.append(modalBtn, modalBtn2)
		modal.append(modalh, modalInp, divBtn)
		back.append(modal)
		body.append(back)
		

		modalBtn2.onclick = () => {
			back.style.display = "none"
		}
		

		
		let item2 = document.createElement('div')
		let left = document.createElement('div')
		let right = document.createElement('div')
		let img = document.createElement('img')
		let img2 = document.createElement('img')
		let task = document.createElement('p')
		let hour = document.createElement('p')
		img2.onclick = () => {
			back.style.display = "block"
			reload(todos)
		}

		if (item.completed === true) {
			item2.classList.add('red')
			
		}
		item2.classList.add('item2')
		left.classList.add('left')
		img2.classList.add('img2')
		right.classList.add('right')
		task.classList.add('task')
		hour.classList.add('hour')

		//attributes
		img.setAttribute('src', './Group 14.png')
		img2.setAttribute('src', './edit-2.svg')
		//text
		
		task.innerHTML = item.task;
		hour.innerHTML = item.time;
		//append
		right.append(img2, img)
		left.append(task, hour)
		item2.append(left, right)
		container.append(item2)
		
		
		img.onclick = () => {
			todos = todos.filter(elem => elem.id !== item.id)
			reload(todos)
		}
		task.onclick = () => {
			item.completed = !item.completed
			
			reload(todos)
		}
		modalBtn.onclick = () => {
			if(modalInp.value.length === 0){
				modalInp.style.borderColor = 'red'
			} else {
			 item.task = modalInp.value
			back.style.display = 'none'
			reload(todos)
			}
		}	
	}



}

reload(todos)



form.onsubmit = (event) => {
	event.preventDefault();

	let todo = {
		id: Math.random(),
		completed: false,
		time: new Date().getHours() + ":" + new Date().getMinutes(),
	};

	let fm = new FormData(form);

	fm.forEach((value, key) => {
		todo[key] = value;
	});


	todos.push(todo)
	reload(todos)
};




