async function getSingleData(){
    const url = 'http://localhost:3000/students/1';
    let data = await fetch(url);
    let oneStudent = await data.json();
    console.log(oneStudent);
}

async function getdata(){
    const url = 'http://localhost:3000/students';
    let data = await fetch(url);
    let allStudent = await data.json();
    return allStudent;
}

async function postdata(id,name){
    const url = 'http://localhost:3000/students';
    let data = await fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            id:`${id}`,
            name: `${name}`,
        }),
    });
    let response = await data.json();
    return response;
}
async function putdata(roll,name){
    const url = `http://localhost:3000/students/${roll}`;
    let data = await fetch(url,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            name: `${name}`,
        }),
    });
    return data;
}
async function deletedata(){
    const url = 'http://localhost:3000/students/8';
    let data = await fetch(url,{method: 'DELETE',});
    console.log(data.status);
}

async function renderAddStudent(){
    const roll = document.getElementById("roll").value;
    const name = document.getElementById("name").value;
    const response = await postdata(roll,name);
    if(response.message == 'Student added') alert("Successfully added");
    else alert("Error");
    document.getElementById("roll").value = '';
    document.getElementById("name").value = '';
}
async function renderUpdateInfo(){
    const roll = document.getElementById("rollforUpdate").value;
    const name = document.getElementById("updatedName").value;
    const response = await putdata(roll,name);
    if(response.status == 204) alert("Successfully updated");
    else alert("Error");
    document.getElementById("rollforUpdate").value = '';
    document.getElementById("updatedName").value = '';
}
async function renderGetAll(){
    const table = document.getElementById("tabledata");
    table.innerHTML = ' ';
    const response = await getdata();
    for(let i=0;i<response.length;i++){
        let row = `<tr> 
                <td>${response[i].id}</td>
                <td>${response[i].name} </td>        
        </tr>`;
        table.innerHTML += row;
    }
}