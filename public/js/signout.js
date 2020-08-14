const signOut = () => {
    const signoutButton = document.getElementById('signout');

    signoutButton.addEventListener('click', async (err)=>{
        const res = await fetch("/api/users/session",{
            method: "DELETE",
        })
    })

}

signOut();