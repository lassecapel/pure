const createActions = (actions) => {
  return Object.assign(
    {},
    {
      navNext () {},
      navPrev () {}
    },
    actions
  );
};

export default createActions;
