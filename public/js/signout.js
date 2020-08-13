const signOut = () => {
    const signoutButton = document.getElementById('signout');

    signoutButton.addEventListener('click', async (err)=>{
        const res = await fetch("/api/users/session",{
            method: "DELETE",
        })
    })

    // if(res.ok){
    //     windo.location.href = "/login";
    // }
}

signOut();