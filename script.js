// https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=Amar Kumar
//Amar Kumar



function generate() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "" && mysize == "100") {
        myimg.src = gapi + "100x100" + "&chl=" + mytext;
        

    }

    else if (mytext !== "" && mysize == "150") {

        myimg.src = gapi + "150x150" + "&chl=" + mytext;
    }

    else if (mytext !== "" && mysize == "200") {
        myimg.src = gapi + "200x200" + "&chl=" + mytext;
    }

    else if (mytext !== "" && mysize == "250") {
        myimg.src = gapi + "250x250" + "&chl=" + mytext;
    }

    else if (mytext !== "" && mysize == "300") {
        myimg.src = gapi + "300x300" + "&chl=" + mytext;
    }
    else if (mytext !== "" && mysize == "400") {
        myimg.src = gapi + "400x400" + "&chl=" + mytext;
    }

    else {
        alert("Error!\nPlease Enter Text");
    }

}

function downloadImage() {

    generate()

    fetch(document.getElementById("img").src)
        .then(response => response.blob())
        .then(blob => {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'image.jpg'; // Set the desired file name here

            // Programmatically trigger the download
            link.click();

            // Clean up the URL object after the download
            URL.revokeObjectURL(link.href);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}         
