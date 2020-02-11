export const selectStyles = (light, myTheme) => theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: light ? theme.colors.neutral15 : myTheme.colors.purpleLight,
    primary25: light ? theme.colors.neutral10 : myTheme.colors.purpleLight,
    primary: light ? myTheme.colors.blueGray : myTheme.colors.purple,
  },
});
