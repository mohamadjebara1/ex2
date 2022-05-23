const mydataArray = [];




function addTask(){


    var task ;
    task =  document.getElementById('addtask').value;
    if (task == ''){
        return ;
    }
    mydataArray.push(task) ;
    buildTable();


}




function buildTable() {


    var table = document.getElementById('myTable') ;




    while(table.rows.length > 0){

        table.deleteRow(0) ;
    }


    var row = table.insertRow(0);
    var colmun1 = row.insertCell(0) ;
    var colmun2 = row.insertCell(1);

    colmun1.innerHTML = "Task Name" ;
    colmun2.innerHTML = "Delete Task"

    for (let i=0 ; i < mydataArray.length; i++){

        row = table.insertRow(i+1)
        colmun1= row.insertCell(0) ;
        colmun2 = row.insertCell(1);

        colmun1.innerHTML = mydataArray[i];

        let btn = document.createElement("button");
        btn.innerHTML = "Delete Task" ;
        btn.onclick = () => deleteTask(i) ;
        colmun2.appendChild(btn);

    }




}



function deleteTask(index){


        console.log('delete index:' + index) ;
        mydataArray.splice(index,1) ;
        buildTable() ;

}





function deleteAllEelemnt(){


    while (mydataArray.length !==0){

        mydataArray.pop() ;
    }

    buildTable() ;
}



function showIteminArray(){


    console.log(mydataArray);


}




