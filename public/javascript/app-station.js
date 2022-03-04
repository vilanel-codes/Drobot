const tagList = document.querySelector("#tag-data");

function renderTag(doc) {


    // CREATING ELEMENTS OF THE TABLE
    let row = document.createElement('tr');
    let station = document.createElement('td');
    let createdBy = document.createElement('td');
    let distance = document.createElement('td');

    let edit = document.createElement('td');
    let button = document.createElement('button');

    //CUSTOMIZING EDIT button
    let editPen = document.createElement('i');
    editPen.setAttribute("class", "fa-solid fa-pen");
    button.setAttribute('class', 'pen w3-button w3-circle ');

    button.appendChild(editPen);
    edit.appendChild(button);


    //ASSIGNING DATA TO ELEMENT FROM FIRESTORE
    row.setAttribute('data-id', doc.id);
    station.textContent = doc.data().station;
    createdBy.textContent = doc.data().createdBy;
    distance.textContent = doc.data().distance;


    //ADDING ELEMENTS TO ROW
    
    row.appendChild(station);
    row.appendChild(createdBy);
    row.appendChild(distance);

    row.appendChild(edit);

    //ADDING ROW TO TABLE
    tagList.appendChild(row);

    //OVERLAY FOR EDIT

    let overlayedit = document.createElement('div');
    overlayedit.setAttribute("class", "overlay");
    let container = document.createElement('div')
    container.setAttribute("class", "container");


    overlayedit.setAttribute("id", "overlay" + doc.id);

    let form = document.createElement('form');
    let input_row = document.createElement('div');
    let label_col = document.createElement('div');
    let input_col = document.createElement('div');
    let save = document.createElement('button');
    let delet = document.createElement('button');

    var text = document.createTextNode('Save');
    save.appendChild(text);
    save.setAttribute('id', 'xyz' + doc.id);
    save.setAttribute("class", "button")

    var deleteText = document.createTextNode('Delete');
    delet.appendChild(deleteText);
    delet.setAttribute('id', 'delete' + doc.id);
    delet.setAttribute("class", "delete")




    //CREATE LABELS FOR ELEMENTS
    let newDistance_label = document.createElement('label');


    //TEXT content
    newDistance_label.textContent = "Distance : ";



    //CREATING INPUT FIELDS FOR UPDATING
    let newDistance_input = document.createElement('input');


    //SETTING NAME
    newDistance_input.setAttribute("name", "newDistance");

    //SETTING DEFAULT Value
    newDistance_input.value = doc.data().distance;


    //SET ATTRIBUTES FOR LABELS
    label_col.setAttribute("class", "col-25");
    input_col.setAttribute("class", "col-75");


    label_col.appendChild(newDistance_label);
    input_col.appendChild(newDistance_input);



    form.appendChild(label_col);
    form.appendChild(input_col);

    form.appendChild(delet);
    form.appendChild(save);

    form.appendChild(input_row);




    container.appendChild(form);

    overlayedit.appendChild(container);

    row.appendChild(overlayedit);

    form.setAttribute("id", "A" + doc.id + "f");




    edit.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("overlay" + doc.id).style.display = "block";

    })
    const formoverlay = document.querySelector('#A' + doc.id + "f");

    document.getElementById("xyz" + doc.id).addEventListener('click', (e) => {
        e.preventDefault();

        db.collection('tag').doc(doc.id).update({

            distance: formoverlay.newDistance.value,

        }).then(function() {
            console.log("profile updated");
            location.reload();
        }).catch(error => {
            stuffDetails.log(error);
            throw new Error("something happened, see detail log");
        });
        console.log("lol");
    })

    document.getElementById("delete" + doc.id).addEventListener('click', (e) => {

        e.preventDefault();

        db.collection('tag').doc(doc.id).delete().then(function() {
            console.log("profile updated");
            location.reload();
        }).catch(error => {
            stuffDetails.log(error);
            throw new Error("something happened, see detail log");
        });
        console.log("lol");



    })
}

//NEW Data

document.getElementById("add_button").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("overlayAdd").style.display = "block";

})
const formAdd = document.querySelector('#newDoc');

function epilol(){
    db.collection("tag").add({

        distance: formAdd.newIDadd.value,

    }).then(function() {
        console.log("profile updated");
        location.reload();
    }).catch(error => {
        stuffDetails.log(error);
        throw new Error("something happened, see detail log");
    });

}



db.collection('tag').get().then((snapshots) => {
    snapshots.docs.forEach(doc => {
        renderTag(doc);
    })
})
