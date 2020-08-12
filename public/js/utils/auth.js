export const getToken = () => {
    return document.cookie.split("; ").find((cookie) => {
        const [key, value] = cookie.split("=");
        return key === "token";
    });
};

export const getUser = () => {
    const token = getToken();

    const payloadEncoded = token.split(".")[1];
    const payload = atob(payloadEncoded);

    const user = JSON.parse(payload);

    return user;
};

export const redirectIfLoggedIn = async () => {
    const res = await fetch('/api/users/token');
    if (res.ok) window.location.href = '/';
};