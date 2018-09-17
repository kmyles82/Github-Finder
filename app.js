//Init Github
const github = new Github;

//Search input
const searchUser = document.querySelector('#searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText != '') {
        // console.log(userText)
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert
                    
                } else {
                    //show profile

                }
        })
    } else {
        //clear profile
    }
})