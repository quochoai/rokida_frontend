import React from 'react';

const InputEdiable = (props) => {
    const {editMode} = props;

    return(
        <>
            <label style={{marginRight:"30px"}}>
                {props.label}
            </label>
            <input type={props.type} name={props.name} defaultValue={props.value} style={{width: "80%"}} disabled={!editMode}
                onChange={(event) => {
                    props.onChange(event);
                }}
            />
        </>
    )
}
export default InputEdiable