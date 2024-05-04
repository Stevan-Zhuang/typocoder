export function importTheme(theme) {
  import(`./styles/${theme}.css`).catch((error) => {
    console.error(`Error loading theme: ${theme}`, error);
  });
}
