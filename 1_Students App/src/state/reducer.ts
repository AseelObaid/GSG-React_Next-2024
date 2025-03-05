import { IStudent } from "../types";

interface IState {
    studentsList: IStudent[];
}

type Action =
    | { type: 'ADD_STUDENT'; payload: IStudent }
    | { type: 'REMOVE_FIRST_STUDENT' }
    | { type: 'ABSENTS_CHANGE'; payload: { id: string; change: number } }
    |{type:'INIAT',payload:IStudent[]}

const reducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case 'INIAT': {
            return state.studentsList.length === 0 ? { ...state, studentsList: action.payload } : state;
          }
          
        case 'ADD_STUDENT':
            return { ...state, studentsList: [...state.studentsList, action.payload] };

        case 'REMOVE_FIRST_STUDENT': {
            const newStudentList = state.studentsList.slice(); 
            newStudentList.shift();
            return { ...state, studentsList: newStudentList };
        }

        case 'ABSENTS_CHANGE':
            return {
                ...state,
                studentsList: state.studentsList.map((ele) =>
                    ele.id === action.payload.id
                        ? { ...ele, absents: ele.absents + action.payload.change } 
                        : ele
                ),
            };

        default:
            return state;
    }
};

export default reducer;
