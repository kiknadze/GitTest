searchPC.addEventListener('change', function() {
    if(searchPC.value == '2') {
        searchPer.style.display = "none"; 
        searchCar.style.display = "block"; 
    } else {
        searchPer.style.display = "block"; 
        searchCar.style.display = "none"; 
    }
})
