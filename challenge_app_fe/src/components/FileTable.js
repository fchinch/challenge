import React from 'react';
import { Table } from 'react-bootstrap';

const FileTable = ({ files }) => {
    return (
        <Table striped bordered>
            <thead>
            <tr>
                <th>File name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
            </tr>
            </thead>
            <tbody>
            {files.map((file, index) => (
                <React.Fragment key={index}>
                    {file.lines.map((line, lineIndex) => (
                        <tr key={lineIndex}>
                            <td>{file.file}</td>
                            <td>{line.text}</td>
                            <td>{line.number}</td>
                            <td>{line.hex}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
            </tbody>
        </Table>
    );
};

export default FileTable;
