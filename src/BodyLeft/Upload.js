import React from 'react';

const CLASS = 'sv-Upload';
export default class Upload extends React.Component {
    render() {
        return(<div className={CLASS}>
            <div  className={CLASS+'-box'}><span><input id="openFile" type="file" name="Upload"/>Upload</span></div>
        </div>);
    }
}