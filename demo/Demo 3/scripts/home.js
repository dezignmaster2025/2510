document.addEventListener('DOMContentLoaded', ()=>{
    let comment = '';
    const textInput = document.getElementById('textinput');
    const submitButton = document.getElementById('submit-button');
    
    // initial state for the submitButton when no input is available
    if(textInput.value === ''){
        submitButton.disabled = true;
    }

    textInput.addEventListener('input', (event)=>{
        // Submit button state
        if(textInput.value !== '' || comment !== ''){
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }

        comment = comment + event.data;
    })

    submitButton.addEventListener('click', ()=>{
        const commentContainer = document.getElementById('responses-container')
        commentContainer.innerHTML += `<div class="response">
                                            <p>${comment}</p>
                                            <span class="timestamp">${new Date()}5</span>
                                        </div>`;
        comment = '';
        textInput.value = ''
        submitButton.disabled = true;

    })

    
})