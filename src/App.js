import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import './App.css';
import { useState } from 'react';

const urls = [
  '/pdf/pdf-test.pdf',
  '/pdf/c4611_sample_explain.pdf',
  '/pdf/sample.pdf',
  '/pdf/pdf-sample.pdf',
  '/pdf/gre_research_validity_data.pdf'
];

const App = () => {
  const [i, setI] = useState(0);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const onNextClick = () => {
    (i < urls.length - 1) && setI(i + 1);
  };

  const onPrevClick = () => {
    (i > 0) && setI(i - 1);
  };

  console.log(i);

  return (
    <div className="App">
      <button onClick={onPrevClick}>Prev</button>
      <button onClick={onNextClick}>Next</button>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
        <div
          style={{
            height: '100%',
          }}
        >
          <Viewer
            fileUrl={urls[i]}
            plugins={[
              defaultLayoutPluginInstance,
            ]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default App;
