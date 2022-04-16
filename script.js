const searchBar = document.getElementById('search')
      imageBox = document.querySelectorAll('.image')
      footerBar = document.getElementById('footer-bar');

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
                            image.style.display = "block";
                            footerBar.style.display = "none";
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
                footerBar.style.display = "block";
            })
        })
         