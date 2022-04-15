const searchBar = document.getElementById('search')
      imageBox = document.querySelectorAll('.image');

      searchBar.addEventListener('keyup', e => {
          //console.log(e);
          if(e.key==="Enter"){

                let searchValue = (searchBar.value);
                    enteredValue = searchValue.toLowerCase();

                if(searchBar.value===""){
                    alert('Enter a Name');
                }

                else{
                    imageBox.forEach(image => {
                        if(enteredValue === image.dataset.name){
                            return image.style.display = "block";
                        }

                        else{
                            image.style.display = "none";
                        }
                    })
                }
            }
        })

        searchBar.addEventListener('keyup', () => {
            if(searchBar.value != "") {
                return;
            }

            imageBox.forEach(image => {
                image.style.display = "block";
            })
        })
         