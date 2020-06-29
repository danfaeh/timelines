console.log("connected")
$(function(){ 

	$("#crew_form").submit(function(e){
	    e.preventDefault();
      console.log("submit button")

	    var json = JSON.parse($('#json').val());
      var crew_obj = json["player"]["character"]["crew"]
      var crew_count = Object.keys(crew_obj).length
      var crew_arr = []
      let results = []

      for (var j = 0; j < crew_count; j++) {
        crew_arr.push(crew_obj[j]["name"])
      }

      const findDuplicates = (arr) => {
        let sorted_arr = arr.slice().sort(); 
        for (let i = 0; i < sorted_arr.length - 1; i++) {
          if (sorted_arr[i + 1] == sorted_arr[i]) {
            console.log(sorted_arr[i]);
            results.push(sorted_arr[i]);
          }
        }
        $('#dupe_crew')[0].textContent = results
      }        

      findDuplicates(crew_arr)



	    // $.ajax({
	    //     method: 'post',
	    //     url: '/json',
	    //     data: JSON.stringify(json),
	    //     contentType: 'application/json',
	    //     success: function(data) {
	    //         $('#dupe_crew').val(data);
	    //     }
	    // })
	});



});


//*******************************************************//
//*********************Template**********************//
//*******************************************************//





