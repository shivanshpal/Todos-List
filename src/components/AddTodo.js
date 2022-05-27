import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or descreption cannot be blank")
            return;
        }
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className='container my-3'>
            <h3>Add A Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Add description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success my-3 ">Submit</button>
            </form>
        </div>
    )
}
