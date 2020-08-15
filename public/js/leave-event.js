window.addEventListener('DOMContentLoaded', async () => {

    const wrapper = async () => {
        const leaveButtons = document.querySelectorAll('.leave-button')
        console.log(leaveButtons)


        async function leaveEvent(e) {
            let eventId = Number(this.id);
            e.preventDefault();
            e.stopPropagation();
            const res = await fetch("/api/dashboard/userEvent/" + Number(this.id), {
                method: "DELETE",
            });
            location.reload();
        }

        for (let i = 0; i < leaveButtons.length; i++) {
            leaveButtons[i].addEventListener("click", leaveEvent)
        }

    }
    wrapper();
})
