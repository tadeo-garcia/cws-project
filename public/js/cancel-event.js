window.addEventListener('DOMContentLoaded', async () => {

    const cancelWrapper = async () => {

        const cancelButton = document.querySelectorAll('.cancel-button')
        // console.log(cancelButton);
        for (let i = 0; i < cancelButton.length; i++ ){
            cancelButton[i].addEventListener("click", cancelEvent)
        }
        
        async function cancelEvent(e) {
            // console.log('inside cancelEvent')
            e.preventDefault();
            e.stopPropagation();
            const res = await fetch("/api/dashboard/hosted/" + Number(this.id), {
                method: "DELETE",
            });
            location.reload();
        }  
    
    }

    cancelWrapper();
})


