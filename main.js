// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà completed è uguale a true, visualizzare il 
// testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco di ogni todo una “x”: cliccando su di
//  essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”:
//  cliccando sul pulsante, il testo digitato viene letto e utilizzato
//  per creare un nuovo todo, che quindi viene aggiunto alla lista
//  dei todo esistenti.
// Bonus:
// 1. Oltre al click sul pulsante, intercettare anche il tasto ENTER
//  per aggiungere il todo alla lista.
// 2. Cliccando sul testo del todo, invertire il valore della proprietà 
// completed del todo corrispondente (se completed era uguale a false,
	//  impostare true e viceversa).


const app = new Vue({
	el:'#root',
	data:{
		todos:
		[ 
			{
				text:'Finire Compito',
				complited:true
			},
			{
				text:'Fare spesa',
				complited:false
			},
			{
				text:'Fare il bucato',
				complited:true
			},
		],
		newTodo: '',
	},
	methods:{
		addNewTodo(){
			if(this.newTodo !== ''){
			console.log(this.newTodo);

			const newTodo = {
				text:this.newTodo,
				complited:false
			}

			this.todos.unshift(newTodo)

			this.newTodo = ''

			this.$refs.input.focus()
		}
		},
		removeTodo(index){
			console.log(index);
			this.todos.splice(index, 1)
			
		},
		chekTodo(index){
			if (this.todos[index].complited === true){
				this.todos[index].complited = false 
			}else{
				this.todos[index].complited = true
			}
		}

	}

})