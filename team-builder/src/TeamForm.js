import React from 'react'; 

const TeamForm = props => {
    return (
        <div>
            <input onChange={props.inputHandler} type='text' placeHolder='Team Member Name' name='name'/>
            <input onChange={props.inputHandler} type='text' placeHolder='Team Member Location' name='location'/>
            <button> Submit </button>
        </div>  
    );
}

export default TeamForm;