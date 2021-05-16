import React from 'react';

export function PDFViewer(props){
    return(
        <embed
            src={props.url}
            width={800}
            height={700}
            type={"application/pdf"}
        />
    );
}

