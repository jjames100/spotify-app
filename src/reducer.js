export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing
  // token:
  //   "BQA-xacQo66BYZWysWVI_2lTpynS--Mhj0AUJseks5JRpXnzvQtO82ySNiurJPoP7MI_eh2Dx7cQhXz9PcfcenN4By7OrHzdAooaQ3ItLAIusnPn5T4MSpCEvYE7b-npQ5Yx589Lgyksq1PD0OsqfV-_NrAvLg5SP-PsXWyKl3lmbVAN",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
