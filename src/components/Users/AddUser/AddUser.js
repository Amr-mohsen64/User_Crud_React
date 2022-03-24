import React, { useState, useRef } from 'react'
import Button from '../../UI/Button/Button';
import { Card } from '../../UI/Card/Card';
import classes from "./AddUser.module.css"
import ErrorModal from "../../UI/ErrorModal/ErrorModal"

export const AddUser = (props) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    // const [enteredUserName, setEnteredUserName] = useState("");
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "please enter valid name and age (non empty values)."
            })
            return;
        }

        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "please enter valid age(> 0)."
            })
            return
        }

        let userData = {
            name: enteredName,
            age: enteredUserAge,
            id: Math.random().toString()
        }

        props.onAddUser(userData)

        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // setEnteredUserName("")
        // setEnteredAge("")
    }

    // const userNameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id='username'
                        // value={enteredUserName}
                        // onChange={userNameChangeHandler}
                        ref={nameInputRef}

                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id='age'
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </>
    )
}
