export const createStyle = styleID => {
  const style = document.createElement('style');
  style.id = styleID;
  document.head.append(style);
  return style;
};

export const addStyle = (styleID, styleCSS) => {
  let style = document.getElementById(styleID);
  if (!style) {
    style = createStyle(styleID);
  }
  style.insertAdjacentText("beforeend", styleCSS);
};
