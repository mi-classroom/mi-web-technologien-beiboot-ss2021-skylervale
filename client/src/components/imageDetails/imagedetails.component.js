import React from 'react';
export const ImageDetails = ({ data, selected }) => {
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
                    <tr>
                        <td>Bits Per Sample</td>
                        <td>{data.file["Bits Per Sample"].description}</td>
                    </tr>
                    <tr>
                        <td>Image Height</td>
                        <td>{data.file["Image Height"].description}</td>
                    </tr>
                    <tr>
                        <td>Image Width</td>
                        <td>{data.file["Image Width"].description}</td>
                    </tr>
                    <tr>
                        <td>Color Components</td>
                        <td>{data.file["Color Components"].description}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            
            {data.exif ?
                <div>
                    <label><b>Exif Data</b></label>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width:'20%'}}>Metadata</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Image Description</td>
                                <td>
                                    {data.exif["ImageDescription"] ?
                                        data.exif["ImageDescription"].description
                                    : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Artist</td>
                                <td>
                                    {data.exif["Artist"] ?
                                        data.exif["Artist"].description
                                    : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Copyright</td>
                                <td>
                                    {data.exif["Copyright"] ?
                                        data.exif["Copyright"].description
                                    : ""}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            : ""}
            <br/>
            {data.xmp ?
                <div>
                    <label><b>Xmp Data</b></label>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width:'20%'}}>Metadata</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>InstanceID</td>
                                <td>{data.xmp["InstanceID"].description}</td>
                            </tr>
                            <tr>
                                <td>Creator</td>
                                <td>{data.xmp["creator"].description}</td>
                            </tr>
                            <tr>
                                <td>Rights</td>
                                <td>{data.xmp["rights"].description}</td>
                            </tr>
                            <tr>
                                <td>Subject</td>
                                <td>{data.xmp["subject"].description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            : ""}
        </div>
    );
};