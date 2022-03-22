import React, { useState } from 'react'
import Button from '../../UI/Button/Button';
import { Card } from '../../UI/Card/Card';
import classes from "./AddUser.module.css"
import ErrorModal from "../../UI/ErrorModal/ErrorModal"

export const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "please enter valid name and age (non empty values)."
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "please enter valid age(> 0)."
            })
            return
        }

        let userData = {
            name: enteredUserName,
            age: enteredAge,
            id: Math.random().toString()
        }

        props.onAddUser(userData)

        setEnteredUserName("")
        setEnteredAge("")
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

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
                        value={enteredUserName}
                        onChange={userNameChangeHandler}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id='age'
                        value={enteredAge}
                        onChange={ageChangeHandler} />
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </>
    )
}
