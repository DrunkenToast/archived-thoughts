const key = "theme";
const html = document.querySelector("html");

type theme = 'light' | 'dark';

export function setTheme(): theme {
    let theme = localStorage.getItem(key);

    if (theme == "light") {
        html?.classList.add("light-theme");
    } else {
        html?.classList.remove("light-theme");
    }

    return theme ? 'light' : 'dark';
}


export function toggleTheme(): theme {
    let theme = localStorage.getItem(key);

    if (theme == "light") {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, "light");
    }

    return setTheme();
}
