const xValues = ["product1", "product2", "product3", "product5", "product6"];
    const yValues = [55, 49, 44, 24, 15];
    var barColors = [
      "#F3C96B",
      "rgba(243, 201, 107, 0.50)",
      "#EC9555",
      "rgba(236, 148, 84, 0.50)",
      "rgba(243, 201, 107, 0.25)"
    ];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
        }
      }
    });

    const xValuesss = [1,2,3,4,5,6,7,8,9,1];

    new Chart("myCharts", {
        type: "line",
        data: {
          labels: xValuesss,
          datasets: [{ 
           
          }, { 
            data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
            borderColor: "gray",
            fill: false
          }, { 
            data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
            borderColor: "blue",
            fill: false
          }]
        },
        options: {
          legend: {display: false}
        }
      });


      // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// adding customer data in tables
var userData = [];
var names = document.getElementById('form3Example3');
var phone = document.getElementById('form3Example1');
var email = document.getElementById('form3Example2');
var address = document.getElementById('form3Example4');
var refferby = document.getElementById('form3Example5');
var upload = document.getElementById('form3Example6');
var saving = document.querySelector('#save-btn');

saving.onclick = function(){
  savesData();
}
function savesData(){
userData.push({
  name: names.value,
  phone : phone.value,
  email:email.value,
  address: address.value,
  refferby:refferby.value,
  upload: upload.value

});
var userString = JSON.stringify(userData);
localStorage.setItem("userData",userString);

}
