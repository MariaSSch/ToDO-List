const initialState = {
    tasks: [],
    canceled: 0,
    done: 0,
}

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const TASK_STATUS_DONE = "TASK_STATUS_DONE";
const TASK_STATUS_CANCELED = "TASK_STATUS_CANCELED";


function countCanceled(list) {
    let c=0;
    if(list.length > 0) {
        list.map((elem) => {
            if(elem.status === "canceled") {
                c++;
            }
        })
        return c;
    }
}

function countDone(list) {
    let d=0;
    if(list.length>0) {
        list.map((elem) => {
            if(elem.status === "done") {
                d++;
            }
        })
        return d;
    }
}

export const taskReducer = (state=initialState, action) => {
   
    if(action.type === ADD_TASK) {
        const task = {
            id: Date.now(),
            name: action.name,
            note: action.note,
            status: "new",
        }
        return {
            tasks: [...state.tasks, task],
            }

    } else if(action.type === DELETE_TASK) {
        return {...state,
        tasks: state.tasks.filter(elem => elem.id !== action.id),
        canceled: countCanceled(state.tasks.filter(elem => elem.id !== action.id)),
        done: countDone(state.tasks.filter(elem => elem.id !== action.id)),
        }

    } else if(action.type === TASK_STATUS_DONE) {
        return {...state,
        tasks: state.tasks.map((elem) => {
           if (elem.id === action.id) {
                elem.status === "done" ?
                    elem.status = "new"
                    :
                    elem.status = "done";
            } 
                return elem;
            } 
        ),
        canceled: state.canceled = countCanceled(state.tasks),
        done: state.done = countDone(state.tasks),
        }

} else if(action.type === TASK_STATUS_CANCELED) {
    return {...state,
    tasks: state.tasks.map((elem) => {
       if (elem.id === action.id) {
            elem.status === "canceled"?
                elem.status = "new"
                :
                elem.status = "canceled";
            } 
                return elem;
            } 
    ),
    canceled: state.canceled = countCanceled(state.tasks),
    done: state.done = countDone(state.tasks),
}
}
    
    return state;
}

export const addTask = (name, note, status) => ({type: "ADD_TASK", name, note, status})
export const deleteTask = (id) => ({type: "DELETE_TASK", id});
export const taskStatusDone = (id) => ({type: "TASK_STATUS_DONE", id});
export const taskStatusCanceled = (id) => ({type: "TASK_STATUS_CANCELED", id});