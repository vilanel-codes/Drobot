const tagList = document.querySelector("#tag-data");

function editFlex(doc) {

}


function renderTag(doc) {
    // let row = document.createElement('tr');
    // // let edit1 = document.createElement('button');
    // let edit2 = document.createElement('button');
    // let profile = document.createElement('td');
    // let labels = document.createElement('td');
    // // let pen1  = document.createElement('i');
    // let pen2  = document.createElement('i');
    //
    // let id = document.createElement('td');
    // let color = document.createElement('td');
    // let firmware = document.createElement('td');
    // let hardware = document.createElement('td');
    //
    // // var text1 = document.createTextNode('edit');
    // // edit1.appendChild(text1);
    // //
    // // var text2 = document.createTextNode('edit');
    // // edit2.appendChild(text2);
    //
    // row.setAttribute('data-id', doc.id);
    // profile.textContent = doc.data().positionProfile;
    // // labels.textContent = doc.data().labels;
    // id.textContent = doc.data().id;
    // color.textContent = doc.data().color;
    // firmware.textContent = doc.data().firmware;
    // hardware.textContent = doc.data().hardware;
    //
    // // pen1.setAttribute("class","fa-solid fa-pen");
    // // pen2.setAttribute("class","fa-solid fa-pen");
    //
    // // edit1.appendChild(pen1);
    // // edit2.appendChild(pen2);
    //
    //
    // // profile.appendChild(edit1);
    // // labels.appendChild(edit2);
    //
    //
    //
    //
    //
    // row.appendChild(id);
    // row.appendChild(color);
    // row.appendChild(firmware);
    // row.appendChild(hardware);
    // row.appendChild(profile);
    // row.appendChild(labels);
    //
    //
    // tagList.appendChild(row);
    //
    // let profileform = document.createElement('form');
    // let labelsform = document.createElement('form');
    // let profileselect = document.createElement('select');
    // let labelinput = document.createElement('input');
    // // let button1 = document.createElement('button');
    // let button2 = document.createElement('button');
    //
    //
    //
    //
    //
    //
    //
    // // profileinput.setAttribute("name", "profile");
    // labelinput.setAttribute("name", "label");
    // labelinput.setAttribute("placeholder", doc.data().labels)
    //
    //
    // // profileform.appendChild(profileinput);
    // labelsform.appendChild(labelinput);
    // // profileform.appendChild(button1);
    // labelsform.appendChild(button2);
    //
    //
    // // var text1 = document.createTextNode('ok');
    // // button1.appendChild(text1);
    //
    // var text2 = document.createTextNode('ok');
    // button2.appendChild(text2);
    //
    //
    // // <i class="fa-solid fa-pen"></i>
    //
    //
    //
    //
    //
    // // edit1.appendChild(profileform);
    // labels.appendChild(labelsform);
    //
    // profileform.setAttribute("id", doc.id + "p");
    // labelsform.setAttribute('id', doc.id + 'l');
    //
    // // edit1.setAttribute("id", doc.id + doc.id + "p");
    //
    //
    // // document.querySelector("#" + doc.id + "p").style.display = "none";
    // // document.querySelector("#" + doc.id + "l").style.display = "none";
    //
    // // document.querySelector("#" + doc.id + "p").style.margin = "5px";
    // // document.querySelector("#" + doc.id + "p").style.margin = "5px";
    //
    // console.log(doc.id);
    // // document.getElementById(doc.id + doc.id + "p").addEventListener("click", function() {
    // //     document.querySelector("#" + doc.id + "p").style.display = "flex";
    // //
    // // });
    //
    // // document.getElementById(doc.id + doc.id + "l").addEventListener("click", function() {
    // //     document.querySelector("#" + doc.id + "l").style.display = "flex";
    // // });
    //
    //
    // const form2 = document.querySelector('#' + doc.id + "l");
    //
    // // form1.addEventListener('submit', (e) => {
    // //     e.preventDefault();
    // //     db.collection('tag').doc(doc.id).update({
    // //         positionProfile: form1.profile.value
    // //     }).then(function() {
    // //         console.log("profile updated");
    // //     });
    // // })
    //
    // form2.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     db.collection('tag').doc(doc.id).update({
    //         labels: form2.label.value
    //     }).then(function() {
    //         console.log("profile updated");
    //         location.reload();
    //     });
    // })
    //
    //
    // //options for profile
    // let select = document.createElement('option');
    // let option1  = document.createElement('option');
    // let option2  = document.createElement('option');
    // let option3  = document.createElement('option');
    // let option4  = document.createElement('option');
    //
    // //options
    //
    // option1.textContent = "abc";
    // option2.textContent = "qwer";
    // option3.textContent = "nana";
    // option4.textContent = "riri";
    //
    //
    //
    // profileselect.appendChild(select);
    // profileselect.appendChild(option1);
    // profileselect.appendChild(option2);
    // profileselect.appendChild(option3);
    // profileselect.appendChild(option4);
    //
    // profileform.appendChild(profileselect);
    //
    // option1.setAttribute("name","1");
    // option2.setAttribute("name","2");
    // option3.setAttribute("name","3");
    // option4.setAttribute("name","4");
    //
    // profileselect.setAttribute("id","selector");
    //
    //
    //
    // let buttonSelect = document.createElement('button');
    //
    // profileform.appendChild(buttonSelect);
    //
    // profile.appendChild(profileform);
    //
    // const form1 = document.querySelector('#' + doc.id + "p");
    //
    // // function getOption() {
    // //     selectElement = document.querySelector('#select1');
    // //     output = selectElement.value;
    // //     // document.querySelector('.output').textContent = output;
    // //     db.collection('tag').doc(doc.id).update({
    // //         positionProfile: output
    // //     }).then(function() {
    // //         console.log("profile updated");
    // //         location.reload();
    // //     });
    // // }
    //
    // form1.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     var selectElement = document.querySelector('#selector');
    //      var output =  selectElement.value;
    //     db.collection('tag').doc(doc.id).update({
    //         positionProfile: output
    //     }).then(function() {
    //         console.log("profile updated");
    //         location.reload();
    //     });
    // })
    //

    // CREATING ELEMENTS OF THE TABLE
    let row = document.createElement('tr');
    let profile = document.createElement('td');
    let labels = document.createElement('td');
    let id = document.createElement('td');
    let color = document.createElement('td');
    let firmware = document.createElement('td');
    let hardware = document.createElement('td');
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
    profile.textContent = doc.data().positionProfile;
    labels.textContent = doc.data().labels;
    id.textContent = doc.data().id;
    color.textContent = doc.data().color;
    firmware.textContent = doc.data().firmware;
    hardware.textContent = doc.data().hardware;

    //ADDING ELEMENTS TO ROW
    row.appendChild(id);
    row.appendChild(hardware);
    row.appendChild(firmware);
    row.appendChild(color);
    row.appendChild(profile);
    row.appendChild(labels);
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
    let newID_label = document.createElement('label');
    let newColor_label = document.createElement('label');
    let newHardware_label = document.createElement('label');
    let newFirmware_label = document.createElement('label');
    let newPP_label = document.createElement('label');
    let newLabels_label = document.createElement('label');

    //TEXT content
    newID_label.textContent = "ID : ";
    newColor_label.textContent = "Color : ";
    newHardware_label.textContent = "Hardware : ";
    newFirmware_label.textContent = "Firmware : ";
    newPP_label.textContent = "Profile position : ";
    newLabels_label.textContent = "Label : ";


    //CREATING INPUT FIELDS FOR UPDATING
    let newID_input = document.createElement('input');
    let newColor_input = document.createElement('input');
    let newHardware_input = document.createElement('input');
    let newFirmware_input = document.createElement('input');
    let newPP_input = document.createElement('select');
    let newLabels_input = document.createElement('input');

    //SETTING NAME
    newID_input.setAttribute("name", "newID");
    newColor_input.setAttribute("name", "newColor");
    newHardware_input.setAttribute("name", "newHardware");
    newFirmware_input.setAttribute("name", "newFirmware");
    newPP_input.setAttribute("name", "newPP");
    newLabels_input.setAttribute("name", "newLabel");

    //SETTING DEFAULT Value
    newID_input.value = doc.data().id;
    newColor_input.value = doc.data().color;
    newHardware_input.value = doc.data().hardware;
    newFirmware_input.value = doc.data().firmware;
    newPP_input.value = doc.data().positionProfile;
    newLabels_input.value = doc.data().labels;


    //SET ATTRIBUTES FOR LABELS
    label_col.setAttribute("class", "col-25");
    input_col.setAttribute("class", "col-75");


    label_col.appendChild(newID_label);
    input_col.appendChild(newID_input);
    label_col.appendChild(newColor_label);
    input_col.appendChild(newColor_input);
    label_col.appendChild(newHardware_label);
    input_col.appendChild(newHardware_input);
    label_col.appendChild(newFirmware_label);
    input_col.appendChild(newFirmware_input);
    label_col.appendChild(newPP_label);
    input_col.appendChild(newPP_input);
    label_col.appendChild(newLabels_label);
    input_col.appendChild(newLabels_input);



    form.appendChild(label_col);
    form.appendChild(input_col);

    form.appendChild(delet);
    form.appendChild(save);

    form.appendChild(input_row);




    container.appendChild(form);

    overlayedit.appendChild(container);

    row.appendChild(overlayedit);

    form.setAttribute("id", "A" + doc.id + "f");

    //options for profile
    let select = document.createElement('option');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let option4 = document.createElement('option');

    //options

    option1.textContent = "abc";
    option2.textContent = "qwer";
    option3.textContent = "nana";
    option4.textContent = "riri";



    newPP_input.appendChild(select);
    newPP_input.appendChild(option1);
    newPP_input.appendChild(option2);
    newPP_input.appendChild(option3);
    newPP_input.appendChild(option4);



    option1.setAttribute("name", "1");
    option2.setAttribute("name", "2");
    option3.setAttribute("name", "3");
    option4.setAttribute("name", "4");

    newPP_input.setAttribute("id", "selector" + doc.id);



    edit.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("overlay" + doc.id).style.display = "block";

    })
    const formoverlay = document.querySelector('#A' + doc.id + "f");

    document.getElementById("xyz" + doc.id).addEventListener('click', (e) => {
        e.preventDefault();
        var selectElement = document.querySelector('#selector' + doc.id);
        var output = selectElement.value;
        db.collection('tag').doc(doc.id).update({
            labels: formoverlay.newLabel.value,
            positionProfile: output,
            id: formoverlay.newID.value,
            color: formoverlay.newColor.value,
            firmware: formoverlay.newFirmware.value,
            hardware: formoverlay.newHardware.value
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
        var selectElement = document.querySelector('#selector' + doc.id);
        var output = selectElement.value;
        db.collection('tag').doc(doc.id).delete().then(function() {
            console.log("profile updated");
            location.reload();
        }).catch(error => {
            stuffDetails.log(error);
            throw new Error("something happened, see detail log");
        });
        console.log("lol");



    })


    // Add a new document with a generated id.









}
document.getElementById("add_button").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("overlayAdd").style.display = "block";

})
const formAdd = document.querySelector('#newDoc');

function epilol(){
    db.collection("tag").add({
        labels: formAdd.newLabelsadd.value,
        positionProfile: document.querySelector("#selector").value,
        id: formAdd.newIDadd.value,
        color: formAdd.newColoradd.value,
        firmware: formAdd.newFirmwareadd.value,
        hardware: formAdd.newHardwareadd.value
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
