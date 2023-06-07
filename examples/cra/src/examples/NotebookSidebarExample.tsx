import {Jupyter, Notebook} from '@datalayer/jupyter-react';
import {Box} from '@primer/react';
import NotebookToolbar from './notebook/NotebookToolbar';
import CellSidebar from './notebook/cell/CellSidebar';

const NOTEBOOK_UID = 'notebook-id-simple';

export default function NotebookSidebarComponent() {
  return (
    <Jupyter collaborative={false} terminals={true}>
      <div style={{padding: '2rem'}}>
        <Box sx={{width: '100%'}}>
          <NotebookToolbar notebookId={NOTEBOOK_UID} />
          <Notebook
            uid={NOTEBOOK_UID}
            path="ping.ipynb"
            ipywidgets="lab"
            CellSidebar={CellSidebar}
          />
        </Box>
      </div>
    </Jupyter>
  );
}