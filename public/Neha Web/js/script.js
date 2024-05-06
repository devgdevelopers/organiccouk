const inputBox = document.getElementById('input-box');  
  
  document.getElementById("add-button").addEventListener("click", function (event) {
    event.preventDefault();
    console.log(inputBox.value);
    inputBox.value = "";
  })

  const addTodos = [{
    id: 1,
    title: "Task 1",
    completed: false
  }];

  addTodos.push(inputBox.value);
  
  addTodos.map((val)=>{
   return 
  })