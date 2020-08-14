async function cancelEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    const res = await fetch("/api/dashboard/hosted" + cancelButton.dataset.id, {
        method: "DELETE",
    });
}
cancelButton.addEventListener("click", cancelEvent);
