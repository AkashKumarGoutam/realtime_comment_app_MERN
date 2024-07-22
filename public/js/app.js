
let username 
//take input as user by js
do {
    username = prompt('Enter your name: ')
} while(!username)


    // get all documents id and class to set the events on this class and id further
    const textarea = document.querySelector("#textarea");
    const submitBtn = document.querySelector("#submitBtn");
    const commentBox = document.querySelector(".comment__box");

    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let comment = textarea.value
        if(!comment){
            return
        }         
        postComment(comment)
    })

    function postComment(comment){
        // Append to data
        let data = {
            username:username,
            comment: comment
        }
        appendToDom(data)
        textarea.value = ''
    }

    function appendToDom(data){
        let lTag = document.createElement('li')
        lTag.classList.add('comment' , 'mb-3')

        let markup = `
                <div class="card border-light mb-3">
                            <div class="card-body">
                                <h6>${data.username}</h6>
                                <p>${data.comment}</p>
                                <div>
                                    <img src="/img/clock.png" alt="clock">
                                    <small>${moment(data.time).format('LT')}</small>
                                </div>
                            </div>
                        </div>
        `

        lTag.innerHTML = markup
        commentBox.prepend(lTag)
    }



