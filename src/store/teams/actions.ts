import { Dispatch } from 'redux'
import instance from 'utils/axios'
import { FETCH_TEAMS } from 'store/teams/types'
import dataJSON from './clubs.json';


export const fetchTeams = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    // call the file clubs.json to get the data
    const data = dataJSON; // change to the data from the API/Servlet
    // const { data } = await instance.get('teams.json')
    // console.log("Printing data")
    // console.log(data)
    dispatch({ type: FETCH_TEAMS, payload: data })
  } catch (err) {
    console.error(`[Action: fetchTeams] - ${err}`)
  }
}
