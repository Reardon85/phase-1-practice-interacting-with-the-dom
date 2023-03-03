
const counter = document.getElementById("counter");

 

function init (){
    
    const commentForm = document.getElementById("comment-form");
    const list = document.getElementById("list")
    const pause = document.getElementById("pause");
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');

    plusBtn.addEventListener('click', () => {
        counter.textContent++

    })

    minusBtn.addEventListener('click', () => {
        counter.textContent--;
    })

    pause.addEventListener('click', () => {
        if(pause.id === "pause"){
            pause.id = "paused";
            pause.textContent = "resume"
            minusBtn.disabled = true;
            plusBtn.disabled = true;
            heartBtn.disabled = true;

        } else {
            pause.id = "pause";
            pause.textContent = "pause"
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            heartBtn.disabled = false;
            
        }
    })

    heartBtn.addEventListener('click', () => {

        let ul = document.querySelector('.likes');
        
        const li = document.createElement('li');
        li.setAttribute("data-num", counter.textContent);

        const testArray = [...ul.children]
        const likeArray = testArray.filter(searchLikes);
        console.log(likeArray);

        if( likeArray.length > 0) {
            const updateLi = document.querySelector(`[data-num="${likeArray[0].dataset.num}"]`)
            updateLi.children[0].textContent++
            console.log(updateLi);

        } else {
            li.innerHTML = `${counter.textContent} has been liked <span> 1</span> time`;
            li["data-num"] = counter.textContent;
            ul.appendChild(li);
        }

        
        
        



    })


    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = document.createElement('p');
        comment.textContent = commentForm.comment.value;
        list.appendChild(comment);
        commentForm.reset();

    })


    counterFunct( pause);
    //console.log("test");
}



function counterFunct(pause){

    //const counter = document.getElementById("counter");
   
    setTimeout(() => { 

        //console.log(pause.id)
        if(pause.id === "pause" ){
            counter.textContent++
            //console.log("test");
        }
        //console.log(pause);

        counterFunct(pause);
        
    }, 1000);


}

function searchLikes(child) {
    console.log(child.dataset.num);
    const samp = child.dataset.num === counter.textContent;
    return samp;
}



document.addEventListener("DOMContentLoaded", init);