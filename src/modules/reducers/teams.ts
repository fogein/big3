

export const teams = (state=[],action:any) => {
  switch (action.type) {
    case "TEAMS_FETCH_DATA_SUCCES":
      return action.data.data;
      
      default:
        return state;
  }
}
