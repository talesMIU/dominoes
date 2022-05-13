export function setTheme(darkMode: boolean) {
  if (darkMode === true)
    return {
      bgColor: '#1C1A1A',
      color: '#E4E4E4'
    };
  return {
    bgColor: '#E4E4E4',
    color: '#1C1A1A'
  };
}
