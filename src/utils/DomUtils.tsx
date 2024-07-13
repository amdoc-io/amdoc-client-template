export const loadScript = (src: string, id: string) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve("");
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
