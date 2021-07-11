import React from 'react'; 

const TeamForm = props => {
    return (
        <form onSubmit={props.submitHandler}>
            <input onChange={props.inputHandler} 
             type='text' 
             placeHolder='Team Member Name' 
             name='name'
             value={props.newMember.name}
             />
            
            <input onChange={props.inputHandler} 
             type='text' 
             placeHolder='Team Member Location' 
             name='location'
             value={props.newMember.location}/>

             <input onChange={props.inputHandler} 
             type='text' 
             placeHolder='Team Member Role' 
             name='role'
             value={props.newMember.role}/>
             
            <button> Submit </button>
        </form>  
    );
}

export default TeamForm;