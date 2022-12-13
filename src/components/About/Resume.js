import React from 'react';
import Popup from 'reactjs-popup';
import './Resume.css';
import resumepdf from './Resume2022.pdf';
import { Document, Page } from '@react-pdf/renderer';


export default () => (
  <Popup
    trigger={<button className="resume__button">resume</button>}
    className="resume-main"
    modal
    nested
  >
    {close => (
      <div className="resume__popup">
        <button className="close" onClick={close}>
          &times;
        </button>
        <a href={resumepdf}>Link to My File</a>
        {/* <div className="resume__content">
          <Document file={resumepdf}>
            <Page pageNumber={1} />
          </Document>
        </div> */}
        {/* <div className="actions">
          <Popup
            trigger={<button className="resume-download">Download</button>}
            position="top center"
            nested
          >
          </Popup>
          <button
            className="resume-close-button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close
          </button>
        </div> */}
      </div>
    )}
  </Popup>
);