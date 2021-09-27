import React from 'react';
import Input from "@material-ui/core/Input";
export const ImageDetails = ({ defaultData, selected, data, updateData }) => {
    const handleChange = (e) => {
        updateData({[e.target.name]: e.target.value})
    }
    console.log("data out",data)
    return (
        <div>
            <label><b>Selected image:</b> {selected.split('/').pop()}</label>
            <br/>
            <label><b>File Data</b></label>
            <table>
                <thead>
                    <tr>
                        <th style={{width:'20%'}}>Metadata</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries({...defaultData, ...data}).map(([key, value]) => {
                        return (
                            <tr key={key}>
                                <td>
                                    {key}
                                </td>
                                <td>
                                    <Input name={key} value={typeof value === 'object' ? value['value'] : value}
                                           onChange={handleChange} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};